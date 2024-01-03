import Mission from "@/components/Footer/Mission";
import AnnouncementBar from "@/components/Header/AnnouncementBar";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import GlassesModel from "@/components/Models/GlassesModel";
import ModelDescription from "@/components/Models/ModelDescription";
import FeaturedSection from "@/components/Sections/FeaturedSection";
import Section from "@/components/SliderSection/Section";

export default function Home() {
  return (
    <main>
      <AnnouncementBar test={"data2"} fetchedAnnouncements={"data"} />
      <Header />
      <Hero />
      <div className="flex gap-14 items-center bg-gray-100 justify-between">
        <GlassesModel />
        <ModelDescription />
      </div>
      <FeaturedSection direction="right" headerText="Shop Best Sellers." />
      <FeaturedSection direction="left" headerText="Popular Right Now." />
      <Section />
      <Mission />
    </main>
  );
}
