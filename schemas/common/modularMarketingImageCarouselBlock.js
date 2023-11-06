import { FiImage } from 'react-icons/fi'

export default {
  title: 'Image Carousel Block',
  type: 'object',
  name: 'modularMarketingImageCarouselBlock',
  icon: FiImage,
  fields: [
    {
      title: "Images",
      name: 'images',
      type: 'array',
      description: 'The images to show in this marquee/carousel, must be a minimum of 4 to make the infinite looping work',
      options: {
        layout: 'grid'
      },
      of: [{
        type: 'defaultImage',
      }],
      validation: Rule => Rule.min(4)
    },
    {
      title: 'Internal ID',
      name: 'internalId',
      type: 'string',
      description: 'used as an anchor for in-page links (only required if you want to link to this section), must be unique, eg: "block-1"'
    }
  ],
  preview: { 
    select: {
      images: 'images'
    },
    prepare(selection) {
      const {images} = selection

      return {
        title: 'Image Carousel Block',
        subtitle: images ? `${images.length} Images` : `0 Images`
      }
    }
  }
}