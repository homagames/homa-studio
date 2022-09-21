export default {
  title: "Authors",
  name: 'authors',
  type: "document",
  fields: [
    {
      title: "Name",
      description: "The name of this Author",
      name: "name",
      type: "string",
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      title: 'name'
    }
  }
}