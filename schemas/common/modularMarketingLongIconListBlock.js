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