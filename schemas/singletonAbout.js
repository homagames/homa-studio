export default {
  title: 'About',
  name: 'about',
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
      title: 'Services List',
      name: 'servicesList',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'heading', type: 'string', title: 'Heading', description: 'eg: "Marketing & Comms"', validation: Rule => Rule.required()},
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
              text: 'text',
              image: 'image'
            },
            prepare(selection) {
              const {heading, text, image} = selection
              return {
                title: heading,
                subtitle: `${text}`,
                media: image
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