import { LandingSections } from "@/components/landing-sections";
import { ScrollSequence } from "@/components/scroll-sequence";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <ScrollSequence>
        <LandingSections />
      </ScrollSequence>
    </>
  );
}
