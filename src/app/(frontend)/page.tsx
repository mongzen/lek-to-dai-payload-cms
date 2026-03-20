import { HomePage } from '@/components/home/HomePage'
import { getHomepageData } from '@/lib/home/get-homepage-data'

export const dynamic = 'force-dynamic'

export default async function Page() {
  const homepageData = await getHomepageData()

  return <HomePage {...homepageData} />
}
