// Single source of truth for ALL editable site content.
import { assets } from '../components/ui/images';

export const defaultContent = {
  meta: {
    orgName: 'SepakTakraw Federation of India',
    orgShort: 'STFI',
    tagline: 'Recognized National Sports Federation (MYAS / ISTAF / ASTAF)',
    externalSite: 'https://sepaktakrawindia.com/',
  },

  hero: {
    bannerTag: 'Official Portal • MYAS Recognized',
    title: 'WE ARE\nSEPAKTAKRAW',
    tagline: 'STRONGER TOGETHER',
    subtitle:
      'The National Governing Body for SepakTakraw in India — recognized by the Ministry of Youth Affairs & Sports, affiliated with ISTAF & ASTAF.',
    heroImage: assets.moments[0],
  },

  // Live-countdown banner (ISTAF-style). date is ISO for the timer.
  featuredEvent: {
    kicker: 'Next Championship',
    title: '35th Senior National SepakTakraw Championship',
    venue: 'Indira Gandhi Indoor Stadium, New Delhi',
    date: '2025-10-23T09:00:00',
    image: assets.moments[1],
    cta: 'Event Details',
  },

  // Quick federation stat strip
  stats: [
    { value: '28+', label: 'Affiliated State Units' },
    { value: '35', label: 'Senior Nationals Held' },
    { value: '1.55m', label: 'Regulation Net Height' },
    { value: 'ISTAF', label: 'World Body Member' },
  ],

  // Image-led news "moments" — using local high-resolution Indian Sepak Takraw photos from src/components/ui/images/moments/
  highlights: [
    { id: 'h1', kicker: 'Championship Result', live: true, title: 'Result : 29th Junior National Championship for Boys & Girls', date: 'March 2026', image: assets.moments[0], target: 'notice' },
    { id: 'h2', kicker: 'Sub-Junior Results', live: false, title: 'RESULTS – 28th SUB JUNIOR NATIONAL CHAMPIONSHIP From 23rd to 27th March, 2026', date: 'March 27, 2026', image: assets.moments[1], target: 'notice' },
    { id: 'h3', kicker: 'Selection Timelines', live: false, title: 'SELECTION TIMELINES For ASIAN GAMES 2026', date: 'February 2026', image: assets.moments[2], target: 'events' },
    { id: 'h4', kicker: 'Selection Guidelines', live: false, title: 'STFI – POLICY & GUIDELINES FOR SELECTION TRIALS (MAJOR EVENTS)', date: 'January 2026', image: assets.moments[3], target: 'myas' },
    { id: 'h5', kicker: 'National Calendar', live: false, title: 'STFI Events Calendar 2026-27 Announced', date: 'January 2026', image: assets.moments[4], target: 'events' },
  ],

  // Extracted X (Twitter) Social Feed Posts — automatically rendered on homepage with author, hashtags & playable media
  xPosts: [
    {
      id: 'x-1552525191426609155',
      tweetId: '1552525191426609155',
      url: 'https://x.com/Media_SAI/status/1552525191426609155?s=20',
      authorName: 'SAI Media',
      authorHandle: '@Media_SAI',
      authorAvatar: 'https://pbs.twimg.com/profile_images/1612726756627877888/aC4b5c7p_400x400.jpg',
      verified: true,
      text: 'Glimpses of Indian SepakTakraw team showcasing breathtaking agility, aerial acrobatic kicks and supreme teamwork! 🇮🇳🔥 #SepakTakraw #SAIMedia #TeamIndia #IndianSports',
      hashtags: ['#SepakTakraw', '#SAIMedia', '#TeamIndia', '#IndianSports'],
      isVideo: false,
      image: assets.moments[0],
      embedIframeUrl: 'https://platform.twitter.com/embed/Tweet.html?id=1552525191426609155',
      date: 'July 28, 2022',
      featured: true,
    },
    {
      id: 'x-1903824150529265704',
      tweetId: '1903824150529265704',
      url: 'https://x.com/IndiaSportsHub/status/1903824150529265704?s=20',
      authorName: 'India Sports Hub',
      authorHandle: '@IndiaSportsHub',
      authorAvatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=IndiaSportsHub',
      verified: true,
      text: 'UNBELIEVABLE Scissor Kick Spike in Sepak Takraw! 🚀 Watch Indian athletes execute gravity-defying Sunback spikes in slow motion. ⚡ Click play below to watch the full rally right inside the app! #SepakTakraw #IndiaSports #MustWatch #AcrobaticSports',
      hashtags: ['#SepakTakraw', '#IndiaSports', '#MustWatch', '#AcrobaticSports'],
      isVideo: true,
      image: assets.moments[1],
      embedIframeUrl: 'https://platform.twitter.com/embed/Tweet.html?id=1903824150529265704',
      date: 'March 23, 2025',
      featured: true,
    },
  ],

  nav: [
    { id: 'home', label: 'Home' },
    {
      id: 'notice', label: 'Notice & News',
      children: [
        { id: 'news', label: 'News & Circulars' },
        { id: 'results', label: 'Championship Results' },
        { id: 'trials', label: 'Selection Trial Circulars' },
      ],
    },
    {
      id: 'rules', label: 'Rules & Regulations',
      children: [
        { id: 'rule-regu', label: 'Regu Team Rules' },
        { id: 'rule-double', label: 'Double Event Rules' },
        { id: 'rule-quad', label: 'Quad Event Rules' },
        { id: 'rule-beach', label: 'Beach Event Rules' },
      ],
    },
    {
      id: 'events', label: 'Events & Calendar',
      children: [
        { id: 'nationals', label: 'National Championships' },
        { id: 'selection', label: 'Selection Trials' },
        { id: 'camps', label: 'Training Camps' },
        { id: 'calendar', label: 'Event Calendar 2026-27' },
      ],
    },
    {
      id: 'governance', label: 'MYAS & Governance',
      children: [
        { id: 'myas', label: 'MYAS Compliance (28 Disclosures)' },
        { id: 'antidoping', label: 'Anti Doping (NADA/WADA)' },
        { id: 'rti', label: 'RTI Disclosures' },
        { id: 'elections', label: 'STFI Elections (2024-2028)' },
        { id: 'history', label: 'Federation History' },
      ],
    },
    { id: 'contact', label: 'Contact Us' },
  ],

  // Federation Pillars — Strictly using moments images (i1.png, i2.png, i3.png, i4.png)
  categories: [
    { id: 'cat-notices', title: 'OFFICIAL NOTICES & CIRCULARS', categoryLabel: 'Federation Updates', image: assets.moments[0], ctaPrimary: 'View Notices', target: 'notice' },
    { id: 'cat-rules', title: 'RULES & REGULATIONS', categoryLabel: 'Beach, Regu, Double & Quad', image: assets.moments[1], ctaPrimary: 'Explore Rules', target: 'rules' },
    { id: 'cat-myas', title: 'MYAS COMPLIANCE PORTAL', categoryLabel: '28 Mandatory Governance Sections', image: assets.moments[2], ctaPrimary: 'View Compliance', target: 'myas' },
    { id: 'cat-events', title: 'CHAMPIONSHIPS & TRIALS', categoryLabel: 'National Calendar 2026-27', image: assets.moments[3], ctaPrimary: 'Event Calendar', target: 'events' },
  ],

  // Latest Info, News & Notices requested list
  notices: [
    { id: 'notice-1', date: 'March 27, 2026', category: 'Results', badge: 'New', title: 'Result : 29th Junior National Championship for Boys & Girls', desc: 'Official championship final standings, team medalists, and player points tally for 29th Junior National SepakTakraw Championship.', documentPdf: '29th_Junior_National_Results.pdf' },
    { id: 'notice-2', date: 'March 23, 2026', category: 'Results', badge: 'Results', title: 'RESULTS – 28th SUB JUNIOR NATIONAL CHAMPIONSHIP From 23rd to 27th March, 2026', desc: 'Complete match results, state standings, and merit certificates for 28th Sub-Junior National Championship.', documentPdf: '28th_Sub_Junior_National_Results.pdf' },
    { id: 'notice-3', date: 'February 15, 2026', category: 'Calendar', badge: 'Official', title: 'STFI Events Calendar 2026-27', desc: 'Approved MYAS/ACTC Annual Competition and Training Calendar for FY 2026-27 across Senior, Junior & Sub-Junior events.', documentPdf: 'STFI_Events_Calendar_2026_27.pdf' },
    { id: 'notice-4', date: 'October 23, 2025', category: 'Championship', badge: 'Senior National', title: '35th Senior National Sepaktakraw Championship : 23-27 OCTOBER 2025', desc: 'Official circular and entry forms for 35th Senior National SepakTakraw Championship held at Indira Gandhi Indoor Stadium, New Delhi.', documentPdf: '35th_Senior_National_Circular.pdf' },
    { id: 'notice-5', date: 'November 27, 2025', category: 'Junior National', badge: 'Circular', title: '29th Junior National Sepaktakraw Championship will be held from 27-11-2025', desc: 'Notice regarding dates, venue, player age verification guidelines, and entry submissions for 29th Junior National.', documentPdf: '29th_Junior_National_Notice.pdf' },
    { id: 'notice-6', date: 'January 10, 2026', category: 'Selection Trial', badge: 'Urgent', title: 'SELECTION TIMELINES For ASIAN GAMES 2026', desc: 'Comprehensive schedule of national coaching camps, trials, sports science evaluations, and probables screening for Asian Games 2026.', documentPdf: 'Asian_Games_2026_Selection_Timelines.pdf' },
    { id: 'notice-7', date: 'January 05, 2026', category: 'Policy', badge: 'Governance', title: 'STFI – POLICY & GUIDELINES FOR SELECTION TRIALS (MAJOR EVENTS)', desc: 'Official selection policy document detailing transparency standards, evaluation matrix, and selection committee protocols.', documentPdf: 'STFI_Selection_Policy_Guidelines.pdf' },
  ],

  rules: [
    { id: 'rule-regu', title: 'Regu Team Event Rules', players: '3 Players per Regu (1 Tekong, 2 Inside Feeders/Spikers)', court: '13.4m x 6.1m Court Height 1.55m Net', description: 'The signature 3-on-3 event. Maximum 3 touches per side using feet, knees, chest, and head before sending the woven ball over the net. No hands or arms permitted.', pdf: 'STFI_Regu_Rules_Official.pdf' },
    { id: 'rule-double', title: 'Double Event Rules', players: '2 Players per Team (1 Server, 1 Striker)', court: '13.4m x 6.1m Court', description: 'Fast-paced two-player format testing stamina and aerial precision. Service is made from behind the baseline with 3 set limit to 21 points.', pdf: 'STFI_Double_Event_Rules.pdf' },
    { id: 'rule-quad', title: 'Quad Event Rules', players: '4 Players per Team (1 Server, 2 Blockers/Spikers, 1 Feeder)', court: '13.4m x 6.1m Court', description: 'Four-player tactical discipline featuring double net blocks, rapid positional rotations, and power spiking.', pdf: 'STFI_Quad_Event_Rules.pdf' },
    { id: 'rule-beach', title: 'Beach Event Rules', players: 'Sand Court (3 or 4 Players)', court: '13.4m x 6.1m Sand Arena', description: 'Outdoor beach sand court rules adapting to wind conditions, sand traction, and beach championship match formats.', pdf: 'STFI_Beach_Event_Rules.pdf' },
  ],

  myas: [
    { id: 1, title: '1. Federation Information & Constitution', desc: 'Official registration details, bylaws, and recognized status.' },
    { id: 2, title: '2. Election Details & Schedule', desc: 'Electoral college, election notifications, and returning officer reports.' },
    { id: 3, title: '3. International Affiliations', desc: 'ISTAF (World) and ASTAF (Asian) affiliation certificates.' },
    { id: 4, title: '4. Executive Office Bearers', desc: 'List of President, General Secretary, Treasurer, and Executive Members.' },
    { id: 5, title: '5. Annual Calendar (ACTC)', desc: 'Annual Calendar for Training & Competitions approved by MYAS.' },
    { id: 6, title: '6. Audited Financial Accounts', desc: 'Balance sheets, income & expenditure statements audited by chartered accountants.' },
    { id: 7, title: '7. Statutory Auditor Details', desc: 'Name, address, and registration credentials of official auditors.' },
    { id: 8, title: '8. Society Registration Certificate', desc: 'Valid registration document under Societies Registration Act.' },
    { id: 9, title: '9. STFI Constitution & Bylaws', desc: 'Approved constitution governing federation management.' },
    { id: 10, title: '10. State Affiliation Criteria', desc: 'Guidelines and norms for state unit recognition.' },
    { id: 11, title: '11. List of Affiliated Units', desc: 'Directory of affiliated State Associations and Union Territory bodies.' },
    { id: 12, title: '12. State Associations Directory', desc: 'Contact numbers, office addresses, and emails of state secretaries.' },
    { id: 13, title: '13. National Championship Norms', desc: 'Rules for organizing Senior, Junior, and Sub-Junior Nationals.' },
    { id: 14, title: '14. International Events Criteria', desc: 'Selection guidelines for Asian Games, World Cup, and Asian Championships.' },
    { id: 15, title: '15. Core Probables List', desc: 'Roster of athletes selected for national coaching camps.' },
    { id: 16, title: '16. Player Digital ID Cards', desc: 'National player registration and unique ID verification.' },
    { id: 17, title: '17. Certificate Verification', desc: 'Online portal for verifying merit and participation certificates.' },
    { id: 18, title: '18. Age Fraud Prevention', desc: 'MedicalTW3 age verification guidelines and strict penalty code.' },
    { id: 19, title: '19. National Selection Committee', desc: 'Names and credentials of Arjuna Awardees and coaches in selection panel.' },
    { id: 20, title: '20. Anti-Doping Directives', desc: 'NADA and WADA code compliance and dope control procedures.' },
    { id: 21, title: '21. Federation Funding Sources', desc: 'Public statement of grants, sponsorships, and government financial assistance.' },
    { id: 22, title: '22. Revenue Statement', desc: 'Annual revenue statement submitted to Ministry of Youth Affairs & Sports.' },
    { id: 23, title: '23. SAI Sanctions & Grants', desc: 'Financial assistance received from Sports Authority of India.' },
    { id: 24, title: '24. Sportsperson Quota', desc: 'Representation of eminent sportspersons in STFI executive committee.' },
    { id: 25, title: '25. National Training Schedule', desc: 'Year-round camp schedule, venues, and chief coaches.' },
    { id: 26, title: '26. AGM Minutes of Meeting', desc: 'Minutes of Annual General Meetings and Special GB meetings.' },
    { id: 27, title: '27. Selection Committee Minutes', desc: 'Transparent records of selection committee decisions.' },
    { id: 28, title: '28. Specialized Commissions', desc: 'Athletes Commission, Women Commission, and Disciplinary Committee details.' },
  ],

  events: [
    { id: 'evt-1', name: '35th Senior National SepakTakraw Championship 2025', dates: 'October 23–27, 2025', venue: 'Indira Gandhi Indoor Stadium, New Delhi', category: 'Senior National', events: 'Regu, Double, Quad & Team Event (Men & Women)' },
    { id: 'evt-2', name: '29th Junior National SepakTakraw Championship', dates: 'November 27–December 01, 2025', venue: 'Khuman Lampak Sports Complex, Imphal, Manipur', category: 'Junior National', events: 'Boys & Girls (Under-19)' },
    { id: 'evt-3', name: '28th Sub Junior National Championship', dates: 'March 23–27, 2026', venue: 'SAI Netaji Subhas Southern Centre, Bengaluru', category: 'Sub-Junior', events: 'Boys & Girls (Under-14)' },
    { id: 'evt-4', name: 'Asian Games 2026 Selection Trials', dates: 'November 12–15, 2026', venue: 'SAI Center, Bengaluru', category: 'Selection Trial', events: 'Core Probables Evaluation' },
  ],

  footerColumns: [
    { title: 'Navigation', links: ['Home', 'Notice & News', 'Championship Results', 'Event Calendar', 'Official Circulars'] },
    { title: 'Rules & Regulations', links: ['Regu Team Rules', 'Double Event Rules', 'Quad Event Rules', 'Beach Event Rules', 'ISTAF International Code'] },
    { title: 'MYAS Compliance', links: ['28 Governance Disclosures', 'Audited Accounts', 'ACTC Calendar', 'Anti Doping (NADA/WADA)', 'RTI Disclosures'] },
    { title: 'Contact Federation', links: ['Federation Headquarters', 'State Association Contacts', 'Public Information Officer', 'Elections 2024-2028'] },
  ],

  contact: {
    officeName: 'SepakTakraw Federation of India (STFI) Office',
    officeNote: 'Official Portal for National Championships, MYAS Disclosures & Selection Trials',
    email: 'stfi@sepaktrawindia.com',
    rtiEmail: 'rti@sepaktrawindia.com',
    rtiOfficer: 'Sh. Executive Secretary, STFI',
    location: 'New Delhi, India',
  },
};
