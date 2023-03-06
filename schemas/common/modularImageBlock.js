import { FiCamera } from 'react-icons/fi'

export default {
  title: 'Modular Image',
  type: 'object',
  name: 'modularImageBlock',
  icon: FiCamera,
  fields: [
    {
      title: 'Image',
      name: 'image',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      description: '(Optional) Add a link to this image',
    }
  ],
  preview: {
    select: {
      layout: 'layout'
    },
    prepare(selection) {
      const {layout} = selection
      return {
        title: 'Image Block'
      }
    }
  }
}