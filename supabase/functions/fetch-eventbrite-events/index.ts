const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

const ORGANIZER_ID = '68851559643';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Use Eventbrite's public-facing API endpoint for organizer events
    const url = `https://www.eventbrite.ca/api/v3/destination/organizers/${ORGANIZER_ID}/events/?page_size=20&time_filter=current_future`;

    console.log('Fetching events from Eventbrite:', url);

    const response = await fetch(url, {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Mozilla/5.0 (compatible)',
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`Eventbrite API error [${response.status}]:`, text);
      return new Response(
        JSON.stringify({ success: false, error: `Eventbrite returned ${response.status}`, events: [] }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('Eventbrite raw response keys:', Object.keys(data));

    // Parse the response - Eventbrite's destination API returns events in data.events
    const rawEvents = data.events || data.data?.events || [];
    console.log(`Found ${rawEvents.length} events`);

    const events = rawEvents.map((event: any) => {
      const startDate = event.start_date || event.primary_venue_start_date || '';
      const startTime = event.start_time || '';
      const venueName = event.primary_venue?.name || event.venue?.name || event.primary_venue?.address?.city || 'KW Region';
      const imageUrl = event.image?.url || event.logo?.url || null;

      // Build the Eventbrite event URL
      const eventUrl = event.url || `https://www.eventbrite.ca/e/${event.id}`;

      // Format date nicely
      let formattedDate = startDate;
      if (startDate) {
        try {
          const d = new Date(startDate + (startTime ? `T${startTime}` : ''));
          formattedDate = d.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
        } catch { /* keep raw */ }
      }

      let formattedTime = startTime;
      if (startTime) {
        try {
          const [h, m] = startTime.split(':');
          const d = new Date();
          d.setHours(parseInt(h), parseInt(m));
          formattedTime = d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
        } catch { /* keep raw */ }
      }

      return {
        title: event.name || event.title || 'Untitled Event',
        date: formattedDate,
        time: formattedTime,
        location: venueName,
        description: event.summary || event.description?.text?.substring(0, 200) || '',
        rsvpLink: eventUrl,
        imageUrl,
      };
    });

    console.log('Parsed events:', events.length);

    return new Response(
      JSON.stringify({ success: true, events }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching Eventbrite events:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message, events: [] }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
