import { cache } from 'react'
import { getPayload } from 'payload'

import config from '@/payload.config'

import { fallbackHomepageData, type HomeCollectionItem } from './fallback-data'

const getString = (value: unknown): string | undefined => {
  if (typeof value === 'string' && value.trim()) {
    return value
  }

  return undefined
}

const getNumber = (value: unknown): number | undefined => {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value
  }

  return undefined
}

const getNumberRows = (value: unknown): Array<{ value: string }> => {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .map((item) => {
      const rowValue =
        item && typeof item === 'object' && 'value' in item ? getString(item.value) : undefined

      return rowValue ? { value: rowValue } : null
    })
    .filter((item): item is { value: string } => Boolean(item))
}

const getRitualSteps = (value: unknown): Array<{ title: string; detail: string }> => {
  if (!Array.isArray(value)) {
    return []
  }

  return value
    .map((item) => {
      if (!item || typeof item !== 'object') {
        return null
      }

      const title = 'title' in item ? getString(item.title) : undefined
      const detail = 'detail' in item ? getString(item.detail) : undefined

      if (!title || !detail) {
        return null
      }

      return { title, detail }
    })
    .filter((item): item is { title: string; detail: string } => Boolean(item))
}

const normalizeItem = (item: unknown): HomeCollectionItem | null => {
  if (!item || typeof item !== 'object') {
    return null
  }

  const raw = item as Record<string, unknown>

  return {
    id: getString(raw.id) || getString(raw._id) || Math.random().toString(36).slice(2),
    title: getString(raw.title),
    name: getString(raw.name),
    alias: getString(raw.alias),
    province: getString(raw.province),
    focus: getString(raw.focus),
    summary: getString(raw.summary),
    guidance: getString(raw.guidance),
    story: getString(raw.story),
    sourceName: getString(raw.sourceName),
    sourceType: getString(raw.sourceType),
    momentum: getNumber(raw.momentum),
    energyScore: getNumber(raw.energyScore),
    heatScore: getNumber(raw.heatScore),
    confidenceScore: getNumber(raw.confidenceScore),
    audience: getString(raw.audience),
    persona: getString(raw.persona),
    ritualType: getString(raw.ritualType),
    drawDate: getString(raw.drawDate),
    publishedAt: getString(raw.publishedAt),
    postedAt: getString(raw.postedAt),
    featured: Boolean(raw.featured),
    highlightNumbers: getNumberRows(raw.highlightNumbers),
    relatedNumbers: getNumberRows(raw.relatedNumbers),
    primaryNumbers: getNumberRows(raw.primaryNumbers),
    backupNumbers: getNumberRows(raw.backupNumbers),
    numbers: getNumberRows(raw.numbers),
    ritualSteps: getRitualSteps(raw.ritualSteps),
  }
}

const getPayloadClient = cache(async () => getPayload({ config: await config }))

const getDocs = async (
  collection: 'community-picks' | 'lucky-predictions' | 'sacred-sites' | 'trending-signals',
) => {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection,
    depth: 0,
    limit: 4,
    pagination: false,
    sort:
      collection === 'sacred-sites'
        ? '-energyScore'
        : collection === 'lucky-predictions'
          ? '-confidenceScore'
          : collection === 'community-picks'
            ? '-heatScore'
            : '-publishedAt',
  })

  return result.docs.map(normalizeItem).filter((item): item is HomeCollectionItem => Boolean(item))
}

export const getHomepageData = cache(async () => {
  try {
    const [sacredSites, trendingSignals, luckyPredictions, communityPicks] = await Promise.all([
      getDocs('sacred-sites'),
      getDocs('trending-signals'),
      getDocs('lucky-predictions'),
      getDocs('community-picks'),
    ])

    return {
      sacredSites: sacredSites.length ? sacredSites : fallbackHomepageData.sacredSites,
      trendingSignals: trendingSignals.length
        ? trendingSignals
        : fallbackHomepageData.trendingSignals,
      luckyPredictions: luckyPredictions.length
        ? luckyPredictions
        : fallbackHomepageData.luckyPredictions,
      communityPicks: communityPicks.length ? communityPicks : fallbackHomepageData.communityPicks,
    }
  } catch {
    return fallbackHomepageData
  }
})
