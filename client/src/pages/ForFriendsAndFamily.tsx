import AudiencePage from "@/components/AudiencePage";
import { AUDIENCE_PAGES } from "@/lib/data";
export default function ForFriendsAndFamily() {
  return <AudiencePage page={AUDIENCE_PAGES.find((p) => p.id === "a6")!} />;
}
