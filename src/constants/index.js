import {
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  git,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  LTI,
  buildTheWorld,
  cloud,
  ML,
  fullstack,
  python,
  java,
  sql,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: fullstack,
  },
  {
    title: "Data Engineering",
    icon: backend,
  },
  {
    title: "Cloud Computing",
    icon: cloud,
  },
  {
    title: "Machine Learning",
    icon: ML,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "sql",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Senior Full stack Developer",
    company_name: "LTIMindTree",
    icon: LTI,
    iconBg: "#333333",
    date: "Aug 2021 - Aug 2022",
    description: [
      "Developed a real time asset overview website leveraging React for effective data visualization using chart js, contributing to a 25% increase in user engagement.",
      "Established CI/CD pipelines using AWS services and Nginx, enabling seamless deployment and monitoring of applications, complemented by comprehensive unit testing utilizing Jest achieving a 90% code coverage.",
      "Implemented triggers using AWS Lambda for issuing real-time alerts and analyzing the cause, leading to a 30% improvement in response.",
    ],
  },
  {
    title: "Full stack engineer",
    company_name: "LTIMindTree",
    icon: LTI,
    iconBg: "#333333",
    date: "Dec 2021 - Aug 2021",
    description: [
      "Designed and implemented mappings to facilitate the migration of customer data from legacy systems to Oracle using Informatica, ensuring a seamless transition with minimal downtime.",
      "Developed sophisticated data transformation logic for integrating data from multiple sources, improving data accuracy and ensuring consistency across all systems.",
      'Received the "Best Employee" award for creating efficient and effective solutions to migrate and analyze data, highlighting my commitment to delivering high-quality outcomes.',
      "Streamlined the data migration process, minimizing the risks associated with data loss and ensuring the integrity and reliability of the migrated data.",
    ],
  },

  {
    title: "Full stack engineer Trainee",
    company_name: "LTIMindTree",
    icon: LTI,
    iconBg: "#333333",
    date: "Oct 2020 - Dec 2021",
    description: [
      "Architected and developed a comprehensive vehicle insurance platform using Java Spring Boot for backend logic and Angular for a responsive frontend user interface, improving the overall user experience.",
      "Integrated the platform with a robust payment gateway, enabling customers to effortlessly purchase and renew insurance policies online, contributing to a significant increase in sales.",
      "Implemented role-based access control to provide varying levels of access to users, ensuring data security and compliance with privacy regulations.",
      "Leveraged unit and integration testing tools to ensure the platform's robustness and reliability, resulting in a reduction of bugs and downtime.",
    ],
  },

  {
    title: "Intern",
    company_name: "buildTheWorld",
    icon: buildTheWorld,
    iconBg: "#333333",
    date: "May 2022 - Oct 2022",
    description: [
      "Developed dynamic user feed feature using React, optimizing content delivery and boosting user engagement by 20%. ",
      "Strategically designed and implemented user management roles and permissions, enhancing system security and simplifying administrative tasks.",
      "Integrated comprehensive maps and location-based services into the website, improving its usability and user satisfaction.",
      "Carried out a significant code refactoring process that resulted in a 10% reduction in the codebase. This led to improved maintainability, easier feature additions, and a more efficient performance of the application.",
    ],
  },
];

const projects = [
  {
    id: "project-1",
    name: "Blog",
    description: "A blog using React where  people can post things",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: komikult,
    repo: "https://github.com/gvssaisumanth/myblog",
    link: "https://gvsblogs-f961a.web.app/",
  },
  {
    id: "project-2",
    name: "Bolckxfer",
    description: "A blockchain transaction website",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: leaderboard,
    repo: "https://github.com/gvssaisumanth/HBC-hackathon",
    link: "https://twitter.com/easya_app/status/1642623297052618752",
    demo: "",
  },
  {
    id: "project-3",
    name: "Event Rise",
    description:
      "A website to create Events attend and post done by group of 5 people",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "AWS",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "Mongodb",
        color: "white-text-gradient",
      },
      {
        name: "NodeJs",
        color: "black-text-gradient",
      },
    ],
    image: math,
    repo: "https://github.com/gvssaisumanth/EventRise",
    link: "",
  },
  {
    id: "project-4",
    name: "Book Analysis",
    description: `Harry potter book analysis trying to extract check emotions based on the houses`,
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "matplotlib",
        color: "green-text-gradient",
      },
      {
        name: "numpy",
        color: "pink-text-gradient",
      },
      {
        name: "scikitlearn",
        color: "pink-text-gradient",
      },
      {
        name: "nltk",
        color: "pink-text-gradient",
      },
      {
        name: "text2emotion",
        color: "pink-text-gradient",
      },
    ],
    image: movie,
    repo: "https://github.com/gvssaisumanth/HarryPotterAnalysis",
    link: "",
  },
  {
    id: "project-5",
    name: "TSP",
    description:
      "Detailed analysis of travelling salesman using christofides algorithm",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "matplotlib",
        color: "green-text-gradient",
      },
    ],
    image: nyeusi,
    repo: "https://github.com/gvssaisumanth/TravellingSalesman",
    link: "",
  },
];

export { services, technologies, experiences, projects };
