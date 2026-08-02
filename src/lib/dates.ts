import { SITE_CONFIG } from "../site.config";

const postDateFormatter = new Intl.DateTimeFormat("sv-SE", {
  timeZone: SITE_CONFIG.timeZone,
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
});

export function formatPostDate(date: Date): string {
  return postDateFormatter.format(date);
}
