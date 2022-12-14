import { FiUsers } from 'react-icons/fi'

export default {
  title: 'People Carousel Block',
  type: 'object',
  name: 'modularMarketingPeopleCarouselBlock',
  icon: FiUsers,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: "Our Partners & Investors",
    },
    {
      title: 'People',
      name: 'people',
      type: 'array',
      of: [{
        title: 'Item',
        name: 'item',
        type: 'object',
        fields: [{
          title: "Title",
          description: "The name of this person",
          name: "title",
          type: "string",
          validation: Rule => Rule.required()
        },
        {
          title: "Image",
          name: "image",
          type: "defaultImage",
          validation: Rule => Rule.required()
        },
        {
          title: "Job Title",
          name: "jobTitle",
          type: "string"
        },
        {
          title: "Company",
          name: "company",
          type: "string"
        },
        {
          title: "LinkedIn",
          name: "linkedIn",
          type: "url"
        },
        {
          title: "Twitter",
          name: "twitter",
          type: "url"
        }]
      }],
      validation: Rule => Rule.required().min(3)
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
        title: 'People Carousel Block',
        subtitle: title
      }
    }
  }
}