import type { CollectionConfig } from 'payload'

export const SacredSites: CollectionConfig = {
  slug: 'sacred-sites',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'province', 'energyScore', 'featured'],
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'province',
      type: 'text',
      required: true,
    },
    {
      name: 'focus',
      type: 'select',
      required: true,
      options: [
        { label: 'โชคลาภ', value: 'luck' },
        { label: 'การงาน', value: 'career' },
        { label: 'การเงิน', value: 'money' },
        { label: 'เสริมดวง', value: 'blessing' },
      ],
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'energyScore',
      type: 'number',
      required: true,
    },
    {
      name: 'highlightNumbers',
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
      name: 'ritualSteps',
      type: 'array',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'detail',
          type: 'textarea',
          required: true,
        },
      ],
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
