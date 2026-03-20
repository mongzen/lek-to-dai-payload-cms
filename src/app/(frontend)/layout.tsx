import type { Metadata } from 'next'
import React from 'react'

import './styles.css'

export const metadata: Metadata = {
  title: 'Lek to Dai | เลขขลัง AI สำหรับสายมูยุคใหม่',
  description:
    'เว็บแอพขอหวยที่รวมพิธีกรรมดิจิทัล กระแสเลขดัง Community และ AI-powered lucky number insights บน PayloadCMS',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
