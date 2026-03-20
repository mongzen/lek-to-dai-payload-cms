export type HomeCollectionItem = {
  id: string
  title?: string
  name?: string
  alias?: string
  province?: string
  focus?: string
  summary?: string
  guidance?: string
  story?: string
  sourceName?: string
  sourceType?: string
  momentum?: number
  energyScore?: number
  heatScore?: number
  confidenceScore?: number
  audience?: string
  persona?: string
  ritualType?: string
  drawDate?: string
  publishedAt?: string
  postedAt?: string
  featured?: boolean
  highlightNumbers?: Array<{ value: string }>
  relatedNumbers?: Array<{ value: string }>
  primaryNumbers?: Array<{ value: string }>
  backupNumbers?: Array<{ value: string }>
  numbers?: Array<{ value: string }>
  ritualSteps?: Array<{ title: string; detail: string }>
}

export const fallbackHomepageData = {
  sacredSites: [
    {
      id: 'sacred-1',
      name: 'ศาลไอ้ไข่ ออนไลน์',
      province: 'นครศรีธรรมราช',
      focus: 'luck',
      summary:
        'สายมูนิยมมาขอเลขแบบตรง ๆ และมักจับคู่กับเลขอายุหรือวันสำคัญของผู้ขอพร',
      energyScore: 94,
      featured: true,
      highlightNumbers: [{ value: '38' }, { value: '89' }, { value: '903' }],
      ritualSteps: [
        { title: 'ตั้งจิต', detail: 'ระบุเรื่องที่ขอให้ชัด พร้อมชื่อและวันเกิด' },
        { title: 'สุ่มเลข', detail: 'เขย่าเซียมซีดิจิทัล 3 ครั้ง แล้วจับเลขเด่น 2 ชุด' },
      ],
    },
    {
      id: 'sacred-2',
      name: 'หลวงพ่อสมหวัง',
      province: 'นครปฐม',
      focus: 'money',
      summary: 'เหมาะกับสายขอโชคการเงิน เลขเด่นมักเชื่อมกับเลขธูปและทะเบียนรถ',
      energyScore: 88,
      highlightNumbers: [{ value: '15' }, { value: '51' }, { value: '615' }],
      ritualSteps: [
        { title: 'ถวายคำอธิษฐาน', detail: 'เลือกคำขอและวงเงินที่คาดหวัง' },
        { title: 'คัดเลขกลับหัว', detail: 'นำเลขเด่นมาจับคู่แบบสลับหน้า-หลัง' },
      ],
    },
    {
      id: 'sacred-3',
      name: 'วัดเจดีย์สายขลัง',
      province: 'สุราษฎร์ธานี',
      focus: 'blessing',
      summary:
        'คนชอบดูเลขขันน้ำมนต์และเลขฝันต่อเนื่อง ใช้เป็นจุดเริ่มต้นก่อนเข้า AI assistant',
      energyScore: 84,
      highlightNumbers: [{ value: '07' }, { value: '70' }, { value: '407' }],
      ritualSteps: [
        { title: 'อ่านสัญญาณ', detail: 'ดูเลขเด่นจากเหตุการณ์และวันในปฏิทิน' },
        { title: 'ยืนยันโพย', detail: 'บันทึกลง My Lucky Notes เพื่อรอแจ้งเตือน' },
      ],
    },
  ] satisfies HomeCollectionItem[],
  trendingSignals: [
    {
      id: 'signal-1',
      title: 'เลขทะเบียนรถข่าวดังกลับมาติดอันดับ',
      sourceType: 'news',
      sourceName: 'News Radar',
      summary:
        'ระบบจับสัญญาณจากข่าวและการแชร์ซ้ำ ทำให้เลขชุดเดิมกลับมาถูกพูดถึงในหลายแพลตฟอร์ม',
      relatedNumbers: [{ value: '42' }, { value: '24' }, { value: '642' }],
      momentum: 93,
      featured: true,
      publishedAt: '2026-03-20T08:30:00.000Z',
    },
    {
      id: 'signal-2',
      title: 'เลขวันครบรอบคนดังพุ่งใน TikTok',
      sourceType: 'social',
      sourceName: 'Social Sweep',
      summary: 'เลขวันเกิดและปีสำคัญถูกดันซ้ำในคลิปสั้นจนกลายเป็นเลขฮอตของวัน',
      relatedNumbers: [{ value: '19' }, { value: '91' }, { value: '319' }],
      momentum: 86,
      publishedAt: '2026-03-20T06:20:00.000Z',
    },
    {
      id: 'signal-3',
      title: 'สถิติเลขเบิ้ลเริ่มวิ่งสวนกระแส',
      sourceType: 'stats',
      sourceName: 'Historic Draw Lens',
      summary: 'เลขที่หายไปนานเริ่มมีแรงกลับมา โดยเฉพาะกลุ่มเลขเบิ้ลและเลขกลับ',
      relatedNumbers: [{ value: '11' }, { value: '66' }, { value: '611' }],
      momentum: 78,
      publishedAt: '2026-03-19T19:10:00.000Z',
    },
  ] satisfies HomeCollectionItem[],
  luckyPredictions: [
    {
      id: 'prediction-1',
      title: 'ชุดเลขด่วนก่อนวันหวยออก',
      persona: 'trend-engine',
      audience: 'คนที่อยากดูเลขกระแสแบบไว',
      guidance:
        'AI ดึงน้ำหนักจากข่าวดัง ความถี่เลขซ้ำ และแรงแชร์ในชุมชน เพื่อคัดเลขที่กำลังวิ่งแรงที่สุด',
      confidenceScore: 91,
      drawDate: '2026-04-01T00:00:00.000Z',
      primaryNumbers: [{ value: '42' }, { value: '89' }, { value: '428' }],
      backupNumbers: [{ value: '19' }, { value: '70' }],
      featured: true,
    },
    {
      id: 'prediction-2',
      title: 'เลขประจำวันเกิดสายการเงิน',
      persona: 'birth-day',
      audience: 'ผู้ใช้ที่อยากได้เลขตามวันเกิดและลัคนา',
      guidance:
        'จับคู่เลขวันเกิดกับเลขเด่นประจำสัปดาห์ แล้วตัดเลขที่ชนกันซ้ำเกินไปออก',
      confidenceScore: 83,
      drawDate: '2026-04-01T00:00:00.000Z',
      primaryNumbers: [{ value: '15' }, { value: '51' }],
      backupNumbers: [{ value: '507' }, { value: '75' }],
    },
    {
      id: 'prediction-3',
      title: 'เจ้าแม่ใบ้หวยชุดสายมูเย็นนี้',
      persona: 'oracle',
      audience: 'คนชอบคำใบ้แบบโต้ตอบ',
      guidance:
        'ใช้คำถามเรื่องความฝัน ชื่อเล่น และสิ่งที่เพิ่งเจอในวันนี้ เพื่อแตกออกมาเป็นเลขเด่น 2 ตัวและ 3 ตัว',
      confidenceScore: 88,
      drawDate: '2026-04-01T00:00:00.000Z',
      primaryNumbers: [{ value: '07' }, { value: '38' }, { value: '903' }],
      backupNumbers: [{ value: '24' }, { value: '407' }],
    },
  ] satisfies HomeCollectionItem[],
  communityPicks: [
    {
      id: 'pick-1',
      alias: 'แม่แอนสายบุญ',
      ritualType: 'digital-sticks',
      story:
        'เขย่าเซียมซี 5 ครั้งแล้วเลข 38 โผล่ซ้ำตลอด เลยจับเข้าคู่กับ 89 ที่กำลังแรงในฟีด',
      numbers: [{ value: '38' }, { value: '89' }, { value: '389' }],
      heatScore: 92,
      featured: true,
      postedAt: '2026-03-20T07:45:00.000Z',
    },
    {
      id: 'pick-2',
      alias: 'เฮียต้นตามข่าว',
      ritualType: 'license-plate',
      story:
        'เลือกตามเลขทะเบียนข่าวดังแล้วสลับหน้าหลัง เพราะช่วงนี้เลขกลับมักมาเป็นคู่',
      numbers: [{ value: '42' }, { value: '24' }, { value: '642' }],
      heatScore: 87,
      postedAt: '2026-03-20T05:10:00.000Z',
    },
    {
      id: 'pick-3',
      alias: 'นุ่นเลขวันเกิด',
      ritualType: 'birth-number',
      story:
        'เอาเลขวันเกิดมาชนกับเลขมงคลประจำวันศุกร์แล้วคัดเฉพาะตัวที่ไม่ซ้ำโพยเดิม',
      numbers: [{ value: '15' }, { value: '51' }, { value: '75' }],
      heatScore: 79,
      postedAt: '2026-03-19T22:30:00.000Z',
    },
  ] satisfies HomeCollectionItem[],
}
