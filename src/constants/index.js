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
  amazon,
  cloud,
  ML,
  fullstack,
  python,
  java,
  sql,
  cloudnative,
} from "../assets";

export const navLinks = [
  {
    title: "Accueil",
    href: "/",
    cname:
      "border-t font-medium w-full flex justify-center p-2.5 mt-3 md:border-none md:p-0 md:mt-0 md:w-auto",
  },
  {
    title: "Store",
    href: "/store",
    cname:
      "border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto",
  },
  {
    title: "Cart",
    href: "/cart",
    cname:
      "border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto",
  },
  {
    title: "About us",
    href: "/about-us",
    cname:
      "border-t font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto",
  },
  {
    title: "Contact",
    href: "/contact",
    cname:
      "border-t border-b font-medium w-full flex justify-center p-2.5 md:border-none md:p-0 md:w-auto",
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
    title: "Software Development Engineer Co-op",
    company_name: "Amazon",
    icon: amazon,
    iconBg: "#333333",
    date: "Jan 2024 - Aug 2024",
    description: [
      "Architected and launched a React based web application collaborating with product managers and UX designers that improved the configuration process of warehouse parts by 30% and 20% increase in project delivery speed",
      "Actively maintained and enhanced the front-end library utilized by fellow developers at amazon, ensuring a 20% reduction in bugs and inconsistencies",
      "Leveraged AWS Lambda and SageMaker to integrate generative AI features, resulting in a 15% improvement in application functionality and user engagement",
      "Applied debouncing and throttling techniques to JavaScript event handlers to reduce excessive re-renders and improve UI smoothness, resulting in a more fluid user experience and reduced CPU usage by 25%",
      "Implemented advanced techniques such as memoization lazy loading of components, and efficient state management, after profiling leading to a 25% improvement in load times and responsiveness.",
    ],
  },
  {
    title: "Senior Software Developer",
    company_name: "LTIMindTree",
    icon: LTI,
    iconBg: "#333333",
    date: "Aug 2020 - Aug 2022",
    description: [
      "Led a team of 3 employees to design and build a web application for a digital twin platform using modern design patterns, real-world assets, data collection, processing, and alarm notifications.",
      "Set up and managed AWS infrastructure including VPC, EC2, Auto Scaling Groups, Load Balancer, S3, Lambda functions, and RDS (PostgreSQL), transitioning from CloudFormation to Terraform for infrastructure as code (IaC).",
      "Implemented a serverless architecture with AWS Lambda for data processing and real-time alerts, optimizing triggers to handle real-time application state changes and ensuring efficient data storage and retrieval with DynamoDB and RDS.",
      "Developed and integrated API endpoints using Node.js for seamless interaction and data exchange between the web application and its backend.",
      "Designed and deployed dynamic dashboards for real-time data visualization and monitoring, utilizing AWS CloudWatch for application logs, performance metrics, and custom event-based alerts.",
      "Optimized application performance by automating the processing of incoming data and events, ensuring high efficiency and reliability in real-time data-driven operations.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "LTIMindTree",
    icon: LTI,
    iconBg: "#333333",
    date: "Sep 2019 - Aug 2020",
    description: [
      "Architected a React-based web application with Redux for corporate affairs, enabling management of complex UI states and analytics visualization, including location-based insights.",
      "Designed and implemented custom forms and survey creation tools, allowing users to create personalized forms and surveys for data collection and analysis.",
      "Built a Python Django backend with RESTful APIs, integrating with an SQL database to handle millions of records, processing complex queries, and improving data retrieval speed by 40%, which increased user engagement by 30%.",
      "Developed interactive charts to visualize key data insights and ensured the application's functionality, reliability, and scalability through comprehensive regression testing.",
      "Automated CI/CD pipeline and deployment processes using Azure, improving delivery speed and reducing manual intervention in the development workflow.",
      "Containerized the application using Docker to create isolated environments for frontend and backend, ensuring consistency across development, testing, and production environments.",
      "Orchestrated application services using Kubernetes, enabling scalable deployment infrastructure and efficient resource management.",
      "Developed a vehicle insurance platform using Java Spring Boot for the backend and Angular for the frontend, handling over 50,000 insurance policies and user interactions.",
      "Designed and implemented key features such as policy creation, claims management, and premium calculation, reducing manual processing time by 40% and streamlining application flow, which resulted in a 20% increase in user engagement and a 25% reduction in claim processing time.",
      "Integrated an SQL database for managing and storing millions of records, optimizing queries to improve data retrieval speed by 30% for policy and claim data.",
    ],
  },

  {
    title: "Intern",
    company_name: "buildTheWorld",
    icon: buildTheWorld,
    iconBg: "#333333",
    date: "Jan 2019 - Sep 2019",
    description: [
      "Developed a user feed feature using React that improved user engagement by 20%",
      "Created user management roles and permissions to enhance security and streamline administrative tasks",
      "Integrated maps and location-based services into website, improving usability and user satisfaction",
      "Refactored code which reduced code base by 10%",
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
  {
    id: "project-5",
    name: "Cloud-Native Application",
    description:
      "Utilized Terraform for Infrastructure as Code to configure network infrastructure for Assignment tracker application",
    tags: [
      {
        name: "Node.js, Express.js",
        color: "pink-text-gradient",
      },
      {
        name: " CI/CD,Packer",
        color: "blue-text-gradient",
      },
      {
        name: "GCP, AWS Terraform",
        color: "green-text-gradient",
      },
      {
        name: "Pulumi",
        color: "pink-text-gradient",
      },
    ],
    image: cloudnative,
    repo: "",
    link: "",
  },
];

export { services, technologies, experiences, projects };
