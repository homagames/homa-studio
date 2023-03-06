import { FiGrid } from 'react-icons/fi'

export default {
  title: 'Multiple CTA Block',
  type: 'object',
  name: 'modularMarketingMultipleCtaBlock',
  icon: FiGrid,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'List Items',
      name: 'listItems',
      type: 'array',
      of: [{
        title: 'Item',
        name: 'item',
        type: 'object',
        fields: [
          {
            title: "Heading",
            name: "heading",
            type: "string",
            validation: Rule => Rule.required()
          },
          {
            title: "Text",
            name: "text",
            type: "text",
            rows: 2
          },
          {
            title: 'CTA Button Text',
            name: 'ctaButtonText',
            description: '[OPTIONAL] the text to display in the CTA button',
            type: 'string',
          },
          {
            title: 'CTA Button URL',
            name: 'ctaButtonUrl',
            description: 'The link for the CTA button',
            type: 'url',
            hidden: ({ parent, value }) => !value && !parent?.ctaButtonText
          }
        ]
      }],
      validation: Rule => Rule.required().max(6)
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
        title: 'Multiple CTA Block',
        subtitle: title
      }
    }
  }
}