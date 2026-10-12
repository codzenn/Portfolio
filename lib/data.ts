import type { LucideIcon } from 'lucide-react';
import {
    BadgeCheck,
    BadgeDollarSign,
    BrainCircuit,
    CheckCheck,
    Cloud,
    Code2,
    Cpu,
    Database,
    Github,
    Globe,
    ImagePlus,
    Layers3,
    Linkedin,
    Search,
    ShieldCheck,
    Sparkles,
    Video,
    WandSparkles,
} from 'lucide-react';

export type SocialLink = {
    label: string;
    href: string;
    icon: LucideIcon;
};

export type Metric = {
    value: string;
    label: string;
};

export type TechBadge = {
    label: string;
    icon: LucideIcon;
};

export type ProjectFeature = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export type EngineeringHighlight = {
    title: string;
    description: string;
    icon: LucideIcon;
};

export type SupportingProject = {
    title: string;
    subtitle: string;
    description: string;
    githubUrl: string;
    liveDemoUrl: string;
    stack: string[];
    workflow: string[];
    highlights: string[];
};

export type BlogPost = {
    title: string;
    publishedAt: string;
    readTime: string;
    href: string;
};

export type SkillCategory = {
    title: string;
    items: string[];
};

export type ExperienceItem = {
    role: string;
    company: string;
    duration: string;
    achievements: string[];
};

export const siteConfig = {
    name: 'Peeyush Kumar',
    role: 'Full-Stack Developer',
    headline:
        'Full-Stack Developer with 3+ years of experience building responsive web applications, scalable backend services, and secure database-driven systems for production environments.',
    description:
        'Portfolio of Peeyush Kumar, a Full-Stack Developer with 3+ years of experience across Next.js, React.js, TypeScript, Node.js, Spring Boot, PostgreSQL, cloud infrastructure, and AI-powered product workflows.',
    availability: 'Open to Full-Stack Developer / Backend Engineer roles',
    email: 'peeyush.buisness45@gmail.com',
    location: 'India',
    githubProfile: 'https://github.com/codzenn',
    linkedinProfile: 'https://linkedin.com/in/kpeeyush',
} as const;

export const navigationLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Project', href: '/#project' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Writing', href: '/#writing' },
    { label: 'Contact', href: '/#contact' },
];

export const socialLinks: SocialLink[] = [
    { label: 'GitHub', href: siteConfig.githubProfile, icon: Github },
    { label: 'LinkedIn', href: siteConfig.linkedinProfile, icon: Linkedin },
];

export const aboutBlurb =
    'I build modern full-stack products that combine strong frontend execution, scalable backend services, and reliable production delivery. My experience spans React.js, Next.js, TypeScript, Node.js, Spring Boot, PostgreSQL, cloud infrastructure, secure authentication flows, and AI-assisted workflows, with a focus on turning complex requirements into clean, usable product experiences.';

export const aboutMetrics: Metric[] = [
    { value: '3+', label: 'Years of full-stack experience' },
    { value: '30%+', label: 'Manual support effort reduced' },
    { value: 'Modern', label: 'Product engineering mindset' },
];

export const techBadges: TechBadge[] = [
    { label: 'React.js', icon: Sparkles },
    { label: 'Next.js', icon: Globe },
    { label: 'TypeScript', icon: Code2 },
    { label: 'Node.js', icon: Cpu },
    { label: 'PostgreSQL', icon: Database },
    { label: 'Prisma', icon: Layers3 },
    { label: 'Java', icon: Code2 },
    { label: 'Spring Boot', icon: Cpu },
    { label: 'AWS', icon: Cloud },
    { label: 'OAuth / JWT', icon: ShieldCheck },
    { label: 'Gemini AI', icon: BrainCircuit },
    { label: 'Razorpay', icon: BadgeDollarSign },
];

