export default {
  title: 'Contest Rules',
  name: 'contestRules',
  type: 'document',
  __experimental_actions: ['update', /* 'create', 'delete', */ 'publish'],
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      // The version string an entrant is bound to at submit time. It is written
      // into the tracking sheet for every entry, so if the Rules are amended
      // mid-contest we can prove which version each person agreed to. BUMP THIS
      // whenever the Rules text below changes materially, and keep the form
      // block's "Contest Rules version" field in sync with it.
      title: 'Rules version',
      name: 'rulesVersion',
      type: 'string',
      initialValue: 'v1.0',
      description: 'e.g. "v1.0". Bump on every material change — recorded per entry for the audit trail.',
      validation: Rule => Rule.required()
    },
    {
      title: 'Effective date',
      name: 'effectiveDate',
      type: 'date',
      description: '[Optional] date this version of the Rules took effect.'
    },
    {
      title: 'Text',
      name: 'text',
      type: 'contentRich'
    },
    {
      title: 'SEO / Share Settings',
      name: 'seo',
      type: 'seo'
    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'rulesVersion'
    },
    prepare ({ title, subtitle }) {
      return {
        title,
        subtitle
      }
    }
  }
}
