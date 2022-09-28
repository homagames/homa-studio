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
      title: "Intro Text",
      name: 'introText',
      type: 'array', 
      of: [{type: 'block'}],
      validation: Rule => Rule.required()
    },
    {
      title: "Our Community Heading",
      name: 'ourCommunityHeading',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required()
    },
    {
      title: 'Our Community Stats',
      name: 'ourCommunityStats',
      type: 'array',
      of: [
        {
          title: 'Item',
          name: 'item',
          type: 'object',
          fields: [
            {name: 'number', type: 'string', title: 'Number', description: 'eg: "200+"', validation: Rule => Rule.required()},
            {name: 'thing', type: 'text', rows: 3, title: 'Thing', description: 'eg: "Countries of Origin"', validation: Rule => Rule.required()},
          ],
          preview: {
            select: {
              number: 'number',
              thing: 'thing',
            },
            prepare(selection) {
              const {number, thing} = selection
              return {
                title: number,
                subtitle: `${thing}`,
              }
            }
          }
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      title: "Our People CTA Heading",
      name: 'ourPeopleCtaHeading',
      type: 'text',
      rows: 3,
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