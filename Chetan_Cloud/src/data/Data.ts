interface User {
    name: string
    nameWithoutSuffix: string
    role: string
    nickname: string
    ed: string
    about: string
    orgs: Organization[]
    education: Education[]
    skills: Skill[]
    projects: Project[]
    experience: Experience[]
    contact_links: ContactLink[]
    certifications?: Certification[] // <-- Add this line
}

interface Organization {
    name: string
    role: string
    logo: string
    href: string
}

interface Education {
    name: string
    href: string
    school: string
    timespan: string
}

interface Skill {
    name: string
    icon: string
    site: string
}

interface Experience {
    role: string
    timespan: string
    href: string
    external_links: ExternalLink[]
    description: string,
    tags: string[]
}

interface Project {
    role: string
    timespan: string
    href: string
    short_description: string
    external_links: ExternalLink[]
    tags: string[]
    description: string
}

interface ExternalLink {
    label: string
    url: string
}

interface ContactLink {
    title: string
    text: string
    href: string
    ctaText: string
    icon: string
}

interface Certification {
    name: string
    authority: string
    logo: string
    href: string
    date: string
    credential?: string // Optional: certificate URL or ID
}

let baseIconsURL = 'https://cdn.simpleicons.org';


export let user: User = {
    name: "Chetan S.",
    nameWithoutSuffix: "Chetan Solanki",
    role: "Cloud & DevOps Engineer | CI/CD, Automation & Beyond | If it’s repetitive, it’s scriptable.",
    nickname: "CS",
    ed: "Cloud Devops Engineer",
    about: "2+ years in AWS systems and automating deployments at scale. Transform manual workflows into self-healing infrastructure—currently managing 500+ servers across 50+ client environments while optimizing performance, security, and cost.",
    orgs: [
        {
            name: "VIP",
            role: "Cloud Devops Engineer",
            logo: "https://images.squarespace-cdn.com/content/v1/648cac8ea29e3c00fd9811ee/00b331b3-17cd-4511-9e5e-cbbb4577a0e1/VIP-logo-blue.png?format=1500w",
            href: "https://public.vtinfo.com/"
        },
        {
            name: "AWS",
            role: "Trainee Devops Engineer",
            logo: "https://th.bing.com/th/id/OIP.psHTljeUmjcPjpOqtgp0HwHaEb?w=286&h=180&c=7&r=0&o=5&pid=1.7",
            href: "https://aws.amazon.com/"
        },
        {
            name: "LTIMindtree",
            role: "Devops Intern",
            logo: "https://th.bing.com/th/id/OIP.Q-QD8zQwmwkJYZ1WWXu_tAHaBa?w=332&h=67&c=7&r=0&o=5&pid=1.7",
            href: "https://www.ltimindtree.com/"
        }
    ],
    education: [
        {
            name: "Bachelor of Engineering in Information Technology (BEIT) (9 CGPA)",
            href: "https:/vidhyanagari.org/",
            school: "Shree L.R. Tiwari College of Engineering",
            timespan: "June 2020 - May 2023"
        },
        {
            name: "Diploma in Information Technology (89%)",
            href: "https://maktabahjafariyah.org/",
            school: "Thakur polytechnic",
            timespan: "June 2018 - May 2020"
        }
    ],
    certifications: [
        {
            name: "AWS Certified Solutions Architect",
            authority: "Amazon Web Services",
            logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1753920000&v=beta&t=4KiP83VrTst7My0njbum7Q502qv9L8fQZFNMh5y7y8U",
            href: "https://www.credly.com/badges/fbfbc235-a4e4-4f8f-afa1-6e5817c90f7c/public_url",
            date: "October 2023",
        },
        {
            name: "Amazon Web Services Cloud Practitioner",
            authority: "Amazon Web Services",
            logo: "https://media.licdn.com/dms/image/v2/D4E0BAQE0fp2sCqnVLg/company-logo_100_100/company-logo_100_100/0/1738855736997/amazon_web_services_logo?e=1753920000&v=beta&t=4KiP83VrTst7My0njbum7Q502qv9L8fQZFNMh5y7y8U",
            href: "https://www.credly.com/badges/f747a345-0c10-4ab4-9873-349f1a13ca61/public_url",
            date: "July 2022"
        },
        {
            name: "Microsoft Certified: Azure Fundamentals",
            authority: "Microsoft",
            logo: "https://media.licdn.com/dms/image/v2/D560BAQH32RJQCl3dDQ/company-logo_100_100/B56ZYQ0mrGGoAU-/0/1744038948046/microsoft_logo?e=1753920000&v=beta&t=ChsEDHgJwp0H6KRiYreYON89ZaIeznxd1jkF-K3NoxU",
            href: "https://www.credly.com/badges/971b4308-dea1-4f88-9e9b-2a3d6f7f28ca",
            date: "June 2023",
        },
        {
            name: "Microsoft Certified: Azure AI Fundamentals",
            authority: "Microsoft",
            logo: "https://media.licdn.com/dms/image/v2/D560BAQH32RJQCl3dDQ/company-logo_100_100/B56ZYQ0mrGGoAU-/0/1744038948046/microsoft_logo?e=1753920000&v=beta&t=ChsEDHgJwp0H6KRiYreYON89ZaIeznxd1jkF-K3NoxU",
            href: "https://www.credly.com/badges/72d2f0dc-b46a-4456-b127-72b118b5d6db",
            date: "June 2023",
        },
        {
            name: "Microsoft Certified: Azure Data Fundamentals",
            authority: "Microsoft",
            logo: "https://media.licdn.com/dms/image/v2/D560BAQH32RJQCl3dDQ/company-logo_100_100/B56ZYQ0mrGGoAU-/0/1744038948046/microsoft_logo?e=1753920000&v=beta&t=ChsEDHgJwp0H6KRiYreYON89ZaIeznxd1jkF-K3NoxU",
            href: "https://www.credly.com/badges/6e84bf39-456c-460e-a27c-7452da5e5de2/public_url",
            date: "July 2023",
        }
        // Add more certifications as needed
    ],
  skills: [
    // Cloud & DevOps
    {
      name: "AWS",
      icon: `${baseIconsURL}/amazon`,
      site: "https://aws.amazon.com"
    },
    {
      name: "Terraform",
      icon: `${baseIconsURL}/terraform`,
      site: "https://terraform.io"
    },
    {
      name: "Kubernetes",
      icon: `${baseIconsURL}/kubernetes`,
      site: "https://kubernetes.io"
    },
    {
      name: "GitHub Actions",
      icon: `${baseIconsURL}/github`,
      site: "https://github.com/features/actions"
    },
    {
      name: "ArgoCD",
      icon: "https://argo-cd.readthedocs.io/en/stable/assets/logo.png",
      site: "https://argoproj.github.io"
    },
    {
      name: "Python",
      icon: `${baseIconsURL}/python`,
      site: "https://python.org"
    },
    {
      name: "Jenkins",
      icon: `${baseIconsURL}/jenkins`,
      site: "https://www.jenkins.io"
    },
    {
      name: "Docker",
      icon: `${baseIconsURL}/docker`,
      site: "https://www.docker.com"
    },
    {
      name: "Ansible",
      icon: `${baseIconsURL}/ansible`,
      site: "https://www.ansible.com"
    },
    {
      name: "Linux",
      icon: `${baseIconsURL}/linux`,
      site: "https://www.linux.org"
    },
    {
      name: "Jira",
      icon: `${baseIconsURL}/jira`,
      site: "https://www.atlassian.com/software/jira"
    },
    {
      name: "YAML",
      icon: `${baseIconsURL}/yaml`,
      site: "https://yaml.org"
    }
    ],
    projects: [
        {
            role: "Kepler Systems",
            href: "https://kepler.systems",
            timespan: "February 2025 - Present",
            short_description: "Building the future of AI through shared datasets, and open-source models.",
            external_links: [
                {
                    url: 'https://kepler.systems',
                    label: 'Website'
                },
                {
                    url: 'https://huggingface.co/keplersystems',
                    label: 'Hugging Face'
                },
                {
                    url: 'https://x.com/keplersystems',
                    label: 'Twitter / X'
                }
            ],
            tags: ["SvelteKit", "TailwindCSS"],
            description: "Kepler Systems is to contribute to fundamental AI research and development across various domains. Current projects within Kepler Systems include:<br> <strong>Poetry-Llama</strong>: State-of-the-Art Urdu Poetry Model: Our most recent project is Poetry-Llama, a cutting-edge LLM specifically fine-tuned for understanding and generating Urdu poetry.This 70-billion parameter model is trained on a diverse corpus of Urdu poetry and is openly available under the Llama license on Hugging Face. <br><br> <strong>Open Datasets for Urdu Poetry Research</strong>: Recognizing the importance of quality data in AI research, Kepler Systems curates and shares valuable datasets: <br> <strong>UrduShers-10k</strong>: A meticulously curated collection of 10,000 classical Urdu poetry couplets(shers) from diverse poets and eras, ensuring high quality and cultural representation.This dataset is licensed under CC BY-SA 4.0 for open use in research and creative projects. <br><strong>UrduGhazals-25k</strong>: A comprehensive dataset featuring 25,000 complete Urdu ghazals, encompassing a wide range of poets, eras, and dialects.This resource is also released under the CC BY-SA 4.0 license to promote open access and collaboration.",
        },
        {
            role: "ReVanced Manager",
            href: "https://github.com/revanced/revanced-manager",
            timespan: "July 2022 - Present",
            short_description: "patch any Dalvik Android application.",
            external_links: [
                {
                    url: 'https://github.com/revanced/revanced-patcher',
                    label: 'revanced-patcher'
                },
                {
                    url: 'https://github.com/revanced/revanced-manager',
                    label: 'revanced-manager'
                }
            ],
            tags: ["Flutter", "Dart", "Kotlin"],
            description: "The ReVanced Manager is an Android application that allows you to modify any Dalvik Android application to add, remove and/or modify existing functionality. It dissassembles the APK locally on your device, makes the required changes using our in-house <a class='relative inline-flex items-center text-sm font-medium dark:text-mocha-lavender text-latte-lavender transition duration-100 hover:scale-[1.03] hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender' href='https://github.com/revanced/revanced-patcher'>patcher library</a> and then assembles it back into an APK again. You can find it on <a class='relative inline-flex items-center text-sm font-medium dark:text-mocha-lavender text-latte-lavender transition duration-100 hover:scale-[1.03] hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender' href='https://github.com/revanced/revanced-manager'>GitHub.</a>",
        },
    ],
    experience: [
        {
    role: "Cloud DevOps Engineer · Vermont Information Processing (VIP)",
    href: "https://public.vtinfo.com/",
    timespan: "June 2023 - Present",
    external_links: [
        {
            url: 'https://public.vtinfo.com',
            label: 'Website'
        },
    ],
    description: `
    • <strong>Cloud Infrastructure Management:</strong> Managed 500+ Ubuntu EC2 instances across 50+ client environments, ensuring high availability and performance for insurance processing systems. <br><br>
    • <strong>Containerization & Migration:</strong> Spearheaded migration from Chef to Docker, orchestrating containerized services (Apache, Tomcat, MySQL, SOLR) and optimizing deployment workflows. <br><br>
    • <strong>AWS Automation & Tooling:</strong> Designed and deployed AWS resources (SQS, SNS, SES, NACLs) using Java SDK to enhance automation, scalability, and operational efficiency. <br><br>
    • <strong>Disaster Recovery & Backups:</strong> Implemented robust backup solutions and tested failover strategies to minimize downtime and ensure business continuity. <br><br>
    • <strong>Incident Management:</strong> Served in a 24/7 on-call rotation—resolving critical production issues, reducing downtime, and escalating complex cases as needed. <br><br>
    • <strong>CI/CD & IaC Expertise:</strong> Built pipelines using AWS Code* services (Pipeline, Build, Deploy) and CloudFormation (SME), while optimizing containerized workloads on ECS/EKS. <br><br>
    • <strong>Customer Advocacy:</strong> Acted as POC for AWS X-Ray escalations, providing advanced troubleshooting and architectural guidance to align solutions with AWS best practices. <br><br>
    `,
    tags: [
        'AWS', 'Docker', 'ECS/EKS', 'CI/CD', 
        'CloudFormation (SME)', 'Linux', 'Java SDK', 'Disaster Recovery'
    ],
},
        {
    role: "Trainee DevOps Engineer · AWS (Internship)",
    href: "https://aws.amazon.com/",
    timespan: "July 2022",
    external_links: [
        {
            url: 'https://www.credly.com/badges/f747a345-0c10-4ab4-9873-349f1a13ca61/public_url',
            label: 'Certificate'
        }
    ],
    description: `• Completed intensive 2-month AWS certification training program through Amazon's partnered university initiative, earning official AWS digital credentials. <br><br>
    • Gained hands-on experience with core AWS services (EC2, S3, IAM, VPC) through guided labs and real-world scenario exercises. <br><br>
    • Developed foundational DevOps skills including cloud infrastructure provisioning, security best practices, and CI/CD pipeline concepts. <br><br>
    • Successfully implemented all coursework projects including deploying scalable web applications and configuring monitoring solutions. <br><br>
    • This structured immersion into cloud technologies complemented my bachelor's degree in engineering and sparked my professional focus on DevOps.`,
    tags: [
        'AWS Fundamentals', 
        'Cloud Computing', 
        'EC2/S3', 
        'IAM/VPC',
        'CI/CD Concepts'
    ],
}
    ],
    contact_links: [
        {
            title: "Mail",
            text: "chetanss912@gmail.com", // <-- Replace with your real email
            href: "mailto:chetanss912@gmail.com",
            ctaText: "Contact",
            icon: "<svg class='h-11 w-11 text-gray-900 dark:text-gray-300' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' stroke-linecap='round' stroke-linejoin='round' /> </svg>"
        },
        {
            title: "GitHub",
            text: "Chetanssolanki", // <-- Replace with your GitHub username
            href: "https://github.com/Chetanssolanki",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-github text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "LinkedIN",
            text: "chetan-singh-solanki", // <-- Replace with your Twitter/X handle
            href: "https://www.linkedin.com/in/chetan-singh-solanki/",
            ctaText: "Connect",
            icon: "<i class='text-5xl fa-brands fa-linkedin text-gray-900 dark:text-gray-300' />"
        }
    ]

}