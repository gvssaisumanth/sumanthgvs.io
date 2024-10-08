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
    date: "Aug 2021 - Aug 2022",
    description: [
      "Proficiently architected and managed the SDLC, leveraging AWS CI/CD services such as AWS CodeCommit,CodeBuild, and CodeDeploy to automate deployment reducing the deployment time by 30%.",
      "Leveraged Python and Node.js to craft REST APIs using Chalice, Flask, and Express.Enhanced system predictability, boosting data processing efficiency by 30 % and ensured seamless frontend - backend integration.",
      "Utilized React, Redux and React-Router to build intuitive frontend interfaces for asset overview, alerts dashboard,and user management. Incorporated Chart.js and enhanced data visualization, increasing user engagement by 40%.",
      "Implemented rigorous unit testing for Python, Node.js, and React applications, utilizing frameworks like pytest, Jest, and Mocha, to ensure robust and reliable software performance.",
      "Integrated AWS Timestream and DynamoDB for time-series data capture and low-latency storage, increasing data accessibility by 50%. Utilized AWS Lambda for event-driven programming and established a continuous monitoring system using AWS CloudWatch and AWS X-Ray for anomaly detection.",
      "Developed a real time asset overview website leveraging React for effective data visualization using chart js, contributing to a 25% increase in user engagement.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "LTIMindTree",
    icon: LTI,
    iconBg: "#333333",
    date: "Oct 2020 - Aug 2021",
    description: [
      "Developed a comprehensive, full-stack solution for a prepaid smart metering system, designed to cater to a user base of 50 lakh (5 million) users using Python and Node.js to craft REST APIs.",
      "Implemented message queuing with AWS SQS to buffer incoming data, ensuring system decoupling and asynchronous processing of high-volume meter readings.",
      "Deployed containerized microservices via AWS Elastic Container Service (ECS) to abstract data processing and analytics tasks, enhancing the scalability and reliability of the system.",
      "Leveraged AWS Lambda with AWS EventBridge for event-driven data processing, effectively orchestrating asynchronous transformations and computations based on predefined triggers and rules.",
      "Employed complex data transformation and ETL (Extract, Transform, Load) processes to support the integration between the data layer and the React-based frontend, enabling real-time data visualization",
    ],
  },

  {
    title: "Intern",
    company_name: "buildTheWorld",
    icon: buildTheWorld,
    iconBg: "#333333",
    date: "Jan 2020 - Sep 2020",
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
];

export { services, technologies, experiences, projects };
