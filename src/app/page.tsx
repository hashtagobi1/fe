import AnnouncementBar from "@/components/Header/AnnouncementBar";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/Sections/FeaturedSection";

export default async function Home() {
  return (
    <main>
      <AnnouncementBar test={"data2"} fetchedAnnouncements={"data"} />
      <Header />
      <Hero />
      <FeaturedProducts headerText="Shop Best Sellers." />
      <FeaturedProducts headerText="Popular Right Now." />
    </main>
  );
}
