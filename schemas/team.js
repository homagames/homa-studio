export default {
  title: "Team",
  name: 'team',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "The name of this release",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Image",
      description: "The name of this release",
      name: "image",
      type: "defaultImage",
      validation: Rule => Rule.required()
    },
    {
      title: "Job Title",
      name: "jobTitle",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Company",
      name: "company",
      type: "string"
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'publishDate',
      media: 'image'
    }
  }
}