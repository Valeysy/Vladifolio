import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Vladimir",
  lastName: "Nechaev",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Actively looking for an apprenticeship",
  avatar: "/images/avatar.png",
  email: "vladimir.nechaev.pro@gmail.com",
  location: "France/Colmar", 
  timezone: "Europe/Paris",
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
    link: "https://linkedin.com/in/vladimir-nechaev-73aa3a1",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+33749154373",
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
        I'm currently studying at the University of Haute Alsace in the Network and Communication stream with a specialization in Cloud Development. I'll be presenting the skills I've developed through my courses, work experience and personal projects.
      </>
    ),
  },
  school: {
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

const work = {
  path: "/work",
  label: "Work",
  title: "Projects",
  title1: "Personal Projects",
  title2: "Academic Projects",
  title3: "Collaborations",
  description: `Discover ${person.name}'s projects and works`
};

const school = {
  path: "/school",
  label: "School",
  title: "Projects",
  title1: "Personal Projects",
  title2: "Academic Projects",
  title3: "Collaborations",
  description: `Discover ${person.name}'s projects and works`
};

export { person, social, newsletter, home, school};
