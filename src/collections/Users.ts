import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'displayName',
      type: 'text',
    },
    {
      name: 'birthDayOfWeek',
      type: 'select',
      options: [
        { label: 'Sunday', value: 'sunday' },
        { label: 'Monday', value: 'monday' },
        { label: 'Tuesday', value: 'tuesday' },
        { label: 'Wednesday', value: 'wednesday' },
        { label: 'Thursday', value: 'thursday' },
        { label: 'Friday', value: 'friday' },
        { label: 'Saturday', value: 'saturday' },
      ],
    },
    {
      name: 'zodiac',
      type: 'select',
      options: [
        { label: 'Aries', value: 'aries' },
        { label: 'Taurus', value: 'taurus' },
        { label: 'Gemini', value: 'gemini' },
        { label: 'Cancer', value: 'cancer' },
        { label: 'Leo', value: 'leo' },
        { label: 'Virgo', value: 'virgo' },
        { label: 'Libra', value: 'libra' },
        { label: 'Scorpio', value: 'scorpio' },
        { label: 'Sagittarius', value: 'sagittarius' },
        { label: 'Capricorn', value: 'capricorn' },
        { label: 'Aquarius', value: 'aquarius' },
        { label: 'Pisces', value: 'pisces' },
      ],
    },
    {
      name: 'favoriteNumbers',
      type: 'array',
      fields: [
        {
          name: 'value',
          type: 'text',
          required: true,
        },
      ],
    },
  ],
}
