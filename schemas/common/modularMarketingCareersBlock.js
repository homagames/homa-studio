import { FiZap } from 'react-icons/fi'

export default {
  title: 'Careers Block',
  type: 'object',
  name: 'modularMarketingCareersBlock',
  icon: FiZap,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: "Want To Join Us?",
    },
  ],
  preview: { 
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: 'Careers Block',
        subtitle: title
      }
    }
  }
}