import { FiArrowDownCircle } from "react-icons/fi"

export default {
  title: 'Community',
  name: 'community',
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
      title: "Hero Image",
      name: "heroImage",
      type: "defaultImage",
      validation: Rule => Rule.required()
    },
    {
      title: "Mobile Hero Image",
      name: "mobileHeroImage",
      type: "defaultImage",
      validation: Rule => Rule.required()
    },
    {
      title: 'TikToks',
      name: 'tikToks',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'url', type: 'url', title: 'Url', description: 'The link to this video on TikTok', validation: Rule => Rule.required()},
            {name: 'video', type: 'string', title: 'Video', description: 'The video link from Vimeo', validation: Rule => Rule.required()},
            {name: 'postDate', type: "date", options: { dateFormat: "MMMM Do YYYY", }, title: 'Post Date', description: 'The date this TikTok was posted', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              url: 'url',
            },
            prepare(selection) {
              const {url} = selection
              return {
                title: 'TikTok Video',
                subtitle: `${url}`,
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Roadmap',
      name: 'roadmap',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'date', type: 'string', title: 'Date', description: 'eg: "Q3_2022_"', validation: Rule => Rule.required()},
            {name: 'heading', type: 'string', title: 'Heading', description: 'eg: "HomaGang Showtime"', validation: Rule => Rule.required()},
            {name: 'text', type: 'text', rows: 3, title: 'Text', validation: Rule => Rule.required()},
            {
              title: "Image",
              name: "image",
              type: "defaultImage",
              validation: Rule => Rule.required()
            },
          ],
          preview: {
            select: {
              heading: 'heading',
              date: 'date',
              image: 'image'
            },
            prepare(selection) {
              const {heading, date, image} = selection
              return {
                title: heading,
                subtitle: `${date}`,
                media: image
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Gang Q&A',
      name: 'gangQAndA',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          icon: FiArrowDownCircle,
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'text', rows: 3, title: 'Answer'}
          ],
          preview: {
            select: {
              question: 'question',
              answer: 'answer'
            },
            prepare(selection) {
              const {question, answer} = selection
              return {
                title: question,
                subtitle: `${answer}`
              }
            }
          }
        }
      ],
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