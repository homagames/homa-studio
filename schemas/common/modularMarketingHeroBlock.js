import { FiCreditCard } from 'react-icons/fi'

export default {
  title: 'Hero Block',
  type: 'object',
  name: 'modularMarketingHeroBlock',
  icon: FiCreditCard,
  fields: [
    {
      title: 'Heading',
      name: 'heading',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required()
    },
    {
      title: 'Text',
      description: '[OPTIONAL] will add a text block below the hero heading',
      name: 'text',
      type: 'text',
      rows: 3,
    },
    {
      title: 'Background Image',
      description: '[OPTIONAL] will add a background image instead of a pink gradient',
      name: 'backgroundImage',
      type: 'defaultImage',
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
      title: 'Character Icon',
      name: 'characterIcon',
      description: '[OPTIONAL] will add a character image to the hero - should ideally NOT be paired with the above "Background Image" field',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Skull', value: 'skull'},
          {title: 'Farmer', value: 'farmer'},
          {title: 'Horse', value: 'horse'},
          {title: 'Robot', value: 'robot'},
          {title: 'Princess', value: 'princess'},
          {title: 'Panda', value: 'panda'}
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
  ],
  preview: {
    select: {
      heading: 'heading'
    },
    prepare(selection) {
      const {heading} = selection
      return {
        title: 'Hero Block',
        subtitle: `${heading}`
      }
    }
  }
}