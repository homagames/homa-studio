import { FiArrowRight } from 'react-icons/fi'

export default {
  title: 'Nav Item',
  type: 'object',
  name: 'navItem',
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
        {type: 'cookiePolicy'},
        {type: 'eula'},
        {type: 'marketingPages'},
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
    },
    {
      title: "Sub Items (Dropdown Children)",
      type: "array",
      name: "subItems",
      of: [
        {
          type: "navItemNoSub",
          name: "navItem",
        }
      ],
    }
  ],
  preview: {
    select: {
      title: 'title',
      subItems: 'subItems'
    },
    prepare(selection) {
      const {title, subItems} = selection
      return {
        title: `${title}`,
        subtitle: `${ subItems?.length ? `${subItems?.length} Children` : 'No Children' }`,
      }
    }
  }
}