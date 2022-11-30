import { FiCheckCircle } from 'react-icons/fi'

export default {
  title: 'Case Studies Block',
  type: 'object',
  name: 'modularMarketingCaseStudiesBlock',
  icon: FiCheckCircle,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      initialValue: "Our Partners",
    },
    {
      title: 'Case Studies',
      name: 'caseStudies',
      type: 'array',
      of: [{
        type: 'reference',
        to: [
          {type: 'caseStudies'}
        ]
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
        title: 'Case Feed Block',
        subtitle: title
      }
    }
  }
}