import { FiVideo } from 'react-icons/fi'

export default {
  title: 'Modular Video Image',
  type: 'object',
  name: 'modularVideoBlock',
  icon: FiVideo,
  fields: [
    {
      title: 'video',
      name: 'video',
      type: 'url',
      description: 'This is the direct URL from Vimeo',
      validation: Rule => Rule.required()
    },
    {
      title: 'Caption',
      name: 'caption',
      type: 'string',
    },
  ],
  preview: {
    select: {
      layout: 'layout'
    },
    prepare(selection) {
      const {layout} = selection
      return {
        title: 'Video Block'
      }
    }
  }
}