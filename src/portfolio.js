export const projects = [
  {
    id: 'future-path',
    name: 'Future Path Center',
    description: 'Managed the center’s social media and media buying to build awareness, attract customers, and grow engagement.',
    formats: 'Social strategy, reels, posts, stories, and targeted ads',
    imageAlt: 'Future Path Center’s TikTok profile and video grid',
    pages: [17, 18],
    results: [
      { from: 12, to: 35, label: 'Customers' },
      { from: 72, to: 595, label: 'TikTok followers' },
    ],
  },
  {
    id: 'rashidy',
    name: 'Rashidy Dental Center',
    description: 'Created ideas for reels, posts, and stories that showcase the brand’s identity and connect with its audience.',
    formats: 'Reels, posts, and stories',
    imageAlt: 'Rashidy Dental Center social media post promoting fluoride treatment for children',
    pages: [6, 7, 8],
  },
  {
    id: 'a-plus',
    name: 'A Plus Dental Center',
    description: 'Developed social content around the brand’s identity, alongside feedback videos that captured patients’ experiences.',
    formats: 'Reels, posts, stories, and feedback videos',
    imageAlt: 'A Plus Dental Center social media post about veneers',
    pages: [9, 10, 11],
  },
  {
    id: 'more',
    name: 'More Dental Care',
    description: 'Developed content ideas for reels, posts, and stories that bring the brand’s personality to life.',
    formats: 'Reels, posts, and stories',
    imageAlt: 'More Dental Care social media post showing a dental implant',
    pages: [12, 13, 14],
  },
  {
    id: 'shefaa',
    name: 'Shefaa Dental Clinics',
    description: 'Created social content that reflects the brand’s identity, supported by feedback videos that share patient experiences.',
    formats: 'Reels, posts, stories, and feedback videos',
    imageAlt: 'Shefaa Dental Clinics social media post about extraction and implants',
    pages: [15, 16],
  },
]

export const services = [
  {
    title: 'Media buying',
    description: 'Campaign planning, lead generation, and ad optimization across Meta and TikTok.',
  },
  {
    title: 'Social media management',
    description: 'Content calendars, social strategy, campaign reporting, and audience engagement.',
  },
  {
    title: 'Content creation',
    description: 'Reels, posts, and stories that reflect each brand’s identity.',
  },
]

// The site introduces Shams through its own About section.
export const portfolioPages = Array.from({ length: 20 }, (_, index) => index + 1)
  .filter((page) => page !== 2)
