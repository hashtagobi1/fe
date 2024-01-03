import { client } from "./client";
import imageUrlBuilder from "@sanity/image-url";
import type { CustomImage } from "../../../schema";
const builder = imageUrlBuilder(client);

// type ImageProps = Pick<SliderItem["image"], "">;

export function imageBuilder(source: CustomImage) {
  return builder.image(source);
}
export default imageBuilder;
