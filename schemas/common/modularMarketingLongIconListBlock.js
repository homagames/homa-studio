import { FiList } from 'react-icons/fi'

export default {
  title: 'Long Icon List Block',
  type: 'object',
  name: 'modularMarketingLongIconListBlock',
  icon: FiList,
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
            title: "Sub Heading",
            name: "subHeading",
            type: "string",
            validation: Rule => Rule.required()
          },
          {
            title: "Heading",
            name: "heading",
            type: "string",
            validation: Rule => Rule.required()
          },
          {
            title: "Icon",
            name: "icon",
            type: "defaultImage",
            validation: Rule => Rule.required()
          }
        ]
      }],
      validation: Rule => Rule.required().max(6)
    },
    {
      title: 'Character?',
      name: 'character',
      description: 'Toggling this on will add a character to the bottom of this list',
      type: 'boolean',
      initialValue: false,
    },
    {
      title: 'Remove Top Border',
      name: 'removeTopBorder',
      description: 'Toggling this on will remove the border from the top of this component',
      type: 'boolean',
      defaultValue: false,
    },
    {
      title: 'Remove Bottom Border',
      name: 'removeBottomBorder',
      description: 'Toggling this on will remove the border from the bottom of this component',
      type: 'boolean',
      defaultValue: false,
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
        title: 'Long Icon List Block',
        subtitle: title
      }
    }
  }
}