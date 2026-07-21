// Single source of truth for ALL editable site content.
// The admin panel edits slices of this object; every module reads from it via useContent().
// ponytail: one flat-ish object, no schema layer — the object IS the schema.

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
    heroImage:
      'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=2000&q=90',
  },

  // Live-countdown banner (ISTAF-style). date is ISO for the timer.
  featuredEvent: {
    kicker: 'Next Championship',
    title: '34th Senior National SepakTakraw Championship',
    venue: 'Indira Gandhi Indoor Stadium, New Delhi',
    date: '2026-10-24T09:00:00',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1800&q=80',
    cta: 'Event Details',
  },

  // Quick federation stat strip (like FIFA/BWF headline numbers)
  stats: [
    { value: '28+', label: 'Affiliated State Units' },
    { value: '34', label: 'Senior Nationals Held' },
    { value: '1.55m', label: 'Regulation Net Height' },
    { value: 'ISTAF', label: 'World Body Member' },
  ],

  // Image-led news "moments" — first item is the large lead story.
  highlights: [
    { id: 'h1', kicker: 'Championship', live: true, title: 'Manipur crowned Regu champions in a thrilling Senior National final', date: 'July 18, 2026', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1400&q=80', target: 'notice' },
    { id: 'h2', kicker: 'Selection', live: false, title: 'Asian Games probables camp begins at SAI Bengaluru', date: 'July 12, 2026', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?auto=format&fit=crop&w=900&q=80', target: 'events' },
    { id: 'h3', kicker: 'Governance', live: false, title: 'STFI publishes audited accounts & ACTC calendar for FY 2025–26', date: 'July 05, 2026', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80', target: 'myas' },
    { id: 'h4', kicker: 'Grassroots', live: false, title: 'Sub-Junior development drive expands to five new states', date: 'June 28, 2026', image: 'https://images.unsplash.com/photo-1526676037777-05a232554f77?auto=format&fit=crop&w=900&q=80', target: 'notice' },
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
        { id: 'calendar', label: 'Event Calendar 2026' },
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

  categories: [
    { id: 'cat-notices', title: 'OFFICIAL NOTICES & CIRCULARS', categoryLabel: 'Federation Updates', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1000&q=80', ctaPrimary: 'View Notices', target: 'notice' },
    { id: 'cat-rules', title: 'RULES & REGULATIONS', categoryLabel: 'Beach, Regu, Double & Quad', image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1000&q=80', ctaPrimary: 'Explore Rules', target: 'rules' },
    { id: 'cat-myas', title: 'MYAS COMPLIANCE PORTAL', categoryLabel: '28 Mandatory Governance Sections', image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80', ctaPrimary: 'View Compliance', target: 'myas' },
    { id: 'cat-events', title: 'CHAMPIONSHIPS & TRIALS', categoryLabel: 'National Calendar 2026', image: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?auto=format&fit=crop&w=1000&q=80', ctaPrimary: 'Event Calendar', target: 'events' },
  ],

  notices: [
    { id: 'notice-1', date: 'July 18, 2026', category: 'Selection Trial', badge: 'Urgent', title: 'Selection Trials Notification for 34th Senior National Championship & Asian Games Probables', desc: 'Official notification regarding national coaching camps and selection trials to be conducted at SAI Center, Bengaluru. All affiliated state units must submit athlete entries before August 10, 2026.', documentPdf: 'STFI_Selection_Trial_Circular_2026.pdf' },
    { id: 'notice-2', date: 'July 05, 2026', category: 'Elections', badge: 'Official', title: 'Publication of Electoral Roll & Schedule for STFI General Body Elections (2024-2028)', desc: 'Notice issued by the Returning Officer containing guidelines for nomination filings, candidate scrutiny, and general body election voting schedule.', documentPdf: 'STFI_Electoral_Roll_Notification_2026.pdf' },
    { id: 'notice-3', date: 'June 22, 2026', category: 'Results', badge: 'Results', title: 'Official Results: 33rd Junior National SepakTakraw Championship (Imphal, Manipur)', desc: 'Complete match scores, team standings, and medal winners list for Regu, Double, and Quad events held in Imphal.', documentPdf: '33rd_Junior_National_Results.pdf' },
    { id: 'notice-4', date: 'May 14, 2026', category: 'MYAS Compliance', badge: 'Compliance', title: 'Submission of Audited Financial Accounts & ACTC Calendar FY 2025-2026', desc: 'Public disclosure of annual audited financial accounts, statutory auditor statements, and annual competition calendar.', documentPdf: 'STFI_Audited_Accounts_2025_26.pdf' },
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
    { id: 'evt-1', name: '34th Senior National SepakTakraw Championship 2026', dates: 'October 24–28, 2026', venue: 'Indira Gandhi Indoor Stadium, New Delhi', category: 'Senior National', events: 'Regu, Double, Quad & Team Event (Men & Women)' },
    { id: 'evt-2', name: 'Asian Games 2026 National Selection Trials', dates: 'November 12–15, 2026', venue: 'SAI Netaji Subhas Southern Centre, Bengaluru', category: 'Selection Trial', events: 'Core Probables Evaluation' },
    { id: 'evt-3', name: '33rd Junior & Sub-Junior National Championship', dates: 'December 10–14, 2026', venue: 'Khuman Lampak Sports Complex, Imphal, Manipur', category: 'Junior National', events: 'Boys & Girls (Under-19 & Under-14)' },
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
