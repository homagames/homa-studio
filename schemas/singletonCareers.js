export default {
  title: 'Careers',
  name: 'careers',
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
      title: "Intro Text",
      name: 'introText',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Intro Perk Items',
      name: 'introPerkItems',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading', validation: Rule => Rule.required()},
            {name: 'text', type: 'text', rows: 3, title: 'Text', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              text: 'text',
              heading: 'heading',
            },
            prepare(selection) {
              const {text, heading} = selection
              return {
                title: heading,
                subtitle: `${text}`
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Success CTA Items',
      name: 'successCtaItems',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'text', type: 'text', rows: 3, title: 'Text', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              text: 'text',
              thing: 'thing',
            },
            prepare(selection) {
              const {text} = selection
              return {
                title: text
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: 'Scrolling Images',
      name: 'scrollingImages',
      description: 'The gallery of images that scroll horizontally on the page',
      type: 'array',
      of: [
        {
          name: 'image',
          type: 'defaultImage',
          title: 'Image',
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: Rule => Rule.required().min(5)
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