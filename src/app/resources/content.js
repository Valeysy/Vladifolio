import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Vladimir",
  lastName: "Nechaev",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Network and Telecommunications Student",
  avatar: "/images/avatar.png",
  email: "vladimir.nechaev.pro@gmail.com",
  phone: "07 49 15 43 73",
  location: "France/Colmar", 
  timezone: "Europe/Paris",
  status: "Actively looking for work-study program",
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vladimir-nechaev-73aa3a1a1",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Valeysy",
  }
];

const home = {
  path: "/",
  label: "Home",
  title: `Home – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm currently a second-year student at the University of Haute Alsace in the Network and Telecommunications program with a specialization in Cloud Development. I'm actively seeking a work-study program of 1 year or more in IT, development and networking starting from September 2025. I'll be presenting the skills I've developed through my courses, work experience and personal projects.
      </>
    ),
  },
  personalProjects: {
    display: true,
    title: "Personal Projects",
    projects: [
      {
        name: "Sonixmaster",
        description: "Sonixmaster is an innovative platform offering a suite of AI-powered mastering tools designed specifically for artists and content creators. It provides advanced audio processing capabilities that enhance the quality of music and other audio content, making it easier for creators to achieve professional-grade results. With Sonixmaster, users can access a range of features that streamline the mastering process, allowing them to focus more on their creative work while ensuring their audio output is polished and refined.",
        website: "https://sonixmaster.com",
        images: [
          { src: "/images/og/Sonix-1.png", alt: "Sonixmaster Interface 1", width: 300, height: 200 },
          { src: "/images/og/Sonix-2.png", alt: "Sonixmaster Interface 2", width: 300, height: 200 },
          { src: "/images/og/Sonix-3.png", alt: "Sonixmaster Interface 3", width: 300, height: 200 },
          { src: "/images/og/Sonix-4.png", alt: "Sonixmaster Interface 4", width: 300, height: 200 },
        ]
      },
      
    ]
  },
  academic: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Nartex",
        timeframe: "March 2024 - May 2024",
        role: "iOS Development and App Design Intern",
        achievements: [
          <>
            Developed mobile applications using Swift and SwiftUI for iOS
          </>,
          <>
            Created design mockups and prototypes
          </>,
          <>
            Integrated KMP Multiplatform solution
          </>
        ],
        images: [],
      },
      {
        company: "El Labo Records",
        timeframe: "November 2023 - Present",
        role: "Head of Communications",
        achievements: [
          <>
            Managed social media platforms
          </>,
          <>
            Created visual content
          </>,
          <>
            Led the communications team
          </>
        ],
        images: [],
      },
      {
        company: "SKY KITCHEN, Cora Dornach",
        timeframe: "August 2023 - August 2024",
        role: "Versatile Employee",
        achievements: [
          <>
            Inventory management
          </>,
          <>
            Food preparation
          </>,
          <>
            Maintenance
          </>
        ],
        images: [],
      },
      {
        company: "INNOV/Events",
        timeframe: "March 2023 - April 2023",
        role: "Business Development Intern",
        achievements: [
          <>
            Client prospecting
          </>,
          <>
            Strategy development
          </>,
          <>
            Entrepreneurial projects
          </>
        ],
        images: [],
      },
      {
        company: "Poulaillon",
        timeframe: "August 2022 - April 2023",
        role: "Weekend Student Employee",
        achievements: [
          <>
            Sales
          </>,
          <>
            Customer relations
          </>,
          <>
            Preparation and maintenance
          </>
        ],
        images: [],
      },
      {
        company: "E.Leclerc",
        timeframe: "July 2022",
        role: "Summer Employee",
        achievements: [
          <>
            Shelf stocking
          </>,
          <>
            Order preparation
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "...ENSISA",
        description: <>2026-2028 - Engineering degree in computer science and IT</>,
      },
      {
        name: "IUT Colmar - Network and Telecommunications",
        description: <>2023-2026 - Bachelor's degree with a specialization in Cloud Development. Student entrepreneur status.</>,
      },
      {
        name: "IUT Colmar - Marketing Techniques",
        description: <>2022-2023</>,
      },
      {
        name: "Institution Sainte Jeanne D'arc",
        description: <>2015-2022 - General Baccalaureate with highest honors</>,
      },
      {
        name: "KMK German language certification",
        description: <>2018 - Level A2/B1</>,
      },
    ],
  },
  languages: {
    display: true,
    title: "Languages",
    list: [
      { name: "English", level: "Advanced proficiency" },
      { name: "Vietnamese", level: "Bilingual" },
      { name: "German", level: "Basic knowledge" },
      { name: "Russian", level: "Elementary" },
    ],
  },
  technical: {
    display: true,
    title: "Skills",
    skills: [
      {
        title: "IT & Development",
        description: <>
          <strong>Languages:</strong> TypeScript / Swift / SwiftUI / Python / HTML/CSS / SQL / Bash<br />
          <strong>Networking:</strong> Cisco Packet Tracer / EVE-NG / GNS3 / Fiber optics / Internet networking<br />
          <strong>Personal Projects:</strong> Sonixmaster.com (AI-powered audio mastering software) / Follow.com (digital portfolio platform for students, in development)
        </>,
        images: []
      },
      {
        title: "Design & Media",
        description: <>
          <strong>Imaging:</strong> Figma / UI/UX Design / Canva / Prototyping<br />
          <strong>Video:</strong> Final Cut Pro / DaVinci Resolve / CapCut
        </>,
        images: []
      },
      {
        title: "Soft Skills",
        description: <>
          <strong>Individual:</strong> Versatility / Resilience / Creativity / Adaptability to challenges<br />
          <strong>Team:</strong> Teamwork / Project management / Professional communication
        </>,
        images: []
      }
    ],
  },
};


const academic = {
  path: "/academic",
  label: "Academic",
  title: "Projects",
  title1: "SAE Projects",
  description: `Discover ${person.name}'s projects and works`
};

const document = {
  path: "/document",
  label: "Documents",
  title: `Documents – ${person.name}`,
  description: `Download ${person.name}'s documents`,
  title1: "Documents to download",
};

export {
  person,
  social,
  newsletter,
  home,
  academic,
  document,
};
