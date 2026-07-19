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
    linkedin: "https://www.linkedin.com/in/jaibeer-dugal/",
    itch: "https://jaibeer72.itch.io",
    hireMe: "https://www.linkedin.com/in/jaibeer-dugal/",
  },

  /**
   * keyword → section cross-links shown in the summary box.
   * type: "experience" navigates the experience carousel to that entry.
   * type: "project" switches to Projects and opens the detail sheet.
   * Order matters: longer / more-specific entries must come first.
   */
  keywords: [
    { word: "Nintendo Switch", type: "experience", id: "ubisoft"   },
    { word: "Ubisoft",         type: "experience", id: "ubisoft"   },
    { word: "Vulkan",          type: "project",    id: "vulkangfx" },
    { word: "Android",         type: "experience", id: "noon"      },
    { word: "Noon",            type: "experience", id: "noon"      },
    { word: "C++",             type: "experience", id: "ubisoft"   },
    { word: "PS5",             type: "experience", id: "ubisoft"   },
    { word: "ZS",              type: "experience", id: "zs"        },
  ],

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
      shipped: [
        { name: "American Dad! Apocalypse Soon", url: "https://apps.apple.com/us/app/american-dad-apocalypse-soon/id1150563582" },
      ],
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
      shipped: [
        { name: "Just Dance 2023", url: "https://www.ubisoft.com/en-us/game/just-dance/2023" },
        { name: "Oddballers", url: "https://www.ubisoft.com/en-us/game/oddballers" },
      ],
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
   * Each has: id, name, stack, description, links (array of {label, url}),
   *           image (optional hero image URL), details (array of bullet strings)
   */
  projects: [
    {
      id: "vulkangfx",
      name: "VulkanGFX",
      stack: "C++, Vulkan, CMake, vcpkg",
      description:
        "Cross-platform modular graphics engine built from scratch on the Vulkan API. Robust CMake + vcpkg build pipeline enables native compilation on Windows, Linux, and macOS with zero-friction dependency management.",
      image: "https://raw.githubusercontent.com/jaibeer72/VulkanGFX/main/Docs/Figure_3.1_B18196.jpg",
      details: [
        "Built the full Vulkan pipeline from instance creation → surface → physical/logical device → swapchain → render pass → graphics pipeline.",
        "Supports Windows (MSVC / MinGW), Linux (Ninja/GCC) and macOS (Xcode + MoltenVK) via CMake presets.",
        "All dependencies (GLFW 3.4, GLM 1.0.2, Vulkan SDK 1.4) managed automatically through a vcpkg submodule — zero manual setup.",
        "Implements command pools, semaphores, and fences for correct GPU–CPU synchronisation across frames.",
        "CI/CD via GitHub Actions validates the build on all three platforms on every push.",
        "Architecture designed for future 2D UI system and binary-library consumption by C# frontends.",
      ],
      links: [{ label: "GitHub", url: "https://github.com/jaibeer72/VulkanGFX" }],
    },
    {
      id: "opengl",
      name: "OpenGL Renderer",
      stack: "C++, OpenGL, GLSL",
      description:
        "Custom C++/OpenGL graphics engine following SOLID design principles. Modular, decoupled rendering pipeline with extensible material-based lighting, flexible object transformations, and a cross-platform input abstraction layer.",
      details: [
        "Designed around SOLID principles — rendering, scene management, and input are fully decoupled modules.",
        "Material system supports diffuse/specular/emissive maps with per-object shader overrides.",
        "Flexible object transform hierarchy: translate, rotate, scale with local-to-world matrix composition.",
        "Cross-platform input abstraction layer handles keyboard and mouse uniformly on Windows and Linux.",
        "GLSL shaders are hot-reloadable at runtime for rapid visual iteration without rebuilding.",
        "Serves as the learning predecessor to VulkanGFX — documents the explicit API delta between GL and Vulkan.",
      ],
      links: [],
    },
    {
      id: "protean",
      name: "Protean Visualizer",
      stack: "React, Node.js, Express, USAlign, Microservices",
      description:
        "Full-stack protein visualisation suite using a microservices architecture. React front-end + Node/Express back-end integrates with USAlign to perform automated 3D protein superimposition and real-time structural analysis.",
      details: [
        "Microservices architecture separates the alignment compute service from the REST API and the React UI.",
        "Integrates USAlign — a state-of-the-art structure alignment algorithm — via a spawned child process on the Node backend.",
        "Real-time 3D protein structure rendering in the browser using a WebGL-based molecular viewer.",
        "Automated superimposition pipeline: upload two PDB files → align → visualise RMSD-annotated overlay instantly.",
        "Built as an MSc Distinction project at the University of Dundee, demonstrating full-stack bioinformatics tooling.",
      ],
      links: [],
    },
    {
      id: "netflix",
      name: "Netflix Clone",
      stack: "React, TMDB API, PostgreSQL / MongoDB",
      description:
        "Scalable streaming-service prototype integrating the TMDB API. Includes a comparative analysis of NoSQL vs. relational database paradigms to determine optimal schema strategies for recommendation engines.",
      details: [
        "React SPA with dynamic routing for browse, title detail, and search pages.",
        "Live data from The Movie Database (TMDB) API — posters, trailers, cast, and ratings.",
        "Dual database implementation: PostgreSQL (relational) vs MongoDB (document) for user watchlists and ratings.",
        "Comparative report analyses query performance and schema flexibility across both paradigms for recommendation workloads.",
      ],
      links: [{ label: "GitHub", url: "https://github.com/jaibeer72/netflix-clone-sem1" }],
    },
    {
      id: "spacebound",
      name: "SpaceBound",
      stack: "HTML, JavaScript, CSS",
      description:
        "Lightweight browser game shipped under 13 KB — a constraint-driven design exercise in efficient gameplay.",
      details: [
        "Entire game — engine, renderer, physics, and audio — fits inside 13 KB of vanilla HTML/JS/CSS.",
        "No frameworks, no build tools: a deliberate constraint to sharpen core JavaScript fundamentals.",
        "Canvas 2D renderer with a game loop running at a locked 60 fps using requestAnimationFrame.",
        "Procedurally generated asteroid field with collision detection and escalating difficulty curve.",
        "Published on itch.io — playable directly in any modern browser with zero install.",
      ],
      links: [{ label: "Play on itch.io", url: "https://jaibeer72.itch.io/spacebound" }],
    },
    {
      id: "ar-shooter",
      name: "AR Shooter Target Game",
      stack: "Unity, ARKit, C#, ShaderLab",
      description:
        "Mobile AR shooting game that uses the device gyroscope to spawn and aim at 3D targets overlaid on the real world. Built with Unity's AR Foundation and ARKit.",
      details: [
        "Gyroscope-driven aiming — tilt and rotate the phone to track floating 3D targets in AR space.",
        "Custom ShaderLab shaders for target hit-flash effects and AR occlusion masking.",
        "Procedural target spawner places objects in physical world-space using ARKit plane detection.",
        "Score system with combo multipliers and time pressure to drive replayability.",
        "5 GitHub stars — one of the more-starred repositories in the portfolio.",
      ],
      links: [{ label: "GitHub", url: "https://github.com/jaibeer72/AR-Basic-Shooter-Target-Game" }],
    },
  ],
};
