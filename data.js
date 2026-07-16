/**
 * data.js — single source of truth for the portfolio site.
 * Edit this file to update any content without touching HTML or CSS.
 */

const RESUME_DATA = {
  name: "Jaibeer Singh",
  title: "Senior Software Engineer",
  tagline: "C++ · Graphics · Backend · Games",
  summary:
    "Senior Software Engineer with 6 years shipping production code across AAA console titles, real-time graphics engines, and scalable backend infrastructure. Cut Android startup latency by 46% at Noon; brought a critical API from 3 s to 1.5 s at ZS. Memory budget management on PS5 and Nintendo Switch at Ubisoft. Custom Vulkan graphics engine built from scratch.",

  contact: {
    github: "https://github.com/jaibeer72",
    linkedin: "https://www.linkedin.com/in/jaibeer72",
  },

  skills: [
    { label: "Languages", value: "C++, C#, JavaScript, Python, GLSL, Java" },
    { label: "Game Dev", value: "Unity, Unreal Engine, Cocos Creator" },
    { label: "Backend", value: ".NET, Spring Boot, Node.js, FastAPI, REST, RPC" },
    { label: "Graphics", value: "Vulkan, OpenGL, GLSL, 3D Rendering, Shaders" },
    { label: "Frontend", value: "React.js, React Native, Angular, HTML/CSS" },
    { label: "DevOps", value: "Docker, GitHub Actions, Jenkins, TeamCity, GCP, AWS, CI/CD" },
    { label: "Databases", value: "PostgreSQL, MongoDB, MySQL, Redis" },
    { label: "VCS", value: "Git, Perforce, Mercurial" },
  ],

  education: [
    {
      degree: "MSc (with Distinction) — Advanced Computer Science",
      institution: "University of Dundee",
      period: "Sep 2022 – Nov 2023",
    },
    {
      degree: "BSc (Hons) — Interactive Media (Game Development)",
      institution: "Birmingham City University & ICAT",
      period: "Jun 2016 – Jun 2019",
    },
  ],

  certifications: ["Unity Certified Developer"],

  /**
   * Experience entries — ordered newest → oldest.
   * Each entry has:
   *   id         unique string (used as tab key)
   *   role       job title
   *   company    employer name
   *   location   city / country
   *   period     date range string
   *   tag        short label shown on the tab pill (keep ≤ 20 chars)
   *   stack      comma-separated tech highlights
   *   highlights array of bullet strings (the "cool shit I did there")
   */
  experience: [
    {
      id: "noon",
      role: "Senior Software Engineer / Game Developer",
      company: "Noon E-Commerce",
      location: "Gurgaon, India",
      period: "May 2025 – Present",
      tag: "Noon · 2025",
      stack: "Cocos Creator, React Native, FastAPI, Python, GCP, CDN",
      highlights: [
        "Delivered ad-monetised browser-based games to 800K+ users via Cocos Creator and React Native front-ends.",
        "Achieved a 46% reduction in startup latency on legacy Android devices through targeted profiling and asset optimisation.",
        "Architected scalable backend APIs with Python FastAPI and Google Cloud, enabling seamless game-infrastructure scaling.",
        "Implemented server-side asset configuration pipeline with product teams, cutting manual content updates by 20%.",
        "Optimised CDN delivery and integrated Google Cloud Storage for high-availability asset deployment.",
        "Drove a 12% overall improvement in performance metrics across the mobile game stack.",
      ],
    },
    {
      id: "zs",
      role: "Senior Software Engineer",
      company: "ZS Associates",
      location: "Noida, India",
      period: "May 2024 – May 2025",
      tag: "ZS · 2024",
      stack: ".NET, Angular, Spring Boot, AWS Lambda, ECR, SQL, Lombok",
      highlights: [
        "Designed an endpoint-integration framework for .NET backends, lifting unit-test coverage from 0% to 60%.",
        "Led an Angular front-end bug bash that resolved 10+ high-priority defects and measurably improved user satisfaction.",
        "Introduced E2E testing with WebApplicationFactory mocking and multi-config builder-pattern support.",
        "Debugged slow SQL queries to slash a critical API's response time from 3+ seconds to 1.5 seconds.",
        "Streamlined serverless deployment of Spring Boot apps via AWS Lambda + ECR, shrinking Uber JARs to meet strict size limits.",
        "Reduced boilerplate across Spring Boot backends with Lombok, dramatically improving maintainability.",
      ],
    },
    {
      id: "reliance",
      role: "Game Programmer",
      company: "Reliance Games",
      location: "Pune, India",
      period: "Feb 2024 – May 2024",
      tag: "Reliance · 2024",
      stack: "Unity, C#, .NET, Spring Boot, Git LFS, REST",
      highlights: [
        "Maintained and shipped new features for the live iOS/Android title American Dad!",
        "Enhanced client-server communication layer using C# .NET and Spring Boot.",
        "Retrofitted Git LFS so the art team could sync large assets without friction.",
        "Reduced server crashes by 15% through backend scalability hardening.",
        "Streamlined REST API and RPC implementation for efficient live-ops gameplay updates.",
      ],
    },
    {
      id: "ubisoft",
      role: "Game Programmer",
      company: "Ubisoft",
      location: "Mumbai, India",
      period: "May 2021 – Sep 2022",
      tag: "Ubisoft · 2021",
      stack: "C++, C#, Nintendo Switch SDK, PS5 SDK, Jenkins, TeamCity",
      highlights: [
        "Shipped Just Dance 2023 and Oddballers across Nintendo Switch and PlayStation 5.",
        "Managed cross-platform compliance, memory budgets, and platform certification for both titles.",
        "Optimised game memory layout, delivering a 20% performance improvement in profiled builds.",
        "Integrated multiplayer backend code and maintained front-end synchronisation across platforms.",
        "Co-designed and automated PS5 and Switch build pipelines with Jenkins and TeamCity, cutting deployment friction significantly.",
        "Mentored junior developers on coding best practices, raising the team's overall code quality.",
      ],
    },
    {
      id: "rythmos",
      role: "C++/C# Developer (Consultant)",
      company: "Rythmos",
      location: "Hyderabad, India",
      period: "Jun 2019 – May 2021",
      tag: "Rythmos · 2019",
      stack: "Unity3D, C++, C#, SRP, URP",
      highlights: [
        "Diagnosed and fixed Unity3D engine bugs for enterprise clients, keeping critical products live.",
        "Migrated graphics testing suite to Unity's Scriptable Render Pipeline (SRP), improving visual fidelity and test coverage.",
        "Built automation tools for performance and runtime testing, cutting QA cycles by 30%.",
      ],
    },
  ],

  /**
   * Projects — add as many as you like.
   * Each has: id, name, stack, description, links (array of {label, url})
   */
  projects: [
    {
      id: "vulkangfx",
      name: "VulkanGFX",
      stack: "C++, Vulkan, CMake, vcpkg",
      description:
        "Cross-platform modular graphics engine built from scratch on the Vulkan API. Robust CMake + vcpkg build pipeline enables native compilation on Windows, Linux, and macOS with zero-friction dependency management.",
      links: [{ label: "GitHub", url: "https://github.com/jaibeer72/VulkanGFX" }],
    },
    {
      id: "opengl",
      name: "OpenGL Renderer",
      stack: "C++, OpenGL, GLSL",
      description:
        "Custom C++/OpenGL graphics engine following SOLID design principles. Modular, decoupled rendering pipeline with extensible material-based lighting, flexible object transformations, and a cross-platform input abstraction layer.",
      links: [{ label: "GitHub", url: "https://github.com/jaibeer72/OpenGLRenderer" }],
    },
    {
      id: "protean",
      name: "Protean Visualizer",
      stack: "React, Node.js, Express, USAlign, Microservices",
      description:
        "Full-stack protein visualisation suite using a microservices architecture. React front-end + Node/Express back-end integrates with USAlign to perform automated 3D protein superimposition and real-time structural analysis.",
      links: [],
    },
    {
      id: "netflix",
      name: "Netflix Clone",
      stack: "React, TMDB API, PostgreSQL / MongoDB",
      description:
        "Scalable streaming-service prototype integrating the TMDB API. Includes a comparative analysis of NoSQL vs. relational database paradigms to determine optimal schema strategies for recommendation engines.",
      links: [],
    },
    {
      id: "spacebound",
      name: "SpaceBound",
      stack: "HTML, JavaScript, CSS",
      description:
        "Lightweight browser game shipped under 13 KB — a constraint-driven design exercise in efficient gameplay.",
      links: [],
    },
  ],
};
