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
    },
    {
      title: 'Background Landscape',
      name: 'backgroundLandscape',
      type: 'string',
      options: {
        list: [
          {title: 'None', value: 'none'},
          {title: 'Urban', value: 'urban'},
          {title: 'Urban 2', value: 'urban2'},
          {title: 'Suburban', value: 'suburban'},
          {title: 'Suburban 2', value: 'suburban2'},
          {title: 'Country', value: 'country'},
          {title: 'Country 2', value: 'country2'},
          {title: 'Country 3', value: 'country3'},
          {title: 'Coastal', value: 'coastal'},
          {title: 'Coastal 2', value: 'coastal2'},
          {title: 'Coastal 3', value: 'coastal3'},
        ], // <-- predefined values
        layout: 'radio' // <-- defaults to 'dropdown'
      }
    },
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