export const featuredProject = {
    title: 'SnapOrbitAI',
    subtitle: 'AI Media SaaS Platform',
    tagline:
        'A production-style creator workspace that unifies AI metadata, transformation pipelines, semantic search, and billing into one authenticated product.',
    intro: 'SnapOrbitAI is a full-stack AI media SaaS platform for creators, marketers, and teams. It centralizes image and video workflows — generating AI metadata, transforming media, searching assets semantically, and managing subscription-based access — into one production-ready authenticated workspace.',
    liveDemoUrl: 'https://snaporbit.in',
    githubUrl: 'https://github.com/codzenn/SnapOrbitAI',
    githubLabel: 'SnapOrbitAI',
    stack: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Clerk',
        'Cloudinary',
        'Gemini AI',
        'Razorpay',
        'Vitest',
    ],
    features: [
        {
            title: 'AI Captions & Hashtags',
            description:
                'Gemini vision generates platform-specific captions for Instagram, LinkedIn, and X plus tailored hashtag groups for publishing workflows.',
            icon: Sparkles,
        },
        {
            title: 'AI Quality Audit',
            description:
                'Evaluates composition, brightness, and blur to create a stored quality score that helps teams triage weak creative faster.',
            icon: BadgeCheck,
        },
        {
            title: 'Background Removal & Generative Fill',
            description:
                'Cloudinary-powered cleanup and image expansion workflows make production editing repeatable without leaving the platform.',
            icon: WandSparkles,
        },
        {
            title: 'Semantic Search',
            description:
                'Natural-language asset discovery uses embeddings and cosine similarity with a text-match fallback for resilient retrieval.',
            icon: Search,
        },
        {
            title: 'Batch Processing',
            description:
                'Runs repeatable workflows in bulk, exports ZIP bundles, and enforces plan-based limits across heavier operations.',
            icon: Layers3,
        },
        {
            title: 'Video Studio',
            description:
                'AI video analysis produces timestamped scene breakdowns, mood and topic detection, and video-aware captions for repurposing.',
            icon: Video,
        },
        {
            title: 'Video Transformation',
            description:
                'Compression and landscape-to-portrait conversion pipelines rely on Cloudinary to prepare media for vertical channels.',
            icon: ImagePlus,
        },
        {
            title: 'Subscription Billing',
            description:
                'Free, Pro, and Business plans run through Razorpay with signature verification and webhook-driven status sync.',
            icon: BadgeDollarSign,
        },
    ] satisfies ProjectFeature[],
    architectureFlow: [
        'Next.js UI',
        'Clerk Auth',
        'API Route Handlers',
        'Prisma / PostgreSQL',
        'Cloudinary',
        'Gemini AI',
        'Razorpay',
    ],
    engineeringHighlights: [
        {
            title: 'Server-side plan enforcement',
            description:
                'Critical limits are enforced in backend logic instead of being hidden only at the UI layer.',
            icon: ShieldCheck,
        },
        {
            title: 'Secure billing verification',
            description:
                'Webhook signature validation protects subscription state transitions and billing integrity.',
            icon: CheckCheck,
        },
        {
            title: 'Cost-aware AI caching',
            description:
                'Cached AI outputs reduce latency and spend, while paid users retain force-refresh controls.',
            icon: BrainCircuit,
        },
        {
            title: 'Vitest-backed reliability',
            description:
                'Coverage targets auth paths, feature limits, and billing verification behavior.',
            icon: BadgeCheck,
        },
    ] satisfies EngineeringHighlight[],
};

export const autoDevProject: SupportingProject = {
    title: 'AutoDev',
    subtitle: 'Repository Intelligence Platform',
    description:
        'A repository-scoped RAG workspace that lets developers ask grounded technical questions about their own GitHub codebases and review streamed answers with file-level citations.',
    githubUrl: 'https://github.com/codzenn/AutoDev',
    liveDemoUrl: 'https://frontend-production-2604.up.railway.app',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Spring Boot 4', 'Java 21', 'PostgreSQL', 'pgvector', 'Spring AI'],
    workflow: ['GitHub OAuth', 'Repository sync', 'Async indexing', 'Vector retrieval', 'Cited answers'],
    highlights: [
        'Repository ownership checks and a repo-scoped vector filter isolate every user query.',
        'Source files are chunked, embedded, and indexed asynchronously without blocking the request that starts indexing.',
        'Spring MVC streams OpenAI responses over SSE while persistent chat sessions retain citation metadata.',
    ],
};

