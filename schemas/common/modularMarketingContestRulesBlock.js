import { FiCheckSquare } from 'react-icons/fi'

// Contest-only fork of the Stat List Block. Same fields, but the rendering
// component bakes in uniform two-line heading heights and a slightly smaller
// heading size so multi-word headings like "CREATIVE FREEDOM" wrap cleanly and
// line up with single-word ones. Kept separate so the shared Stat List Block
// (used on other marketing pages with short numeric headings) is unaffected.
export default {
  title: 'Contest Rules Block',
  type: 'object',
  name: 'modularMarketingContestRulesBlock',
  icon: FiCheckSquare,
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
          }
        ]
      }],
      validation: Rule => Rule.required().max(6)
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
        title: 'Contest Rules Block',
        subtitle: title
      }
    }
  }
}
