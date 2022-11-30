import { FiColumns } from 'react-icons/fi'

export default {
  title: 'Text / Image Split Block',
  type: 'object',
  name: 'modularMarketingTextImageSplitBlock',
  icon: FiColumns,
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
      title: 'Flip Image',
      name: 'flipImage',
      description: 'Toggling this on will flip the image to be on the left and text on the right',
      type: 'boolean',
      defaultValue: false,
    }
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare(selection) {
      const {heading} = selection
      return {
        title: 'Text / Image Split Block',
        subtitle: `${heading}`
      }
    }
  }
}