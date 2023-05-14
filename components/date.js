import { parseISO, format } from "date-fns-jalali";

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dir="auto" dateTime={dateString}>{format(date, "d LLLL yyyy")}</time>;
}