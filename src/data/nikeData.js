export const STFI_NAVIGATION = [
  { id: 'home', label: 'Home' },
  {
    id: 'notice',
    label: 'Notice',
    children: [
      { id: 'news', label: 'Latest News & Circulars' },
      { id: 'results', label: 'Championship Results' }
    ]
  },
  {
    id: 'rules',
    label: 'Rules & Regulations',
    children: [
      { id: 'rule-beach', label: 'Beach Event Rules' },
      { id: 'rule-regu', label: 'Regu Team Rules' },
      { id: 'rule-double', label: 'Double Event Rules' },
      { id: 'rule-quad', label: 'Quad Event Rules' }
    ]
  },
  {
    id: 'events',
    label: 'Events',
    children: [
      { id: 'national-championships', label: 'National Championships' },
      { id: 'selection-trials', label: 'Selection Trials' },
      { id: 'training-camps', label: 'Training Camps' },
      { id: 'event-calendar', label: 'Event Calendar 2026' }
    ]
  },
  { id: 'myas', label: 'MYAS Compliance' },
  { id: 'antidoping', label: 'Anti Doping' },
  { id: 'rti', label: 'RTI' },
  { id: 'elections', label: 'Elections' },
  { id: 'history', label: 'History' },
  { id: 'contact', label: 'Contact Us' }
];

export const STFI_FEDERATION_DATA = {
  name: 'SepakTakraw Federation of India (STFI)',
  website: 'https://sepaktakrawindia.com/',
  affiliations: ['Ministry of Youth Affairs & Sports (MYAS)', 'International Sepaktakraw Federation (ISTAF)', 'Asian Sepaktakraw Federation (ASTAF)'],
  rules: [
    { title: 'Beach Event Rules', desc: 'Court dimensions, sand play regulations, and match scoring.' },
    { title: 'Regu Team Rules', desc: '3-player team composition, rotation, service, and scoring rules.' },
    { title: 'Double Event Rules', desc: '2-player format, match regulations, and service boundaries.' },
    { title: 'Quad Event Rules', desc: '4-player team rotation, tactical positioning, and block rules.' }
  ],
  myasComplianceCount: 28,
  upcomingEvents: [
    { name: '34th Senior National SepakTakraw Championship', date: 'Oct 2026', venue: 'New Delhi' },
    { name: 'National Selection Trials for Asian Games', date: 'Nov 2026', venue: 'Bengaluru SAI Center' },
    { name: 'Junior & Sub-Junior National Championship', date: 'Dec 2026', venue: 'Imphal, Manipur' }
  ]
};

export const NIKE_PRODUCTS = [
  {
    id: 'stfi-regu-pro',
    name: 'STFI Pro Regu Shoe',
    subtitle: 'Official National Tournament Footwear',
    category: 'Official Gear',
    sport: 'SepakTakraw',
    price: 149.99,
    tag: 'STFI Certified',
    isNew: true,
    colors: 3,
    sizes: ['US 7', 'US 8', 'US 9', 'US 10', 'US 11'],
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Developed for maximum agility during acrobatic sunback spikes and bicycle kick landings. Features high-grip gum rubber court sole.'
  },
  {
    id: 'stfi-match-ball',
    name: 'STFI Elite Woven Match Ball',
    subtitle: 'ISTAF / STFI Competition Ball',
    category: 'Official Gear',
    sport: 'SepakTakraw',
    price: 45.99,
    tag: 'Official Match Ball',
    isNew: true,
    colors: 2,
    sizes: ['Standard Regu'],
    image: 'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Official 12-hole 20-intersection synthetic rattan match ball approved for National Championships and international selection trials.'
  },
  {
    id: 'stfi-india-jersey',
    name: 'STFI India National Team Kit',
    subtitle: 'Official Dri-FIT Player Jersey',
    category: 'Official Gear',
    sport: 'SepakTakraw',
    price: 69.99,
    tag: 'Team India',
    isNew: true,
    colors: 2,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Authentic Team India player kit with moisture-wicking performance knit fabric and national federation crest.'
  },
  {
    id: 'stfi-pro-ankle-guard',
    name: 'STFI Pro Court Ankle Sleeves',
    subtitle: 'High-Impact Ankle Support',
    category: 'Official Gear',
    sport: 'SepakTakraw',
    price: 29.99,
    tag: 'Protection',
    isNew: false,
    colors: 2,
    sizes: ['S/M', 'L/XL'],
    image: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=1000&q=80'
    ],
    description: 'Targeted compression sleeves providing joint stability for spikers and tekongs during high-altitude court landings.'
  }
];

export const NIKE_CATEGORIES = [
  { id: 'all', name: 'All Official Gear' },
  { id: 'Official Gear', name: 'SepakTakraw Equipment' }
];

export const CATEGORY_TILES = [
  {
    id: 'cat-notices',
    title: 'OFFICIAL NOTICES & CIRCULARS',
    categoryLabel: 'Federation Updates',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80',
    ctaPrimary: 'View Notices',
    ctaCategory: 'all'
  },
  {
    id: 'cat-rules',
    title: 'RULES & REGULATIONS',
    categoryLabel: 'Beach, Regu, Double & Quad',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80',
    ctaPrimary: 'Explore Rules',
    ctaCategory: 'all'
  },
  {
    id: 'cat-myas',
    title: 'MYAS COMPLIANCE PORTAL',
    categoryLabel: '28 Mandatory Governance Sections',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80',
    ctaPrimary: 'View Compliance',
    ctaCategory: 'all'
  },
  {
    id: 'cat-events',
    title: 'CHAMPIONSHIPS & TRIALS',
    categoryLabel: 'National Calendar 2026',
    image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1000&q=80',
    ctaPrimary: 'Event Calendar',
    ctaCategory: 'all'
  }
];

export const FOOTER_COLUMNS = [
  {
    title: 'Main Navigation',
    links: ['Home', 'Latest Notices & Circulars', 'Tournament Results', 'Event Calendar', 'Official Gear Store']
  },
  {
    title: 'Rules & Regulations',
    links: ['Regu Team Rules', 'Double Event Rules', 'Quad Event Rules', 'Beach Event Rules', 'Match Guidelines']
  },
  {
    title: 'Government Compliance',
    links: ['MYAS Disclosures (28)', 'Anti Doping (NADA/WADA)', 'RTI Officer Contact', 'STFI Constitution', 'AGM Minutes']
  },
  {
    title: 'Federation',
    links: ['About STFI History', 'Executive Elections 2024-2028', 'Affiliated State Units', 'Contact Federation Office']
  }
];
