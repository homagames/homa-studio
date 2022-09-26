import { FiSmile } from 'react-icons/fi'

export default {
  title: 'Quote Block',
  type: 'object',
  name: 'modularQuoteBlock',
  icon: FiSmile,
  fields: [
    {
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Author Name',
      name: 'authorName',
      type: 'string',
    },
    {
      title: 'Author Job Title',
      name: 'authorJobTitle',
      type: 'string'
    }
  ],
  preview: {
    select: {
      text: 'text'
    },
    prepare(selection) {
      const {text} = selection
      return {
        title: 'Quote Block',
        subtitle: `${text}`
      }
    }
  }
}