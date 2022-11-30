import { FiTrello } from 'react-icons/fi'

export default {
  title: 'Text Over Image Split Block',
  type: 'object',
  name: 'modularMarketingTextOverImageBlock',
  icon: FiTrello,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Text',
      name: 'text',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: 'Image',
      name: 'backgroundImage',
      type: 'defaultImage',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare(selection) {
      const {heading} = selection
      return {
        title: 'Text Over Image Block',
        subtitle: `${heading}`
      }
    }
  }
}