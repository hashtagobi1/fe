import AnnouncementBar from "@/components/AnnouncementBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { client } from "@/utils/sanity/client";
import { groq } from "next-sanity";

export default async function Home() {
  return (
    <main>
      <AnnouncementBar test={"data2"} fetchedAnnouncements={"data"} />
      <Header />
      <Hero />
    </main>
  );
}
