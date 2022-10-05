export default {
  title: 'Contact',
  name: 'contact',
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
      title: 'Email',
      name: 'email',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Phone',
      name: 'phone',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Twitter',
      name: 'twitter',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'LinkedIn',
      name: 'linkedIn',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'Facebook',
      name: 'facebook',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'Instagram',
      name: 'instagram',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'TikTok',
      name: 'tikTok',
      type: 'url',
      validation: Rule => Rule.required()
    },
    {
      title: 'Discord',
      name: 'discord',
      type: 'url',
      validation: Rule => Rule.required()
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