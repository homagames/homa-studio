import { FiHelpCircle } from 'react-icons/fi'

export default {
  title: 'FAQ Block',
  type: 'object',
  name: 'modularMarketingFaqBlock',
  icon: FiHelpCircle,
  fields: [
    {
      title: 'Heading',
      name: 'title',
      type: 'string',
      initialValue: 'FAQ',
    },
    {
      title: 'Questions',
      name: 'faqs',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'faqItem',
          fields: [
            {
              title: 'Question',
              name: 'question',
              type: 'string',
              validation: Rule => Rule.required(),
            },
            {
              title: 'Answer',
              name: 'answer',
              type: 'array',
              of: [{ type: 'block' }],
            },
          ],
          preview: {
            select: { title: 'question' },
          },
        },
      ],
    },
    {
      title: 'Internal ID',
      name: 'internalId',
      type: 'string',
      description: 'used as an anchor for in-page links (only required if you want to link to this section), must be unique, eg: "faq"',
    },
  ],
  preview: {
    select: { title: 'title' },
    prepare(selection) {
      const { title } = selection
      return {
        title: 'FAQ Block',
        subtitle: title,
      }
    },
  },
}
