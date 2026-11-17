/**
 * Vaishnav Byju - Cybersecurity Portfolio Data Store
 * ===================================================
 * This file centralizes all portfolio content, certificates, projects, and experiences.
 * Whenever you want to add a new project, certificate, or internship, simply add it to
 * the corresponding list below without needing to edit complex HTML structures!
 */

const PORTFOLIO_DATA = {
  profile: {
    name: "Vaishnav Byju",
    role: "Cybersecurity Analyst",
    title: "Cybersecurity Analyst & Security Researcher",
    tagline: "Securing Digital Environments Through Continuous Learning, Hands-On Defense & Practical Research.",
    bioShort: "Cybersecurity Analyst and BCA Scholar at Marian College Kuttikkanam (9.76 SCPA) specializing in Vulnerability Assessment (VAPT), Network Defense, Cloud & DevSecOps Hardening, and IAM Architecture.",
    bioFull: [
      "I am an aspiring Cybersecurity Analyst and researcher driven by proactive defense, technical rigor, and hands-on security experimentation. Currently pursuing my Bachelor of Computer Applications at Marian College Kuttikkanam (Autonomous), I maintain an outstanding 9.76 SCPA and have been consecutively honored with the prestigious Marian Golden Band Award.",
      "My practical experience includes specialized internships with IPSR Solutions Ltd (focusing on AI-Integrated Cloud, DevOps, and Cybersecurity), cybersecurity research at Intrainz Innovation, and corporate job simulations with Deloitte Cyber and Tata IAM. I actively analyze real-world vulnerabilities, audit cloud configurations, and automate security benchmarks.",
      "Beyond technical defense, I am an active CTF competitor, hackathon winner (1st Place in DEXTRA 2K26), open-source contributor, and community volunteer with Mozilla Responsible Computing Challenge. I believe security is an enabler of trust, digital resilience, and innovation."
    ],
    contact: {
      email: "vaishnavbyju444@gmail.com",
      phone: "+91 9746060388",
      location: "Kerala, India",
      linkedin: "https://www.linkedin.com/in/vaishnav-byju/",
      github: "https://github.com/vaishnav-byju",
      resumePdf: "assets/docs/Vaishnav_Byju_Resume.pdf"
    },
    metrics: {
      cgpa: "9.76",
      cgpaLabel: "SCPA / Academic Distinction (Golden Band Award)",
      internshipHours: "240+",
      internshipLabel: "Practical Cloud & Security Internship Hours",
      competitionsCount: "10+",
      competitionsLabel: "Hackathons & CTF Competitions",
      certificationsCount: "15+",
      certificationsLabel: "Industry Certifications & Badges"
    }
  },

  skills: [
    {
      id: "01",
      title: "Vulnerability Assessment & Ethical Hacking",
      description: "Identification and exploitation analysis of system and web vulnerabilities following OWASP Top 10 standards.",
      tags: ["OWASP Top 10", "Ethical Hacking", "Burp Suite", "Nmap", "Vulnerability Scanning", "Bug Hunting"]
    },
    {
      id: "02",
      title: "Network Security & Protocol Inspection",
      description: "Deep packet analysis, anomaly detection, network segmentation, and TCP/IP protocol inspection.",
      tags: ["Wireshark", "Packet Analysis", "TCP/IP & OSI", "Linux Hardening", "Cisco Packet Tracer"]
    },
    {
      id: "03",
      title: "Cloud Security & DevSecOps",
      description: "Securing cloud workloads, automating compliance policies, and hardening CI/CD deployment pipelines.",
      tags: ["AWS Security", "Azure Infrastructure", "Ansible Automation", "Docker Containers", "CI/CD Hardening"]
    },
    {
      id: "04",
      title: "Identity & Access Management (IAM)",
      description: "Designing least-privilege access models, role-based access control (RBAC), and enterprise credential governance.",
      tags: ["RBAC", "Access Governance", "Policy Hardening", "Enterprise IAM Simulations"]
    },
    {
      id: "05",
      title: "Secure Web & Application Engineering",
      description: "Developing resilient multi-tier web applications with secure session handling, sanitization, and defense-in-depth.",
      tags: ["MERN Architecture", "Python / Flask", "JWT Authentication", "Payment Webhooks", "XSS / CSRF Defense"]
    },
    {
      id: "06",
      title: "IoT & Emerging Threat Research",
      description: "Assessing endpoint surfaces, lightweight protocols, and firmware defense mechanisms in networked environments.",
      tags: ["Endpoint Security", "IoT Protocols", "Threat Modeling", "Surface Minimization"]
    }
  ],

  projects: [
    {
      id: "network-sim-lab",
      title: "NetworkSimLab: Protocol Analysis & Defense",
      category: "Network Security",
      tags: ["Wireshark", "TCP/IP", "OSI Model", "Packet Forensics"],
      subtitle: "OSI Model, TCP/IP & Wireshark Packet Inspection Lab",
      description: "A comprehensive network security simulation and forensic packet analysis lab inspecting TCP handshakes, ICMP anomalies, and application layer protocols using Wireshark to establish secure traffic baselines.",
      github: "https://github.com/vaishnav-byju/NetworkSimLab-Vaishnav_Byju",
      image: "assets/images/projects/network-sim-lab.jpg",
      outcome: "Identified reconnaissance traffic patterns and documented remediation strategies for unencrypted protocol exposure."
    },
    {
      id: "cloud-devsecops",
      title: "Cloud DevSecOps & Server Hardening",
      category: "Cloud & DevSecOps",
      tags: ["AWS", "Azure", "Ansible", "Docker", "Linux"],
      subtitle: "Automated CI/CD Security, Server Hardening & Infrastructure Audit",
      description: "Automated infrastructure provisioning and security baseline enforcement across Linux environments using Ansible playbooks, Docker container isolation, and AWS VPC security groups.",
      github: "https://github.com/vaishnav-byju/python-todo-docker",
      image: "assets/images/projects/cloud-devops-security.jpg",
      outcome: "Streamlined server hardening, minimized unnecessary service ports, and secured continuous delivery workflows."
    },
    {
      id: "fitmart-platform",
      title: "FitMart: Resilient Full-Stack Commerce",
      category: "Full-Stack Security",
      tags: ["MERN Stack", "JWT Auth", "RBAC", "Razorpay"],
      subtitle: "Full-Stack Platform with Role-Based Access & Tamper-Proof Payments",
      description: "Engineered a production-ready MERN platform with cryptographic signature verification for Razorpay payments, protected JWT token lifecycles, and role-based administrative dashboards.",
      github: "https://github.com/vaishnav-byju/FitMart",
      image: "assets/images/projects/fitmart-security.jpg",
      outcome: "Protected user payment streams against replay attacks and implemented strict schema validations to thwart injection vectors."
    },
    {
      id: "encryptors",
      title: "Encryptors: Interactive Cryptography",
      category: "Cryptography & Education",
      tags: ["TypeScript", "Ciphers", "Symmetric", "Asymmetric"],
      subtitle: "Interactive Cryptographic Mechanics & Security Education Suite",
      description: "Interactive visual cryptography application designed to teach complex encryption algorithms, hashing mechanics, and public-key infrastructure concepts through hands-on experimentation.",
      github: "https://github.com/vaishnav-byju/Encryptors",
      image: "assets/images/projects/encryptors-crypto.jpg",
      outcome: "Bridged theoretical cryptographic fundamentals with interactive UI visualizations for educators and students."
    },
    {
      id: "reliefx",
      title: "ReliefX: Disaster Relief Platform",
      category: "Cloud Architecture",
      tags: ["Python / Flask", "Docker", "PostgreSQL", "AWS ALB"],
      subtitle: "Resilient Emergency Response & Multi-Tier Cloud Deployment",
      description: "High-availability coordination platform designed to withstand network congestion and server outages during emergency scenarios, deployed with custom AWS VPC routing and load balancing.",
      github: "https://github.com/vaishnav-byju/disaster-relief-platform",
      image: "assets/images/projects/disaster-relief.jpg",
      outcome: "Ensured disaster request delivery with database fault-tolerance and secure API endpoints."
    }
  ],

  internships: [
    {
      role: "AI-Integrated Cloud, DevOps & Cybersecurity Intern",
      company: "IPSR Solutions Ltd",
      duration: "Apr 2026 – May 2026 (8 Weeks / 240 Hrs)",
      location: "Kottayam / Kochi, Kerala",
      highlights: [
        "Administered and hardened Linux enterprise servers, configuring firewall rules and security auditing.",
        "Architected cloud infrastructure on AWS and Azure with hardened security groups and VPC configurations.",
        "Automated deployment baselines and configuration management using Ansible playbooks.",
        "Executed vulnerability assessments and security benchmarking on containerized services."
      ],
      certificate: "assets/images/certificates/ipsr-cloud-devops-cybersecurity.jpg"
    },
    {
      role: "Cybersecurity Analyst Job Simulation",
      company: "Tata (via Forage)",
      duration: "June 2026",
      location: "Virtual / Industry Simulation",
      highlights: [
        "Assessed enterprise Identity and Access Management (IAM) strategies and access control policies.",
        "Crafted customized IAM architectures enforcing principle of least privilege.",
        "Evaluated enterprise platform integration risks and credential management hygiene."
      ],
      certificate: "assets/images/certificates/tata-cybersecurity-analyst.jpg"
    },
    {
      role: "Cyber Job Simulation",
      company: "Deloitte Australia (via Forage)",
      duration: "June 2026",
      location: "Virtual / Industry Simulation",
      highlights: [
        "Analyzed threat vectors, reconnaissance footprints, and security posture deficiencies.",
        "Delivered actionable remediation roadmaps aligned with enterprise risk frameworks."
      ],
      certificate: "assets/images/certificates/deloitte-cyber-simulation.jpg"
    },
    {
      role: "Cybersecurity Intern",
      company: "Intrainz Innovation",
      duration: "Sep 2024 – Nov 2024 (2 Months)",
      location: "Virtual",
      highlights: [
        "Studied core ethical hacking methodologies, footprinting, and reconnaissance techniques.",
        "Performed vulnerability scanning on local test environments and documented threat indicators."
      ],
      certificate: "assets/images/certificates/intrainz-cybersecurity.jpg"
    },
    {
      role: "Data Science & AI Summer Intern",
      company: "IPSR Solutions Ltd",
      duration: "Jun 2026 – Jul 2026",
      location: "Kottayam, Kerala",
      highlights: [
        "Built RAG-based AI chatbots utilizing vector databases and automated retrieval pipelines.",
        "Engineered automated preprocessing pipelines for unstructured data repositories."
      ],
      certificate: "assets/images/certificates/ipsr-datascience-ai.jpg"
    }
  ],

  accolades: [
    {
      title: "1st Place Winner — DEXTRA 2K26 Hackathon",
      organization: "Rajagiri College (RCMAS), Kakkanad, Kochi",
      date: "February 2026",
      badge: "Hackathon Champion",
      quote: "Awarded 1st Place in the competitive 6-hour Inter-Collegiate Hackathon, recognized for rapid prototyping, robust system architecture, and disciplined execution.",
      certificate: "assets/images/certificates/dextra-1st-place.jpg"
    },
    {
      title: "Marian Golden Band Award (A+ Grade — 9.76 SCPA)",
      organization: "Marian College Kuttikkanam (Autonomous)",
      date: "2024 – 2026",
      badge: "Academic Distinction",
      quote: "Placed consistently in the Marian Golden Band Award list for outstanding academic performance across BCA semesters, maintaining a 9.76 SCPA.",
      certificate: "assets/images/certificates/marian-golden-band-award.jpg"
    },
    {
      title: "5th Place — KRUU GRASP 2026 Hackathon",
      organization: "Powered by ASME India",
      date: "2026",
      badge: "Grassroots Innovation",
      quote: "Recognized for engaging with real-world grassroots challenges with thoughtfulness, discipline, and creative problem-solving.",
      certificate: "assets/images/certificates/kruu-grasp-5th-place.jpg"
    },
    {
      title: "Professional Internship Endorsement",
      organization: "Dr. Sijo Thomas — Director & CTO, IPSR Solutions Ltd",
      date: "May 2026",
      badge: "Industry Recommendation",
      quote: "Demonstrated diligence, sincerity, and commitment across Linux server administration, AWS/Azure cloud infrastructure, CI/CD pipelines, and security hardening.",
      certificate: "assets/images/certificates/ipsr-cloud-devops-cybersecurity.jpg"
    }
  ],

  certificatesList: [
    {
      title: "1st Place — DEXTRA 2K26 Hackathon",
      category: "competition",
      issuer: "Rajagiri College of Management & Applied Sciences",
      image: "assets/images/certificates/dextra-1st-place.jpg"
    },
    {
      title: "DEXTRA 2K26 CTF Challenge",
      category: "competition",
      issuer: "Information Security Research Association (ISRA)",
      image: "assets/images/certificates/dextra-ctf-challenge.jpg"
    },
    {
      title: "KRUU GRASP 2026 — 5th Place Citation",
      category: "competition",
      issuer: "ASME India & KRUU",
      image: "assets/images/certificates/kruu-grasp-5th-place.jpg"
    },
    {
      title: "Smart India Hackathon (SIH 2026) Selection",
      category: "competition",
      issuer: "Ministry of Education Innovation Cell, Govt. of India",
      image: "assets/images/certificates/sih-2026.png"
    },
    {
      title: "Cloud, DevOps & Cybersecurity Internship",
      category: "internship",
      issuer: "IPSR Solutions Ltd (240 Hrs)",
      image: "assets/images/certificates/ipsr-cloud-devops-cybersecurity.jpg"
    },
    {
      title: "Tata Cybersecurity Analyst Simulation",
      category: "internship",
      issuer: "Tata / Forage",
      image: "assets/images/certificates/tata-cybersecurity-analyst.jpg"
    },
    {
      title: "Deloitte Cyber Job Simulation",
      category: "internship",
      issuer: "Deloitte Australia / Forage",
      image: "assets/images/certificates/deloitte-cyber-simulation.jpg"
    },
    {
      title: "Intrainz Cyber Security Internship",
      category: "internship",
      issuer: "Intrainz Innovation",
      image: "assets/images/certificates/intrainz-cybersecurity.jpg"
    },
    {
      title: "Marian Golden Band Award (9.76 SCPA)",
      category: "academic",
      issuer: "Marian College Kuttikkanam (Autonomous)",
      image: "assets/images/certificates/marian-golden-band-award.jpg"
    },
    {
      title: "Mozilla RCC Volunteer & Contributor",
      category: "leadership",
      issuer: "Responsible Computing Challenge Mozilla",
      image: "assets/images/certificates/mozilla-rcc-volunteer.jpg"
    },
    {
      title: "Automate IT with Ansible",
      category: "course",
      issuer: "Red Hat / Automation Training",
      image: "assets/images/certificates/ansible-automation.jpg"
    },
    {
      title: "Building Enterprise Agentic Apps (Watsonx)",
      category: "course",
      issuer: "ICT Academy of Kerala & IBM Software",
      image: "assets/images/certificates/ibm-watsonx-agentic-apps.jpg"
    },
    {
      title: "ICSET 9th Edition Conclave",
      category: "course",
      issuer: "ICT Academy of Kerala",
      image: "assets/images/certificates/icset-9th-edition.jpg"
    },
    {
      title: "NPTEL Java Certification (91% Elite)",
      category: "course",
      issuer: "NPTEL / IIT",
      image: "assets/images/certificates/nptel-java-elite.jpg"
    },
    {
      title: "CampusCrew 100K Milestone Honor",
      category: "leadership",
      issuer: "CampusCrew Global Student Community",
      image: "assets/images/certificates/campuscrew-milestone.jpg"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
