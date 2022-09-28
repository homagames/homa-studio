import { FiUser } from "react-icons/fi"

export default {
  title: 'Games',
  name: 'games',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Hero Intro Text',
      name: 'heroIntroText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'From Customers To Collaborators Text',
      name: 'fromCustomersToCollaboratorsText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: "People You'll Meet Text",
      name: 'peopleYoullMeetText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: "People You'll Meet",
      name: 'peopleYoullMeet',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          icon: FiUser,
          fields: [
            {name: 'heading', type: 'string', title: 'Heading', description: 'eg: "Publishing Manager"', validation: Rule => Rule.required()},
            {name: 'text', type: 'text', rows: 3, title: 'Text', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              heading: 'heading',
              text: 'text',
            },
            prepare(selection) {
              const {heading, text} = selection
              return {
                title: heading,
                subtitle: `${text}`,
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: "Build A Brand CTA Text",
      name: 'buildABrandCtaText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare ({ title }) {
      return {
        title
      }
    }
  }
}