export const blogPosts: BlogPost[] = [
    {
        title: "Understanding the Thundering Herd Problem: Flipkart's Big Billion Days Sale",
        publishedAt: 'Oct 12, 2026',
        readTime: '15 min read',
        href: 'https://theengineeringlab.hashnode.dev/thundering-herd-problem-cache-stampede',
    },
    {
        title: 'Working and Architecture of GPT',
        publishedAt: 'Sep 29, 2026',
        readTime: '3 min read',
        href: 'https://theengineeringlab.hashnode.dev/working-and-architecture-of-gpt',
    },
    {
        title: 'Machine Learning Engineer vs Applied AI Engineer: The Smart Robot Analogy',
        publishedAt: 'Sep 29, 2026',
        readTime: '2 min read',
        href: 'https://theengineeringlab.hashnode.dev/machine-learning-engineer-vs-applied-ai-engineer-the-smart-robot-analogy',
    },
];

export const skillCategories: SkillCategory[] = [
    {
        title: 'Frontend',
        items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        title: 'Backend',
        items: ['Node.js', 'REST APIs', 'Java', 'Spring Boot', 'PostgreSQL', 'Oracle SQL/PLSQL'],
    },
    {
        title: 'AI & LLM Integration',
        items: [
            'Spring AI',
            'AWS Bedrock',
            'Gemini AI',
            'MCP Server',
            'AI Chatbot',
            'Tool Execution',
        ],
    },
    {
        title: 'Payments/Infra',
        items: ['AWS', 'Docker', 'OAuth2', 'JWT', 'SAML SSO', 'Razorpay'],
    },
];

export const experienceItems: ExperienceItem[] = [
    {
        role: 'Java Web Developer',
        company: 'Aspire Software · Full-time · Remote',
        duration: 'Oct 2023 - May 2026',
        achievements: [
            'Built full-stack capabilities for a multi-tenant enterprise vehicle logistics platform used by automotive OEMs for vehicle tracking, holds, rates, invoices, EDI workflows, and reporting.',
            'Built and maintained backend services using Java, Spring Boot, Hibernate, REST APIs, reusable business logic, validation, and centralized error handling.',
            'Developed full-stack application screens and workflows using React.js, JavaScript, and Java services integrated with Oracle-backed business processes.',
            'Worked on secure application flows using OAuth2, JWT, SAML SSO, RBAC, report-level authorization, and secure API integration patterns.',
            'Supported end-to-end delivery through requirement analysis, Oracle SQL/PLSQL query work, debugging, UAT fixes, code reviews, log analysis, and production support.',
        ],
    },
    {
        role: 'Java Web Developer',
        company: 'ICL, Inc. · Full-time · Gurgaon, Haryana, India · Remote',
        duration: 'Feb 2023 - Sep 2023',
        achievements: [
            'Worked as a Java Web Developer on an enterprise vehicle logistics platform for plant, rail, truck, and dealer workflows.',
            'Developed and maintained Java-based web modules, UI screens, and backend service integrations.',
            'Supported business workflows related to vehicle tracking, holds, rates, invoices, reports, and dashboards.',
            'Wrote Oracle SQL queries and assisted in debugging application issues across Java and database layers.',
            'Collaborated with senior developers, QA, and business teams for requirement understanding, defect fixes, and UAT support.',
        ],
    },
];

export const footerLinks = [
    { label: 'About', href: '/#about' },
    { label: 'Project', href: '/#project' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Writing', href: '/#writing' },
    { label: 'Contact', href: '/#contact' },
];
