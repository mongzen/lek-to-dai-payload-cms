import type { CollectionConfig } from 'payload'

export const LuckyPredictions: CollectionConfig = {
  slug: 'lucky-predictions',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'persona', 'confidenceScore', 'drawDate'],
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
      name: 'persona',
      type: 'select',
      required: true,
      options: [
        { label: 'เจ้าแม่ใบ้หวย', value: 'oracle' },
        { label: 'AI Trend Engine', value: 'trend-engine' },
        { label: 'เลขประจำวันเกิด', value: 'birth-day' },
      ],
    },
    {
      name: 'audience',
      type: 'text',
      required: true,
    },
    {
      name: 'guidance',
      type: 'textarea',
      required: true,
    },
    {
      name: 'primaryNumbers',
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
      name: 'backupNumbers',
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
      name: 'confidenceScore',
      type: 'number',
      required: true,
    },
    {
      name: 'drawDate',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
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
