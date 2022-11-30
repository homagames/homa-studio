import { FiFileText } from 'react-icons/fi'

export default {
  title: 'News Feed Block',
  type: 'object',
  name: 'modularMarketingNewsFeedBlock',
  icon: FiFileText,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: "News Feed",
    },
    {
      title: 'News Articles',
      name: 'newsArticles',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'blog'}
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
        title: 'News Feed Block',
        subtitle: title
      }
    }
  }
}