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
      title: 'Background Image',
      description: '[OPTIONAL] will add a background image instead of a pink gradient',
      name: 'backgroundImage',
      type: 'defaultImage',
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
        title: 'Condensed CTA Block',
        subtitle: `${heading}`
      }
    }
  }
}