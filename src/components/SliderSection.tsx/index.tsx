import { client } from "@/utils/sanity/client";
import type { SliderSection } from "../../../../sungod-be/schema";
import Image from "next/image";
import imageBuilder from "@/utils/sanity/imageBuilder";

type Props = {};

const SliderSections = async (props: Props) => {
  const sliderSection = await client.fetch<SliderSection[]>(
    `*[_type == "sliderItems"]`
  );
  return (
    <div className="sectionContainer">
      {sliderSection.map((section, i) => (
        <section key={section._id}>
          <h2 className="text-2xl self-start md:text-4xl mt-10  font-semibold mb-10">
            Shop By {section.title}.
            <div className="w-full flex">
              {section.sliderItems?.map((item, i) => {
                console.log({ I: item.title });

                return (
                  <div className="p-4" key={item._key}>
                    <div className="">
                      {item.image && (
                        <Image
                          width={"1000"}
                          height={"1000"}
                          className="w-full"
                          src={imageBuilder(item.image)
                            .width(1000)
                            .height(1000)
                            .url()}
                          alt={item.title ?? "slider image"}
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </h2>
        </section>
      ))}
    </div>
  );
};

export default SliderSections;
