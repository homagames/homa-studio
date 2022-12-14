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
    {
      title: 'Internal ID',
      name: 'internalId',
      type: 'string',
      description: 'used as an anchor for in-page links (only required if you want to link to this section), must be unique, eg: "block-1"'
    }
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