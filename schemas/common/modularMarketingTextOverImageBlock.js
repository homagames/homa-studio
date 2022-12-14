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