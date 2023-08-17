import { FiArrowRight } from 'react-icons/fi'

export default {
  title: 'Nav Item',
  type: 'object',
  name: 'navItemSocial',
  icon: FiArrowRight,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
    }
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare(selection) {
      const {title} = selection
      return {
        title: `${title}`
      }
    }
  }
}