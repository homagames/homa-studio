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
        title: 'News Feed Block',
        subtitle: title
      }
    }
  }
}