import { FiCrosshair } from 'react-icons/fi'

export default {
  title: 'Games Feed Block',
  type: 'object',
  name: 'modularMarketingGamesFeedBlock',
  icon: FiCrosshair,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: "Greatest Hits To Date",
    },
    {
      title: 'Games',
      name: 'games',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'gamesLibrary'}
        ]
      }],
      validation: Rule => Rule.required().min(3)
    },
  ],
  preview: { 
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: 'Games Feed Block',
        subtitle: title
      }
    }
  }
}