import { FiArrowDownCircle } from "react-icons/fi"

export default {
  title: 'Community',
  name: 'community',
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
      title: "Hero Image",
      name: "heroImage",
      type: "defaultImage",
      validation: Rule => Rule.required()
    },
    {
      title: 'Gang Q&A',
      name: 'gangQAndA',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          icon: FiArrowDownCircle,
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'text', rows: 3, title: 'Answer'}
          ],
          preview: {
            select: {
              question: 'question',
              answer: 'answer'
            },
            prepare(selection) {
              const {question, answer} = selection
              return {
                title: question,
                subtitle: `${answer}`
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