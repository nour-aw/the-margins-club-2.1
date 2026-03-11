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
    const apiToken = Deno.env.get('EVENTBRITE_API_TOKEN');
    if (!apiToken) {
      console.error('EVENTBRITE_API_TOKEN not configured');
      return new Response(
        JSON.stringify({ success: false, error: 'Eventbrite API token not configured', events: [] }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const url = `https://www.eventbriteapi.com/v3/organizations/${ORGANIZER_ID}/events/?status=live&order_by=start_asc&expand=venue,logo`;

    console.log('Fetching events from Eventbrite API');

    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      const text = await response.text();
      console.error(`Eventbrite API error [${response.status}]:`, text);
      return new Response(
        JSON.stringify({ success: false, error: `Eventbrite API returned ${response.status}`, events: [] }),
        { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const rawEvents = data.events || [];
    console.log(`Found ${rawEvents.length} live events`);

    const events = rawEvents.map((event: any) => {
      const startUtc = event.start?.utc || event.start?.local || '';
      const venueName = event.venue?.name || event.venue?.address?.city || 'KW Region';
      const imageUrl = event.logo?.original?.url || event.logo?.url || null;
      const eventUrl = event.url || `https://www.eventbrite.ca/e/${event.id}`;

      let formattedDate = '';
      let formattedTime = '';

      if (startUtc) {
        try {
          const d = new Date(event.start?.local || startUtc);
          formattedDate = d.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });
          formattedTime = d.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: '2-digit',
          });
        } catch {
          formattedDate = startUtc;
        }
      }

      // Strip HTML tags from description
      const rawDesc = event.description?.text || event.summary || '';
      const description = rawDesc.substring(0, 200) + (rawDesc.length > 200 ? '…' : '');

      return {
        title: event.name?.text || event.name || 'Untitled Event',
        date: formattedDate,
        time: formattedTime,
        location: venueName,
        description,
        rsvpLink: eventUrl,
        imageUrl,
      };
    });

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
