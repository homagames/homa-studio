import { FiSmartphone } from 'react-icons/fi'

export default {
  title: 'App Store Buttons Block',
  type: 'object',
  name: 'modularMarketingAppStoreButtonsBlock',
  icon: FiSmartphone,
  fields: [
    {
      title: 'App Store URL',
      name: 'appStoreUrl',
      type: 'url',
      description: '[Optional] Apple App Store link — the badge is hidden if empty',
    },
    {
      title: 'Google Play URL',
      name: 'googlePlayUrl',
      type: 'url',
      description: '[Optional] Google Play link — the badge is hidden if empty',
    },
    {
      title: 'Internal ID',
      name: 'internalId',
      type: 'string',
      description: '[Optional] anchor id for linking to this section',
    },
  ],
  preview: {
    select: { appStoreUrl: 'appStoreUrl', googlePlayUrl: 'googlePlayUrl' },
    prepare({ appStoreUrl, googlePlayUrl }) {
      const n = [appStoreUrl, googlePlayUrl].filter(Boolean).length
      return { title: 'App Store Buttons', subtitle: `${n} link${n === 1 ? '' : 's'} set` }
    },
  },
}
