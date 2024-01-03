import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from 'sanity-codegen'

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
}

/**
 * Product
 *
 *
 */
export interface Product extends SanityDocument {
  _type: 'product'

  /**
   * Product Name — `string`
   *
   *
   */
  name?: string

  /**
   * Price — `number`
   *
   *
   */
  price?: number

  /**
   * Description — `text`
   *
   *
   */
  desc?: string

  /**
   * Starting Color — `simplerColor`
   *
   *
   */
  from_color?: SimplerColor

  /**
   * Middle Color — `simplerColor`
   *
   *
   */
  middle_color?: SimplerColor

  /**
   * Ending Color — `simplerColor`
   *
   *
   */
  end_color?: SimplerColor

  /**
   * Product Notes — `array`
   *
   *
   */
  notes?: Array<SanityKeyed<Notes>>
}

/**
 * Slider Section
 *
 *
 */
export interface SliderSection extends SanityDocument {
  _type: 'sliderSection'

  /**
   * Section Title — `string`
   *
   *
   */
  title?: string

  /**
   * Sliders — `array`
   *
   *
   */
  sliderItems?: Array<SanityKeyed<SliderItem>>
}

export type Notes = {
  _type: 'notes'
  /**
   * Note Title — `string`
   *
   *
   */
  title?: string

  /**
   * Note Description — `text`
   *
   *
   */
  desc?: string
}

export type SliderItem = {
  _type: 'sliderItem'
  /**
   * Slider Title — `string`
   *
   *
   */
  title?: string

  /**
   * Slider Image — `image`
   *
   *
   */
  image?: {
    _type: 'image'
    asset: SanityReference<SanityImageAsset>
    crop?: SanityImageCrop
    hotspot?: SanityImageHotspot
  }
}

export type CustomImage = {
  _type: 'image'
  asset: SanityReference<SanityImageAsset>
  crop?: SanityImageCrop
  hotspot?: SanityImageHotspot
}

export type Documents = Product | SliderSection

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type SimplerColor = any
