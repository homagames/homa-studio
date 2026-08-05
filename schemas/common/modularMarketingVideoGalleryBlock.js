import { FiFilm } from 'react-icons/fi'

export default {
  title: 'Video Examples Block',
  type: 'object',
  name: 'modularMarketingVideoGalleryBlock',
  icon: FiFilm,
  fields: [
    {
      title: 'Heading',
      name: 'title',
      type: 'string',
      initialValue: 'Example creatives',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
      rows: 2,
      description: '[Optional] intro text below the heading',
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      initialValue: 'carousel',
      description: 'Carousel = YouTube embeds. Phone grid = vertical MP4s shown in phone mockups (needs "Video File URL" per item).',
      options: {
        list: [
          { title: 'Carousel (YouTube)', value: 'carousel' },
          { title: 'Phone grid (MP4)', value: 'phoneGrid' },
        ],
        layout: 'radio',
      },
    },
    {
      title: 'Videos',
      name: 'videos',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'video',
          fields: [
            {
              title: 'YouTube URL',
              name: 'url',
              type: 'url',
              description: 'Carousel layout: the full YouTube link, e.g. https://www.youtube.com/watch?v=…',
            },
            {
              title: 'Video File URL (MP4)',
              name: 'videoFileUrl',
              type: 'url',
              description: 'Phone-grid layout: a direct link to a vertical MP4 (9:16, muted-friendly). Used instead of the YouTube URL.',
            },
            {
              title: 'Label',
              name: 'label',
              type: 'string',
              description: '[Optional] short caption shown under the video',
            },
            {
              title: 'Why it works',
              name: 'note',
              type: 'text',
              rows: 3,
              description: '[Optional] a sentence or two on why this creative works — shown under the video',
            },
          ],
          preview: {
            select: { title: 'label', subtitle: 'url' },
            prepare({ title, subtitle }) {
              return { title: title || subtitle || 'Video', subtitle: title ? subtitle : '' }
            },
          },
        },
      ],
    },
    {
      title: 'Internal ID',
      name: 'internalId',
      type: 'string',
      description: '[Optional] anchor id for linking to this section',
    },
  ],
  preview: {
    select: { title: 'title', videos: 'videos' },
    prepare({ title, videos }) {
      const n = videos ? videos.length : 0
      return { title: title || 'Video Examples Block', subtitle: `${n} video${n === 1 ? '' : 's'}` }
    },
  },
}
