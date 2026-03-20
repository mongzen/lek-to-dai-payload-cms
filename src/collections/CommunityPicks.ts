import type { CollectionConfig } from 'payload'

export const CommunityPicks: CollectionConfig = {
  slug: 'community-picks',
  admin: {
    useAsTitle: 'alias',
    defaultColumns: ['alias', 'ritualType', 'heatScore', 'featured'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alias',
      type: 'text',
      required: true,
    },
    {
      name: 'ritualType',
      type: 'select',
      required: true,
      options: [
        { label: 'เซียมซีดิจิทัล', value: 'digital-sticks' },
        { label: 'ทะเบียนรถ', value: 'license-plate' },
        { label: 'เลขวันเกิด', value: 'birth-number' },
        { label: 'ความฝัน', value: 'dream' },
        { label: 'ตามข่าวดัง', value: 'trend-following' },
      ],
    },
    {
      name: 'story',
      type: 'textarea',
      required: true,
    },
    {
      name: 'numbers',
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
      name: 'heatScore',
      type: 'number',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'postedAt',
      type: 'date',
      required: true,
      admin: {
        date: {
          pickerAppearance: 'dayAndTime',
        },
      },
    },
  ],
}
