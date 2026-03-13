import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
];

export const personalInfo = {
    name: "Sajal Dutt Bansal",
    role: "Full Stack Developer",
    bio: "Building scalable applications with modern technologies. From frontend interfaces to robust backend systems.",
    desc: "I’m a full-stack developer who builds scalable, high-performance web applications using Next.js, React, Node.js, and PostgreSQL. I enjoy working across the stack, designing real-time APIs, microservices, and cloud deployments with Docker, Redis, Kubernetes, and AWS, while focusing on clean code and great user experiences.",
    currentlyLearning: "Currently getting hands-on with AI and machine learning to build intelligent and scalable applications.",
    email: "sajaldutt.bansal@gmail.com",
};

export const socialLinks = [
    { label: "Email", href: "mailto:sajaldutt.bansal@gmail.com", icon: Mail },
    { label: "Github", href: "https://github.com/SajalDBansal", icon: Github },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sajalduttbansal/", icon: Linkedin },
    { label: "Twitter", href: "https://x.com/SAJALDUTTBANSAL", icon: Twitter },
]

export const projects = [
    {
        id: 1,
        title: "HabitKit",
        description:
            "A modern habit tracker for building positive habits with streak tracking and progress insights.",
        image: "/project/habitkit.png",
        tech: ["Next.js", "Prisma", "Postgres", "Recharts", "NextAuth"],
        link: "https://habitkit.sajaldbansal.com",
        code: "https://github.com/SajalDBansal/habitkit",
        filename: "2026-03-08-project.html",
    }
];

export const skills = {
    frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "TailwindCSS",
        "shadcn/ui",
        "Framer Motion",
    ],
    backend: [
        "Node.js",
        "Express",
        "PostgreSQL",
        "Prisma",
        "Redis",
        "REST APIs",
        "MongoDB",
    ],
    tools: [
        "Docker",
        "Git",
        "Linux",
        "AWS",
        "Figma",
        "Vercel",
        "GitHub Actions",
        "Jest",
    ],
};

export const experience = [
    {
        id: 1,
        role: "Freelance Developer",
        company: "Self-Employed",
        duration: "Jan 2024 - Present",
        location: "Remote",
        projects: [
            {
                name: "KidsClinic",
                description: "Frontend system for managing clinic operations.",
                fullDescription:
                    "Built the frontend for a kids clinic management system with role-based dashboards for admins, doctors, staff, and patients, enabling appointment management and streamlined clinic workflows.",
                tech: ["Next.js", "React", "TailwindCSS"],
                link: "#",
            },
            {
                name: "Invento",
                description: "Inventory and finance management system for a local business.",
                fullDescription:
                    "Developed a system to manage inventory, cash flow, and creditor/debtor records, helping the business track stock, transactions, and financial data efficiently.",
                tech: ["Next.js", "Node.js", "PostgreSQL", "TailwindCSS"],
                link: "#",
            },
            {
                name: "Landing Page",
                description: "Product showcase website for a glass decor exporter.",
                fullDescription:
                    "Designed and built a modern landing page to showcase glass decorative products, improve brand presence, and enable potential buyers to connect through a contact section.",
                tech: ["Next.js", "TailwindCSS", "Framer Motion"],
                link: "#",
            },
        ],
    },
];

export const education = [
    {
        id: "Masters",
        degree: "Masters in Computer Applications",
        university: "Manipal University, Jaipur",
        year: "2023 - 2025",
        description: "Focused on software development, algorithms, and modern web technologies.",
    },
    {
        id: "Bachelors",
        degree: "Bachelors in Commerce",
        university: "Delhi University",
        year: "2019 - 2023",
        description: "Studied accounting, economics, and core business fundamentals.",
    },
];

export const certificates = [
    {
        name: "Full Stack Developer - 100xDevs",
        description: "Comprehensive full-stack web development program.",
        fullDescription:
            "Completed an intensive full-stack development program covering modern web technologies including frontend, backend, databases, and deployment. Built multiple projects using Next.js, Node.js, and PostgreSQL while learning scalable architecture, APIs, and authentication systems.",
        tech: ["Next.js", "React", "Node.js", "PostgreSQL", "Docker"],
        link: "#",
    },
    {
        name: "Data Structures & Algorithms in Java - ApnaCollege",
        description: "Strong foundation in data structures and algorithms.",
        fullDescription:
            "Learned core computer science concepts including arrays, linked lists, stacks, queues, trees, graphs, recursion, dynamic programming, and algorithm optimization using Java. Focused on problem solving and improving time and space complexity.",
        tech: ["Java", "DSA", "Algorithms", "Problem Solving"],
        link: "#",
    },
    {
        name: "Certificate Of Computer Concepts - NIELIT",
        description: "Fundamental computer and digital literacy certification.",
        fullDescription:
            "Covered essential computer concepts including operating systems, basic programming concepts, internet usage, digital communication, word processing, spreadsheets, and presentation tools. Focused on building foundational computer literacy and digital skills.",
        tech: ["Computer Fundamentals", "MS Office", "Internet", "Digital Literacy"],
        link: "#",
    },
];

export const blogPosts = [
    {
        title: "Building Scalable Full Stack Apps with Next.js",
        excerpt:
            "Learn how to structure modern full stack applications using Next.js, APIs, and databases while keeping performance and scalability in mind.",
        image:
            "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800",
        filename: "2026-01-10-nextjs-fullstack.pdf",
    },
    {
        title: "Designing REST & Real-Time APIs",
        excerpt:
            "A practical guide to building reliable REST and WebSocket APIs with Node.js for real-time applications like chat, dashboards, and trading systems.",
        image:
            "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
        filename: "2026-01-15-rest-realtime-apis.pdf",
    },
    {
        title: "Optimizing Web App Performance",
        excerpt:
            "Techniques to make your web apps faster using caching, database indexing, code splitting, and server-side rendering.",
        image:
            "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=800",
        filename: "2026-01-20-performance-optimization.pdf",
    },
    {
        title: "Microservices vs Monolith for Startups",
        excerpt:
            "Understanding when to use a monolithic architecture and when microservices make sense for scaling applications.",
        image:
            "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
        filename: "2026-01-25-microservices-vs-monolith.pdf",
    },
    {
        title: "Authentication & Security in Modern Web Apps",
        excerpt:
            "Implement secure authentication using JWT, OAuth, and best practices to protect APIs and user data.",
        image:
            "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=800",
        filename: "2026-01-30-authentication-security.pdf",
    },
];