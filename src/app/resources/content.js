import { Logo } from '@/once-ui/components';

const person = {
  firstName: 'Tuan Anh',
  lastName: 'Nguyen Truong',
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: 'AI Developer & Full-Stack Engineer',
  avatar: '/images/avatar.jpg',
  email: 'nguyentruongtuananh03@gmail.com',
  location: 'Asia/Ho_Chi_Minh', // Thu Duc City, Vietnam timezone
  languages: ['Vietnamese', 'English'], // Based on TOEIC 715
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I share insights about AI development, full-stack engineering, and the
      intersection of technology and education. Follow my journey in building
      intelligent applications.
    </>
  ),
};

const social = [
  {
    name: 'GitHub',
    icon: 'github',
    link: 'https://github.com/TruogAnh-28',
  },
  {
    name: 'LinkedIn',
    icon: 'linkedin',
    link: '', // Add your LinkedIn profile when available
  },
  {
    name: 'Email',
    icon: 'email',
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: '/',
  image: '/images/og/home.jpg',
  label: 'Home',
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as an ${person.role}`,
  headline: (
    <>Building intelligent solutions with AI & Full-Stack Development</>
  ),
  featured: {
    display: true,
    title: (
      <>
        Featured project:{' '}
        <strong className='ml-4'>EduMind - Smart Education System</strong>
      </>
    ),
    href: '/work/edumind-smart-education-system',
  },
  subline: (
    <>
      I'm Tuan Anh, an AI Developer and Full-Stack Engineer studying Applied
      Artificial Intelligence at
      <br /> HCMUT. I create intelligent applications that solve real-world
      problems.
    </>
  ),
};

const about = {
  path: '/about',
  label: 'About',
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Thu Duc City, Vietnam`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: 'https://cal.com', // Update with your scheduling link
  },
  intro: {
    display: true,
    title: 'Introduction',
    description: (
      <>
        Tuan Anh is a passionate AI Developer and Full-Stack Engineer studying
        Applied Artificial Intelligence at Ho Chi Minh City University of
        Technology (HCMUT). He specializes in developing intelligent
        applications that combine Large Language Models with modern web
        technologies to create meaningful solutions for education and business
        management.
      </>
    ),
  },
  work: {
    display: true,
    title: 'Projects & Experience',
    experiences: [
      {
        company: 'EduMind - Smart Education System',
        timeframe: 'Oct 2024 - Ongoing',
        role: 'Full-Stack Developer & AI Integration Lead',
        achievements: [
          <>
            Developed a smart learning platform for programming that combines
            Large Language Models (LLMs) to optimize personalized learning paths
            based on user data.
          </>,
          <>
            Implemented robust back-end using FastAPI with seamless LLM
            integration and built responsive front-end interface using Vue.js
            and Vuetify.
          </>,
          <>
            Utilized LLMs to generate personalized lessons, exercises, and
            explanations tailored to user progress and learning goals.
          </>,
        ],
        images: [
          {
            src: '/images/projects/edumind/cover-01.jpg',
            alt: 'EduMind Platform',
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: 'FINWISE - Expense Management App',
        timeframe: 'Apr 2024 - Jun 2024',
        role: 'Frontend Developer',
        achievements: [
          <>
            Designed intuitive UI components for expense management including
            Onboarding, Authentication, and Transaction Creation using React
            Native.
          </>,
          <>
            Developed architectural diagram utilizing MVP architecture for
            maintainable and scalable code structure.
          </>,
          <>
            Leveraged Expo Go for cross-platform app deployment, facilitating
            distribution and testing across multiple platforms.
          </>,
        ],
        images: [],
      },
      {
        company: 'Grocery Store Management System',
        timeframe: 'Oct 2023 - Dec 2023',
        role: 'Frontend Developer & Database Designer',
        achievements: [
          <>
            Designed and implemented structured MySQL database with optimized
            relationships and queries for efficient data management.
          </>,
          <>
            Created stored procedures for CRUD operations, employee work hours
            tracking, and comprehensive product statistics.
          </>,
          <>
            Built responsive React-based UI for home, statistics, and staff
            management pages.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: 'Education',
    institutions: [
      {
        name: 'Ho Chi Minh City University of Technology (HCMUT)',
        description: (
          <>
            Computer Science with specialization in Applied Artificial
            Intelligence. GPA: 3.1/4. Expected graduation: 2025.
          </>
        ),
      },
      {
        name: 'English Proficiency',
        description: (
          <>
            TOEIC Score: 715, demonstrating strong English communication skills
            for international collaboration.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: 'Technical Skills',
    skills: [
      {
        title: 'Programming Languages',
        description: (
          <>
            Proficient in C++, JavaScript, Python, and web technologies
            (HTML/CSS) for diverse development needs.
          </>
        ),
        images: [],
      },
      {
        title: 'Frontend Development',
        description: (
          <>
            Experienced with React.js, React Native, and Vue.js for building
            responsive web and mobile applications.
          </>
        ),
        images: [],
      },
      {
        title: 'Backend & AI',
        description: (
          <>
            Skilled in FastAPI and PHP for backend development, with expertise
            in integrating Large Language Models and AI solutions.
          </>
        ),
        images: [],
      },
      {
        title: 'Database Management',
        description: (
          <>
            Experienced with MySQL and PostgreSQL for designing efficient
            database schemas and optimizing query performance.
          </>
        ),
        images: [],
      },
    ],
  },
};

const blog = {
  path: '/blog',
  label: 'Blog',
  title: 'AI Development & Engineering Insights...',
  description: `Read about ${person.name}'s journey in AI development and full-stack engineering`,
};

const work = {
  path: '/work',
  label: 'Projects',
  title: `Projects – ${person.name}`,
  description: `AI and Full-Stack development projects by ${person.name}`,
};

const gallery = {
  path: '/gallery',
  label: 'Gallery',
  title: `Gallery – ${person.name}`,
  description: `Project screenshots and development journey by ${person.name}`,
  images: [
    {
      src: '/images/gallery/horizontal-1.jpg',
      alt: 'EduMind Dashboard',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-2.jpg',
      alt: 'FINWISE Mobile App',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-3.jpg',
      alt: 'Grocery Store Management',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/horizontal-4.jpg',
      alt: 'AI Model Integration',
      orientation: 'horizontal',
    },
    {
      src: '/images/gallery/vertical-1.jpg',
      alt: 'Code Architecture',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-2.jpg',
      alt: 'Database Design',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-3.jpg',
      alt: 'AI Development Process',
      orientation: 'vertical',
    },
    {
      src: '/images/gallery/vertical-4.jpg',
      alt: 'Full-Stack Development',
      orientation: 'vertical',
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
