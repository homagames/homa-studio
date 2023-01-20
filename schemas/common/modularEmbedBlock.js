import { FiEdit3 } from 'react-icons/fi'

export default {
  title: 'Embed Block',
  type: 'object',
  name: 'embedBlock',
  icon: FiEdit3,
  fields: [
    {
      title: 'Embed Code',
      name: 'embedCode',
      type: 'text', 
      rows: 3,
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Embed Block',
      }
    }
  }
}