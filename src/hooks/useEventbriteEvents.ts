import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { siteContent } from "@/data/siteContent";

export interface EventbriteEvent {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  rsvpLink: string;
  imageUrl?: string | null;
}

export function useEventbriteEvents() {
  return useQuery<EventbriteEvent[]>({
    queryKey: ["eventbrite-events"],
    queryFn: async () => {
      const { data, error } = await supabase.functions.invoke("fetch-eventbrite-events");

      if (error) {
        console.error("Edge function error:", error);
        throw error;
      }

      if (data?.success && data.events?.length > 0) {
        return data.events;
      }

      // Fallback to hardcoded events
      return siteContent.events.map((e) => ({
        ...e,
        imageUrl: null,
      }));
    },
    staleTime: 1000 * 60 * 15, // 15 min cache
    retry: 1,
  });
}
