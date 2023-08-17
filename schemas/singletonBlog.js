export default {
  title: 'Blog (Landing Page)',
  name: 'blogLanding',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
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