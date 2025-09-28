type Project = {
  name: string
  description: string
  link: string
  video?: string
  image?: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'TripWizard',
    description: 'AI-powered trip itinerary generator.',
    link: 'https://tripwizard.app',
    video: '/tripwizard.mp4',
    id: 'project1',
  },
  // {
  //   name: 'Motion Primitives',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  // },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'StackAdapt',
    title: 'Software Engineer',
    start: '2025',
    end: 'Present',
    link: 'https://www.stackadapt.com',
    id: 'work1',
  },
  {
    company: 'Cloudflare',
    title: 'Systems Engineer',
    start: '2021',
    end: '2025',
    link: 'https://www.cloudflare.com',
    id: 'work2',
  },
  {
    company: 'StackAdapt',
    title: 'Front-End Engineer',
    start: '2021',
    end: '2021',
    link: 'https://stackadapt.com',
    id: 'work3',
  },
  {
    company: 'Skyline Systems',
    title: 'Founder',
    start: '2017',
    end: 'Present',
    link: 'https://skylinesystems.io',
    id: 'work4',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/sahibjotsaggu',
  },
  {
    label: 'Peerlist',
    link: 'https://peerlist.io/sahibjot',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/sahibjotsaggu',
  },
]

export const EMAIL = 'sahibjot@live.ca'
