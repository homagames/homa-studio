export default {
  name: 'redirect',
  title: 'Redirect',
  type: 'document',
  __experimental_actions: ['update', 'create', 'delete', 'publish'],
  fields: [
    {
      name: 'source',
      title: 'From',
      type: 'string',
    },
    {
      name: 'destination',
      title: 'To',
      type: 'string',
    },
    {
      name: 'permanent',
      title: 'Permanent',
      type: 'boolean',
      initialValue: () => true,
    },
  ],
};