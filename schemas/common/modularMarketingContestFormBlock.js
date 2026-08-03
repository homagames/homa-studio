import { FiVideo } from 'react-icons/fi'

export default {
  title: 'Contest Form Block',
  type: 'object',
  name: 'modularMarketingContestFormBlock',
  icon: FiVideo,
  fields: [
    {
      title: 'Heading',
      name: 'title',
      type: 'string',
      initialValue: 'Submit your creative',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 2,
      description: '[Optional] text below the heading',
    },
    {
      title: 'Creative code prefix',
      name: 'codePrefix',
      type: 'string',
      initialValue: 'HKI',
      description: 'Prefix for the auto-generated creative name, e.g. "HKI" → HKI_X14_WW_VID_1080x1920_45s.mp4',
    },
    {
      title: 'Terms & Conditions URL',
      name: 'termsUrl',
      type: 'url',
      description: '[Optional] link for the "Terms and Conditions" checkbox',
    },
    {
      title: 'Submit button text',
      name: 'submitButtonText',
      type: 'string',
      initialValue: 'Submit',
    },
    {
      title: 'Success message',
      name: 'successMessage',
      type: 'text',
      rows: 2,
      description: '[Optional] shown after a successful submission',
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
        ],
        layout: 'radio'
      }
    },
    {
      title: 'Internal ID',
      name: 'internalId',
      type: 'string',
      description: 'used as an anchor for in-page links (only required if you want to link to this section), must be unique, eg: "block-1"'
    }
  ],
  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const {title} = selection

      return {
        title: 'Contest Form Block',
        subtitle: title
      }
    }
  }
}
