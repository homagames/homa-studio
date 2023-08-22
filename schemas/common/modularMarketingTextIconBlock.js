import { FiCopy } from 'react-icons/fi'

export default {
  title: 'Hero Block',
  type: 'object',
  name: 'modularMarketingTextIconBlock',
  icon: FiCopy,
  fields: [
    {
      title: 'Sub Heading',
      name: 'subHeading',
      type: 'string',
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    },
    {
      title: 'Text',
      name: 'text',
      type: 'contentRich',
      validation: Rule => Rule.required()
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
    },
    {
      title: 'Animated Icon',
      name: 'animatedIcon',
      type: 'string',
      options: {
        list: [
          {title: 'Rotating Flagpole', value: 'flagpole'},
          {title: 'Bouncing Hands', value: 'hands'},
          {title: 'Moving Eyeball', value: 'eyeball'},
          {title: 'Rotating Faces', value: 'faces'},
          {title: 'Spinning Chess Pieces', value: 'chess'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
    {
      title: 'Character Icon',
      name: 'characterIcon',
      description: 'Selecting a character will replace the above "animated icon" with a static character',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Skull', value: 'skull'},
          {title: 'Bees', value: 'bees'},
          {title: 'Horse', value: 'horse'},
          {title: 'Robot', value: 'robot'},
          {title: 'Princess', value: 'princess'},
          {title: 'Panda', value: 'panda'}
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
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
        title: 'Text + Icon Block',
        subtitle: `${heading}`
      }
    }
  }
}