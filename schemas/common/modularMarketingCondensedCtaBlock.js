import { FiCreditCard } from 'react-icons/fi'

export default {
  title: 'Condensed CTA Block',
  type: 'object',
  name: 'modularMarketingCondensedCtaBlock',
  icon: FiCreditCard,
  fields: [
    {
      title: 'Sub Heading',
      name: 'subHeading',
      type: 'string', 
    },
    {
      title: 'Heading',
      name: 'heading',
      type: 'string', 
      validation: Rule => Rule.required()
    },
    {
      title: 'Background Landscape',
      name: 'backgroundLandscape',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Urban', value: 'urban'},
          {title: 'Urban 2', value: 'urban2'},
          {title: 'Suburban', value: 'suburban'},
          {title: 'Suburban 2', value: 'suburban2'},
          {title: 'Country', value: 'country'},
          {title: 'Country 2', value: 'country2'},
          {title: 'Country 3', value: 'country3'},
          {title: 'Coastal', value: 'coastal'},
          {title: 'Coastal 2', value: 'coastal2'},
          {title: 'Coastal 3', value: 'coastal3'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
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
      title: 'CTA Button Internal ID',
      name: 'ctaButtonId',
      description: 'The Internal link for the CTA button, used alongside "Internal ID" within other modules',
      type: 'string',
      hidden: ({ parent, value }) => !value && !parent?.ctaButtonText
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
        title: 'Condensed CTA Block',
        subtitle: `${heading}`
      }
    }
  }
}