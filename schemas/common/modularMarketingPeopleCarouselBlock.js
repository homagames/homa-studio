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
  ],
  preview: { 
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: 'News Feed Block',
        subtitle: title
      }
    }
  }
}