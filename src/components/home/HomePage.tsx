import Link from 'next/link'

import type { HomeCollectionItem } from '@/lib/home/fallback-data'

type HomePageProps = {
  communityPicks: HomeCollectionItem[]
  luckyPredictions: HomeCollectionItem[]
  sacredSites: HomeCollectionItem[]
  trendingSignals: HomeCollectionItem[]
}

const focusLabels: Record<string, string> = {
  blessing: 'เสริมดวง',
  career: 'การงาน',
  luck: 'โชคลาภ',
  money: 'การเงิน',
}

const personaLabels: Record<string, string> = {
  'birth-day': 'Birth Day Oracle',
  oracle: 'เจ้าแม่ใบ้หวย',
  'trend-engine': 'AI Trend Engine',
}

const ritualLabels: Record<string, string> = {
  'birth-number': 'เลขวันเกิด',
  'digital-sticks': 'เซียมซีดิจิทัล',
  dream: 'ตีเลขจากความฝัน',
  'license-plate': 'ทะเบียนรถ',
  'trend-following': 'ตามข่าวดัง',
}

const sourceLabels: Record<string, string> = {
  community: 'Community',
  news: 'News',
  social: 'Social',
  stats: 'Stats',
}

const formatDate = (value?: string) => {
  if (!value) {
    return 'อัปเดตสด'
  }

  const parsed = new Date(value)

  if (Number.isNaN(parsed.getTime())) {
    return 'อัปเดตสด'
  }

  return new Intl.DateTimeFormat('th-TH', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(parsed)
}

const getNumberValues = (rows?: Array<{ value: string }>) => rows?.map(({ value }) => value) ?? []

const NumberChips = ({ values }: { values: string[] }) => (
  <div className="number-chips">
    {values.map((value) => (
      <span key={value} className="number-chip">
        {value}
      </span>
    ))}
  </div>
)

export function HomePage({
  communityPicks,
  luckyPredictions,
  sacredSites,
  trendingSignals,
}: HomePageProps) {
  const leadSignals = trendingSignals.slice(0, 3)
  const leadPredictions = luckyPredictions.slice(0, 3)
  const leadSites = sacredSites.slice(0, 3)
  const leadCommunity = communityPicks.slice(0, 3)

  const heatNumbers = leadSignals.flatMap((signal) => getNumberValues(signal.relatedNumbers)).slice(0, 5)
  const ritualNumbers = leadSites.flatMap((site) => getNumberValues(site.highlightNumbers)).slice(0, 5)
  const oracleNumbers = leadPredictions
    .flatMap((prediction) => getNumberValues(prediction.primaryNumbers))
    .slice(0, 4)

  return (
    <div className="lucky-page">
      <div className="page-backdrop page-backdrop-top" />
      <div className="page-backdrop page-backdrop-middle" />

      <header className="topbar">
        <div className="brand-mark">
          <span className="brand-mark__orb" />
          <div>
            <p className="eyebrow">Lek to Dai</p>
            <strong>PayloadCMS + AI Insight</strong>
          </div>
        </div>

        <nav className="topnav">
          <a href="#features">Features</a>
          <a href="#signals">Signals</a>
          <a href="#community">Community</a>
        </nav>

        <div className="topbar-actions">
          <Link href="/admin" className="ghost-button">
            เปิด Admin
          </Link>
          <a href="#cta" className="solid-button">
            ขอเลขเดี๋ยวนี้
          </a>
        </div>
      </header>

      <main className="page-content">
        <section className="hero">
          <div className="hero-copy">
            <span className="hero-badge">ข่าวจริง + ความเชื่อ + กระแสออนไลน์ + AI decision assist</span>
            <h1>เลขขลังสำหรับโลกยุคใหม่ ที่อ่านเทรนด์ให้เร็วและขอเลขได้แบบมีประสบการณ์</h1>
            <p className="hero-description">
              แอพขอหวยที่รวมพิธีกรรมดิจิทัล กระแสเลขดัง ฟีดชุมชน และ AI assistant
              เพื่อช่วยคุณคัดเลขเด่นแบบมั่นใจขึ้นในจังหวะก่อนวันหวยออก
            </p>

            <div className="hero-actions">
              <a className="solid-button" href="#cta">
                เริ่มดูเลขเด่น
              </a>
              <a className="ghost-button" href="#signals">
                ดู Trend Feed
              </a>
            </div>

            <div className="hero-stats">
              <div className="stat-card">
                <span className="stat-card__value">24/7</span>
                <span className="stat-card__label">จับสัญญาณเลขจากข่าวและชุมชน</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__value">{leadSignals.length + leadPredictions.length}</span>
                <span className="stat-card__label">โมเดลมุมมองสำหรับเลขเด่นรายวัน</span>
              </div>
              <div className="stat-card">
                <span className="stat-card__value">AI + Data</span>
                <span className="stat-card__label">ช่วยตัดสินใจแบบไม่ต้องเดาล้วน ๆ</span>
              </div>
            </div>
          </div>

          <div className="hero-panel">
            <div className="hero-panel__glow" />

            <div className="dashboard-card">
              <div className="dashboard-card__header">
                <div>
                  <p className="eyebrow">Live trend cockpit</p>
                  <h2>เลขเด่นกำลังวิ่ง</h2>
                </div>
                <span className="pulse-dot">Realtime</span>
              </div>

              <div className="dashboard-grid">
                <article className="mini-panel">
                  <span className="mini-panel__label">เลขร้อนจากข่าว</span>
                  <strong className="mini-panel__value">93</strong>
                  <NumberChips values={heatNumbers} />
                </article>

                <article className="mini-panel">
                  <span className="mini-panel__label">สายมูแนะนำ</span>
                  <strong className="mini-panel__value">94</strong>
                  <NumberChips values={ritualNumbers} />
                </article>

                <article className="mini-panel mini-panel--wide">
                  <div className="signal-curve" aria-hidden="true">
                    <span className="signal-curve__line signal-curve__line--soft" />
                    <span className="signal-curve__line signal-curve__line--bright" />
                  </div>

                  <div className="mini-panel__footer">
                    <div>
                      <span className="mini-panel__label">AI shortlist</span>
                      <NumberChips values={oracleNumbers} />
                    </div>
                    <div className="radial-score">
                      <span>4,812</span>
                      <small>hot score</small>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip">
          <p>Trusted inputs across Thai-style lucky-number discovery</p>
          <div className="trust-strip__items">
            <span>News Radar</span>
            <span>Social Sweep</span>
            <span>ทะเบียนรถดัง</span>
            <span>Historic Draw Lens</span>
            <span>Community Picks</span>
          </div>
        </section>

        <section className="section" id="features">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">Product pillars</span>
            <h2>ครบทั้งขอเลข ดูเทรนด์ และวิเคราะห์โพยในที่เดียว</h2>
            <p>
              หน้าบ้านเน้น conversion ส่วน Payload หลังบ้านพร้อมให้ทีมคอนเทนต์เติมข้อมูลและผลักดันแคมเปญต่อได้ง่าย
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature-card">
              <span className="feature-card__icon">01</span>
              <h3>Ritual Experience</h3>
              <p>จำลองประสบการณ์ขอหวยจากสิ่งศักดิ์สิทธิ์ด้วย flow แบบเซียมซีดิจิทัล กงล้อ และคำใบ้เชิงพิธีกรรม</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__icon">02</span>
              <h3>Trending Number Feed</h3>
              <p>รวมเลขจากข่าว แฮชแท็ก คนดัง และเหตุการณ์สำคัญ พร้อมจัดอันดับตาม momentum ที่ตีความได้ง่าย</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__icon">03</span>
              <h3>Oracle AI Assistant</h3>
              <p>ใช้แนวคิด AI persona ช่วยแนะนำเลขจากวันเกิด ราศี และสิ่งที่ผู้ใช้เพิ่งเจอในชีวิตประจำวัน</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__icon">04</span>
              <h3>My Lucky Notes</h3>
              <p>เก็บโพยส่วนตัว วิเคราะห์เลขซ้ำ และช่วยเตือนก่อนวันออกรางวัล เพื่อไม่พลาดเลขที่เล็งไว้</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__icon">05</span>
              <h3>Lucky Statistics</h3>
              <p>ใช้สถิติย้อนหลังเพื่อช่วยมองเลขที่หายไปนาน เลขเบิ้ล หรือเลขกลับที่กำลังมีโอกาสกลับมา</p>
            </article>
            <article className="feature-card">
              <span className="feature-card__icon">06</span>
              <h3>Community Heat</h3>
              <p>เปิดพื้นที่ให้แชร์เลข แชร์พิธี และโหวตเลขฮอต เพื่อเร่ง engagement ก่อนวันหวยออก</p>
            </article>
          </div>
        </section>

        <section className="section" id="signals">
          <div className="section-heading">
            <span className="eyebrow">Sacred + trend intelligence</span>
            <h2>แดชบอร์ดที่บาลานซ์ทั้งความเชื่อและข้อมูลจริง</h2>
          </div>

          <div className="content-grid">
            <div className="content-card content-card--stack">
              <div className="content-card__header">
                <div>
                  <span className="eyebrow">Sacred sites</span>
                  <h3>สิ่งศักดิ์สิทธิ์ที่ผู้ใช้ชอบเริ่มต้นขอเลข</h3>
                </div>
                <span className="section-chip">interactive</span>
              </div>

              <div className="stack-list">
                {leadSites.map((site) => (
                  <article key={site.id} className="stack-row">
                    <div>
                      <div className="stack-row__title">
                        <h4>{site.name}</h4>
                        <span>{focusLabels[site.focus ?? ''] ?? 'สายมู'}</span>
                      </div>
                      <p>{site.summary}</p>
                      <NumberChips values={getNumberValues(site.highlightNumbers)} />
                    </div>
                    <div className="score-pill">{site.energyScore ?? 0}</div>
                  </article>
                ))}
              </div>
            </div>

            <div className="content-card content-card--stack">
              <div className="content-card__header">
                <div>
                  <span className="eyebrow">Trending feed</span>
                  <h3>เลขดังจากข่าว โซเชียล และสถิติ</h3>
                </div>
                <span className="section-chip">live</span>
              </div>

              <div className="stack-list">
                {leadSignals.map((signal) => (
                  <article key={signal.id} className="signal-card">
                    <div className="signal-card__meta">
                      <span>{sourceLabels[signal.sourceType ?? ''] ?? 'Signal'}</span>
                      <span>{formatDate(signal.publishedAt)}</span>
                    </div>
                    <h4>{signal.title}</h4>
                    <p>{signal.summary}</p>
                    <div className="signal-card__footer">
                      <NumberChips values={getNumberValues(signal.relatedNumbers)} />
                      <div className="momentum-bar">
                        <span style={{ width: `${signal.momentum ?? 0}%` }} />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-heading section-heading--center">
            <span className="eyebrow">AI recommendation layer</span>
            <h2>เจ้าแม่ใบ้หวยและ AI shortlist ที่อธิบายเหตุผลได้</h2>
            <p>
              ใช้ Payload เก็บชุดคำแนะนำและจัดการแคมเปญเลขเด่นได้จาก admin โดยไม่ต้องแก้หน้าเว็บทุกครั้ง
            </p>
          </div>

          <div className="prediction-grid">
            {leadPredictions.map((prediction) => (
              <article key={prediction.id} className="prediction-card">
                <div className="prediction-card__header">
                  <div>
                    <span className="eyebrow">{personaLabels[prediction.persona ?? ''] ?? 'Lucky Guide'}</span>
                    <h3>{prediction.title}</h3>
                  </div>
                  <div className="confidence-circle">
                    <span>{prediction.confidenceScore ?? 0}%</span>
                    <small>confidence</small>
                  </div>
                </div>

                <p>{prediction.guidance}</p>

                <div className="prediction-card__meta">
                  <span>เหมาะกับ: {prediction.audience}</span>
                  <span>งวด: {formatDate(prediction.drawDate)}</span>
                </div>

                <div className="prediction-card__numbers">
                  <div>
                    <small>เลขหลัก</small>
                    <NumberChips values={getNumberValues(prediction.primaryNumbers)} />
                  </div>
                  <div>
                    <small>เลขรอง</small>
                    <NumberChips values={getNumberValues(prediction.backupNumbers)} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="community">
          <div className="community-shell">
            <div className="section-heading">
              <span className="eyebrow">Community heat map</span>
              <h2>เลขขลังจากผู้ใช้จริงที่กำลังถูกโหวต</h2>
            </div>

            <div className="community-list">
              {leadCommunity.map((pick) => (
                <article key={pick.id} className="community-card">
                  <div className="community-card__meta">
                    <strong>{pick.alias}</strong>
                    <span>{ritualLabels[pick.ritualType ?? ''] ?? 'สายมู'}</span>
                  </div>
                  <p>{pick.story}</p>
                  <div className="community-card__footer">
                    <NumberChips values={getNumberValues(pick.numbers)} />
                    <span className="vote-pill">Heat {pick.heatScore ?? 0}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-card" id="cta">
          <span className="eyebrow">Build-ready payload base</span>
          <h2>พร้อมต่อยอดเป็นแอพขอหวยเต็มระบบ ทั้ง content operations และ real-time insight UI</h2>
          <p>
            ตอนนี้หน้าเว็บพร้อมโทน visual, collections พร้อมใช้งานใน Payload Admin, และฐานระบบพร้อมเชื่อม news/social pipelines
            เพิ่มในรอบถัดไปได้ทันที
          </p>
          <div className="hero-actions">
            <Link href="/admin" className="solid-button">
              จัดการคอนเทนต์ใน Admin
            </Link>
            <a href="#features" className="ghost-button">
              ดูโครงสร้างฟีเจอร์
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}
