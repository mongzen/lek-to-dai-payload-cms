import type { CollectionConfig } from 'payload'

export const TrendingSignals: CollectionConfig = {
  slug: 'trending-signals',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'sourceType', 'sourceName', 'momentum', 'publishedAt'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'sourceType',
      type: 'select',
      required: true,
      options: [
        { label: 'ข่าว', value: 'news' },
        { label: 'โซเชียล', value: 'social' },
        { label: 'ชุมชน', value: 'community' },
        { label: 'สถิติ', value: 'stats' },
      ],
    },
    {
      name: 'sourceName',
      type: 'text',
      required: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'relatedNumbers',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'momentum',
      type: 'number',
      required: true,
    },
    {
      name: 'publishedAt',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
