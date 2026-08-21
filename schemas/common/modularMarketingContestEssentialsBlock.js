import { FiGrid } from 'react-icons/fi'

// Contest-only fork of the Stat List Block. Adds an optional small top LABEL per
// cell (e.g. PRIZE / DEADLINE / FORMAT / LENGTH) above the big heading, matching
// the contest "essentials" design. Kept separate so the shared Stat List Block
// (used on other marketing pages) is unaffected.
export default {
  title: 'Contest Essentials Block',
  type: 'object',
  name: 'modularMarketingContestEssentialsBlock',
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
            title: "Label",
            name: "label",
            description: "[OPTIONAL] small label shown above the heading, e.g. PRIZE / DEADLINE / FORMAT / LENGTH",
            type: "string",
          },
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
        title: 'Contest Essentials Block',
        subtitle: title
      }
    }
  }
}
