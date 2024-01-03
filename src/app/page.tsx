import Mission from "@/components/Footer/Mission";
import AnnouncementBar from "@/components/Header/AnnouncementBar";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import FeaturedSection from "@/components/Sections/FeaturedSection";
import SliderSections from "@/components/SliderSection";
import Section from "@/components/SliderSection/Section";

export default function Home() {
  return (
    <main>
      <AnnouncementBar test={"data2"} fetchedAnnouncements={"data"} />
      <Header />
      <Hero />
      <FeaturedSection direction="right" headerText="Shop Best Sellers." />
      <FeaturedSection direction="left" headerText="Popular Right Now." />
      <Section />
      <Mission />
    </main>
  );
}
