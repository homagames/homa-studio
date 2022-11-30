import { FiInbox } from 'react-icons/fi'

export default {
  title: 'Hubspot Form Block',
  type: 'object',
  name: 'modularMarketingHubspotFormBlock',
  icon: FiInbox,
  fields: [
    {
      title: 'Heading',
      name: 'title',
      type: 'string',
      initialValue: "Hubspot Form",
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 2,
      description: '[Optional] text below the heading',
    },
    {
      title: 'Hubspot Form ID',
      name: 'hubspotFormId',
      type: 'string',
      description: 'The form ID from Hubspot, eg: "a1b54100-3331-4b6c-9c9d-8473ccd9fa6b"'
    }
  ],
  preview: { 
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: 'Hubspot Form Block',
        subtitle: title
      }
    }
  }
}