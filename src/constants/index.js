import { taxfix, instaleap, galavi, banco } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    nestjs,
    fastify,
    sql
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: fastify,
        name: "Fastify",
        type: "Backend",
    },
    {
        imageUrl: nestjs,
        name: "NestJS",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: sql,
        name: "Sql",
        type: "Database",
    }
];

export const experiences = [
    {
        title: "Senior Full Stack Engineer",
        company_name: "Taxfix",
        icon: taxfix,
        iconBg: "#adee686b",
        date: "Jan 2021 - Present",
        points: [
            "Designed and implemented innovative services for primary users in Germany, expanding tax-filing options. Employed diverse approaches to address user needs, resulting in the successful delivery of a new service in just 6 months.",
            "Crafted RFCs to define both functional and non-functional requirements for various new initiatives. Successfully delivered systems within reasonable timelines by creating and managing tickets, overseeing implementation, and maintaining transparent communication with stakeholders, addressing potential blockers and significant changes.",
            "Enhanced existing pub/sub-workers for improved efficiency and clarity. Simplified the implementation of new workers by studying and applying relevant design patterns tailored to the company's specific requirements and goals.",
            "Conducted interviews for senior candidates, assessing their programming, communication, and design system skills to identify top talent for the team.",
        ],
        techStack: ["JS", "React Native", "ReactJS", "NodeJS", "TS", "Fastify", "NestJs", "StoryBook", "GCP", "Firebase", "Swagger", "MySQL", "Prometheus Monitoring", "Docker", "Jest", "Notion", "Jira", "Github"],
    },
    {
        title: "Senior Full Stack Engineer",
        company_name: "Instaleap",
        icon: instaleap,
        iconBg: "#2bde73b5",
        date: "May 2017 - Dec 2021",
        points: [
            "Created  3+ new systems from zero to pivot the company’s business from a B-to-C model to a B-to-B by working fast and interacting with multiple teams to achieve the release of our new products in less than 4 months and get 5+ new clients and keep our first ones.",
            "Designed and built different software solutions by making use of microservices architecture to be capable of handling high concurrency and keeping good user experience, working with AWS and Firebase.",
            "Developed new requirements by working hand in hand with the product manager to help to understand the client's needs and be able to deliver the best solution as fast as possible.",
            "Improving the existing applications by fixing bugs and finding better ways to optimize the existing database queries to maintain the enormous growth of the company in the short term, resulting in a 200% of growth in orders processed year to year.",
            "Built unit tests with Mocha and Chai for NodeJS and worked for hand in hand with the QA team to reduce the production errors by 99.99% in each two weeks release."
        ],
        techStack: ["JS", "ReactJS", "NodeJS", "TS", "ExpressJS", "NestJs", "GCP", "Firebase", "MySQL", "MongoDB", "Jest", "Mocha", "Chai", "Notion", "Jira", "Github", "Styled-Components", "AWS(CodePipeline, CloudFormation, CloudFront, S3)", "Postgresql", "RabbitMQ"],
    },
    {
        title: "Full Stack Engineer",
        company_name: "Grupo Galavi S.A.S",
        icon: galavi,
        iconBg: "#038f99bf",
        date: "March 2016 - May 2017",
        points: [
            "Developed web applications with NodeJS and AngularJS v1 like a system to extract the daily hundreds of public contracts from the government web page and release alerts according to the clients' preferences.",
            "Built mobile applications by making use of  Ionic Framework v1, Socket IO for real-time interactions, and Google Maps to create interactive geolocation tracking for business vehicles.",
            "Deployed web apps from scratch by making use of Google Cloud Platform.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
        techStack: ["JS", "AngularJS", "NodeJS", "Ionic", "GCP", "MongoDB", "SocketIO", "Google Maps", "Notion", "Jira", "Github"],
    },
    {
        title: "Junior Developer",
        company_name: "Banco de Occidente",
        icon: banco,
        iconBg: "#009de35c",
        date: "Nov 2014 - March 2016",
        points: [
            "Participated in the migration from the old stack to a new one creating custom interfaces over .NET, JS, and HTML for the generation of credit and debit notes handled huge money transactions.",
            "Managed infrastructure over Windows’ server 2003",
        ],
        techStack: ["JS", "HTML/CSS,", ".NET", "Oracle"],
    },
];
/*
{
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
*/

export const socialLinks = [
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/FranklynSistemas',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/franklynlm/',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];