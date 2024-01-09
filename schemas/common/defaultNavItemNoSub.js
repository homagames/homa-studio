import { FiArrowRight } from 'react-icons/fi'

export default {
  title: 'Nav Item',
  type: 'object',
  name: 'navItemNoSub',
  icon: FiArrowRight,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: '(Internal) Link',
      name: 'internalLink',
      type: 'reference',
      options: {
        disableNew: true,
      },
      to: [
        {type: 'about'},
        {type: 'careers'},
        {type: 'community'},
        {type: 'faqs'},
        {type: 'games'},
        {type: 'homaLab'},
        {type: 'home'},
        {type: 'privacy'},
        {type: 'subscriptionTerms'},
        {type: 'terms'},
        {type: 'marketingPages'},
        {type: 'cookiePolicy'},
        {type: 'eula'},
        {type: 'blogLanding'},
        {type: 'products'},
      ],
      hidden: ({ parent, value }) => !value && parent?.externalLink,
    },
    {
      title: '(External) Link',
      name: 'externalLink',
      hidden: ({ parent, value }) => !value && parent?.internalLink,
      type: 'url',
    }
  ],
  preview: {
    select: {
      title: 'title',
      internalLink: 'internalLink',
    },
    prepare(selection) {
      const {title, internalLink} = selection
      return {
        title: `${title}`,
        subtitle: internalLink ? `Internal Link` : `External Link`
      }
    }
  }
}