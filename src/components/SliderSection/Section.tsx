import { client } from "@/utils/sanity/client";
import React from "react";
import SliderSections from ".";
import type { SliderSection } from "../../../schema"

const Section = async () => {
  const sliderSections = await client.fetch<SliderSection[]>(
    `*[_type == "sliderItems"]`
  );
  return <SliderSections sliderSections={sliderSections} />;
};

export default Section;
