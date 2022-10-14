import { FiArrowDownCircle } from "react-icons/fi"

export default {
  title: 'FAQs',
  name: 'faqs',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}]
    },
    {
      title: 'FAQs',
      name: 'faqs',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          icon: FiArrowDownCircle,
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'array', of: [{type: 'block'}], title: 'Answer'}
          ],
          preview: {
            select: {
              question: 'question'
            },
            prepare(selection) {
              const {question} = selection
              return {
                title: question
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}