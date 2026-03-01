"use client";

import { useEffect, useState } from "react";

export default function HomePage() {
  const [powerOn, setPowerOn] = useState(false);
  const [theme, setTheme] = useState("dark");

  // Load theme preference
  useEffect(() => {
    if (typeof window === "undefined") return;
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    }
  }, []);

  // Apply body classes when theme or power changes
  useEffect(() => {
    if (typeof window === "undefined") return;
    const body = document.body;
    // lamp power
    if (powerOn) {
      body.classList.add("lights-on");
      body.classList.remove("lights-off");
    } else {
      body.classList.add("lights-off");
      body.classList.remove("lights-on");
    }
  }, [powerOn]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const body = document.body;
    if (theme === "light") {
      body.classList.add("light-mode");
    } else {
      body.classList.remove("light-mode");
    }
  }, [theme]);

  
  // Scroll reveal
useEffect(() => {
  if (typeof window === "undefined") return;

  const revealElements = document.querySelectorAll(".reveal");

  if (!revealElements || revealElements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach((el) => observer.observe(el));

  return () => observer.disconnect();
}, []);

  // Toggle lamp switch
  const handleTogglePower = () => {
    setPowerOn((prev) => {
      const next = !prev;
      if (!next && typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return next;
    });
  };

  // Theme toggle
  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        window.localStorage.setItem("theme", next);
      }
      return next;
    });
  };

  // Project link opener
  const openLink = (url) => {
    if (!url) return;
    if (typeof window !== "undefined") {
      window.open(url, "_blank");
    }
  };

  // Fake form submit
  const handleFakeSubmit = () => {
    const hint = document.getElementById("formHint");
    if (hint) {
      hint.textContent =
        "Thanks for the message! This is a demo – please use email or LinkedIn to contact me for real.";
    }
  };

  const year = new Date().getFullYear();

  return (
    <div>
      {/* Floating background blobs */}
      <div className="bg-orb one" />
      <div className="bg-orb two" />
      <div className="bg-orb three" />

      {/* LANDING OVERLAY */}
      <div className="landing-overlay">
        <div className="landing-inner reveal reveal-visible">
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              <span className="text-gradient-main">Rimjhim Jha</span>
              <br />
              <span>Hello !!</span>
            </h1>
            <p className="text-sm md:text-base text-slate-400 max-w-md">
              Turn the switch ON to light up the lamp and unlock an interactive
              developer portfolio – projects in Web, Machine Learning, and Cloud,
              all in one place.
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 rounded-full border border-slate-500/60 text-[0.7rem] uppercase tracking-[0.12em] text-slate-300 bg-white/5">
                B.Tech CSE • 2022–2026
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-500/60 text-[0.7rem] uppercase tracking-[0.12em] text-slate-300 bg-white/5">
                Python &amp; JavaScript
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-500/60 text-[0.7rem] uppercase tracking-[0.12em] text-slate-300 bg-white/5">
                Web • ML • Cloud
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="hint-dot" />
              <span>Flip the switch to reveal the full portfolio.</span>
            </div>
          </div>

          {/* Lamp + switch */}
          <div className="lamp-scene">
            <div className="lamp-frame">
              <div className="lamp-wire" />
              <div className="lamp-head">
                <div className="lamp-bulb" />
              </div>
              <div className="lamp-light" />
              <div className="lamp-shadow" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="text-[0.8rem] uppercase tracking-[0.18em] text-slate-400">
                Main power
              </div>
              <button
                type="button"
                aria-label="Toggle portfolio power"
                onClick={handleTogglePower}
                className="power-switch"
              >
                <div className="switch-bg" />
                <div className="switch-knob" />
              </button>
              <div className="text-xs text-slate-400">
                Status:{" "}
                <span className={powerOn ? "text-emerald-400" : ""}>
                  {powerOn ? "Online" : "Offline"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN PAGE */}
      <div className="page-shell">
        {/* HEADER */}
        <header className="sticky top-0 z-20 backdrop-blur-2xl bg-slate-900/80 border-b border-slate-700/80 transition-colors">
          <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <button
              onClick={() => {
                if (typeof window !== "undefined") {
                  const el = document.getElementById("hero");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="flex items-center gap-2 cursor-pointer"
            >
              <div className="w-9 h-9 rounded-full border-2 border-slate-100/20 bg-gradient-to-br from-orange-500 via-emerald-400 to-sky-400 flex items-center justify-center shadow-[0_0_14px_rgba(56,189,248,0.6)]">
                <span className="font-bold text-xs bg-slate-50 text-slate-900 rounded-full px-1.5 py-0.5">
                  RJ
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold tracking-[0.12em] uppercase">
                  Rimjhim&nbsp;Jha
                </span>
                <span className="text-[0.7rem] text-slate-400">
                  Developer • CSE @ SRMCEM
                </span>
              </div>
            </button>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="theme-toggle flex items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/90 w-9 h-9 text-lg shadow-md"
                aria-label="Toggle dark and light mode"
              >
                {theme === "light" ? "☀️" : "🌙"}
              </button>

              {/* Mobile nav toggle */}
              <button
                id="navToggle"
                onClick={() => {
                  document.body.classList.toggle("nav-mobile-open");
                }}
                className="nav-toggle flex md:hidden items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/90 w-9 h-9"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
              </button>
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:block">
              <ul className="flex items-center gap-4 text-[0.65rem] tracking-[0.14em] uppercase">
                {[
                  ["Home", "#hero"],
                  ["Skills", "#skills"],
                  ["Projects", "#projects"],
                  ["Experience", "#experience"],
                  ["Certifications", "#certifications"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="relative text-slate-200/90 hover:text-slate-50 transition"
                    >
                      {label}
                    </a>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      const el = document.getElementById("contact");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-3 py-1 rounded-full border border-slate-400/70 bg-gradient-to-b from-orange-500/20 to-transparent text-[0.7rem] uppercase tracking-[0.16em] shadow-lg flex items-center gap-1"
                  >
                    <span>Contact</span>
                    <span className="text-sm">✉</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* Mobile nav menu */}
          <nav className="md:hidden relative">
            <ul
              id="navMenu"
              className="absolute right-4 top-0 mt-1 flex flex-col items-start gap-2 px-3 py-2 rounded-2xl border border-slate-500/60 bg-slate-900/95 shadow-2xl origin-top-right scale-0 opacity-0 pointer-events-none transition"
            >
              {[
                ["Home", "#hero"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Certifications", "#certifications"],
              ].map(([label, href]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="relative text-slate-200/90 hover:text-slate-50 transition"
                    onClick={() => {
                      document.body.classList.remove("nav-mobile-open");
                    }}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                    document.body.classList.remove("nav-mobile-open");
                  }}
                  className="px-3 py-1 rounded-full border border-slate-400/70 bg-gradient-to-b from-orange-500/20 to-transparent text-[0.7rem] uppercase tracking-[0.16em] shadow-lg flex items-center gap-1"
                >
                  <span>Contact</span>
                  <span className="text-sm">✉</span>
                </button>
              </li>
            </ul>
          </nav>
        </header>

        {/* MAIN CONTENT */}
        <main className="max-w-5xl mx-auto px-4 pt-6 pb-16">
          {/* HERO */}
          <section id="hero" className="py-10">
            <div className="grid md:grid-cols-[1.1fr_minmax(0,1fr)] gap-8 items-center">
              <div className="hero-intro reveal space-y-4">
                <div className="uppercase tracking-[0.22em] text-[0.7rem] text-slate-400">
                  CSE Student • Developer
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                  Building{" "}
                  <span className="text-gradient-main">smart, data-driven</span>{" "}
                  experiences from idea to deployment.
                </h1>
                <p className="text-sm md:text-base text-slate-400 max-w-xl">
                  I’m a B.Tech CSE student at Shri Ramswaroop Memorial College of
                  Engineering &amp; Management (2022–2026), working across Web,
                  Machine Learning, Excel automation, and Cloud to create real,
                  usable solutions.
                </p>

                <div className="flex flex-wrap gap-2 text-[0.8rem] text-slate-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
                    B.Tech CSE • 2022–2026
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                    Python • JavaScript • SQL
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                    Web • ML • Cloud • Excel/VBA
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.85rem] tracking-[0.16em] uppercase bg-[linear-gradient(135deg,#f97316,#eab308,#22c55e)] text-slate-900 shadow-[0_16px_40px_rgba(251,191,36,0.6)] hover:scale-[1.02] hover:-translate-y-[1px] active:scale-[0.98] active:translate-y-[1px] transition"
                  >
                    View Projects <span className="text-base">↗</span>
                  </a>
                  <a
                    href="mailto:rj05jharimjhim@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.85rem] tracking-[0.16em] uppercase border border-slate-400/80 bg-slate-900/90 hover:bg-slate-600/40 transition"
                  >
                    Email Me <span className="text-base">✉</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 text-[0.78rem] text-slate-400">
                  <span className="border border-dashed border-slate-500/80 rounded-full px-3 py-1">
                    RDSO Internship
                  </span>
                  <span className="border border-dashed border-slate-500/80 rounded-full px-3 py-1">
                    IBM AI &amp; Cloud Certifications
                  </span>
                  <span className="border border-dashed border-slate-500/80 rounded-full px-3 py-1">
                    RAG &amp; LLM Projects
                  </span>
                </div>
              </div>

              {/* Hero side card */}
              <aside className="hero-card reveal relative rounded-[22px] border border-slate-500/50 bg-gradient-to-b from-slate-900/90 to-slate-950/95 shadow-2xl p-4 overflow-hidden">
                <div className="flex items-center justify-between text-[0.8rem] mb-3">
                  <span className="text-slate-400">Snapshot</span>
                  <span className="text-indigo-200 tracking-[0.18em] uppercase">
                    Profile
                  </span>
                </div>
                <div className="text-sm font-semibold mb-1">Rimjhim Jha</div>
                <div className="text-[0.8rem] text-slate-400 mb-3">
                  B.Tech – Computer Science &amp; Engineering, Shri Ramswaroop
                  Memorial College of Engineering &amp; Management
                </div>
                <div className="grid gap-2 text-[0.78rem] mb-3">
                  <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 items-baseline">
                    <div className="text-[0.65rem] tracking-[0.18em] uppercase text-slate-500">
                      Education
                    </div>
                    <div>
                      <strong>SRMCEM</strong> (2022–2026)
                    </div>
                  </div>
                  <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 items-baseline">
                    <div className="text-[0.65rem] tracking-[0.18em] uppercase text-slate-500">
                      School
                    </div>
                    <div>
                      <strong>RLB Memorial School</strong>
                      <br />
                      Class XII – 80% (2021–22) • Class X – 92% (2019–20)
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[0.72rem] mb-3">
                  {[
                    "Python",
                    "JavaScript",
                    "HTML & CSS",
                    "SQL & PostgreSQL",
                    "Tableau & Excel",
                    "AWS & Cloud",
                    "Postman",
                    "GitHub",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="border border-slate-700 bg-slate-900/90 rounded-full px-2 py-1 hover:border-slate-100/80 hover:-translate-y-[1px] shadow-md transition text-slate-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span>Currently exploring RAG Chatbots &amp; ML-powered tools.</span>
                  <div className="flex gap-1.5">
                    <a
                      href="https://www.linkedin.com/in/rimjhim-jha-5114s8/"
                      target="_blank"
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/90 text-xs hover:-translate-y-[2px] hover:border-slate-100/80 shadow-md transition"
                    >
                      in
                    </a>
                    <a
                      href="https://rimjhimjhaa.github.io/portfolio/"
                      target="_blank"
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/90 text-xs hover:-translate-y-[2px] hover:border-slate-100/80 shadow-md transition"
                    >
                      ↗
                    </a>
                    <a
                      href="mailto:rj05jharimjhim@gmail.com"
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/90 text-xs hover:-translate-y-[2px] hover:border-slate-100/80 shadow-md transition"
                    >
                      ✉
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-7 reveal">
              <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase">
                Skills
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                A mix of programming, data tools, and cloud technologies used across
                web, ML, and automation projects.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Programming Languages",
                  items: ["Python", "JavaScript"],
                },
                {
                  title: "Web Technologies",
                  items: [
                    "HTML",
                    "CSS",
                    "Streamlit (ML apps)",
                    "OpenCV integration with Web UI",
                  ],
                },
                {
                  title: "Data & Databases",
                  items: ["SQL", "PostgreSQL", "Tableau", "Excel (Advanced + VBA)"],
                },
                {
                  title: "Cloud & Tools",
                  items: ["AWS & IBM Cloud", "Postman", "Git & GitHub"],
                },
                {
                  title: "AI / ML & RAG",
                  items: [
                    "LLMs & RAG (LangChain)",
                    "Vector DB (FAISS)",
                    "GROQ & Hugging Face",
                  ],
                },
                {
                  title: "Soft Skills",
                  items: [
                    "Problem Solving",
                    "Collaboration & Communication",
                    "Quick Learning & Adaptability",
                  ],
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="skill-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4"
                >
                  <div className="text-[0.8rem] tracking-[0.18em] uppercase text-slate-400 mb-3">
                    {card.title}
                  </div>
                  <ul className="space-y-1.5 text-[0.85rem]">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.9)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-7 reveal">
              <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase">
                Projects
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                Selected work spanning web development, machine learning, RAG
                chatbots, and Excel automation.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {/* 3D Portfolio */}
              <article
                className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4 cursor-pointer"
                onClick={() => openLink("https://tech-with-rim.vercel.app/")}
              >
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Web + Microservices
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  3D  Portfolio with Interactive Projects
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  A visually engaging 3D portfolio showcasing my projects and skills, built with Three.js and React for a dynamic user experience.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – HTML, CSS, JavaScript, GitHub, Three.js, React, Vercel
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                     Website
                  </span>
                   <span className="inline-flex items-center gap-1 cursor-pointer" onClick={() => openLink("https://tech-with-rim.vercel.app/")}>
                    Open <span>↗</span>
                  </span>
                </div>
              </article>
              {/* Restaurant Reservation */}
              <article
                className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4 cursor-pointer"
                onClick={() => openLink("https://rimjhimjhaa.github.io/restrobot/")}
              >
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Web + Microservices
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  White Chili Restaurant Reservation
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  A restaurant reservation system designed for White Chili Restro with
                  a clean web interface and microservice-based backend approach.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – HTML, CSS, JavaScript, IBM Cloud, GitHub
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    End-to-End Web App
                  </span>
                   <span className="inline-flex items-center gap-1 cursor-pointer" onClick={() => openLink("https://rimjhimjhaa.github.io/restrobot/")}>
                    View Demo <span>↗</span>
                  </span>
                </div>
              </article>

              {/* RAG Chatbot */}
              <article className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  RAG Chatbot
                </div>
                <h3 className="mt-1 text-sm font-semibold">PDF Q&amp;A Bot</h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  A Retrieval-Augmented Generation chatbot that answers questions
                  from uploaded PDFs using LLMs, vector search, and a simple
                  Streamlit UI.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – LLM, LangChain, FAISS, GROQ, Hugging Face, Streamlit,
                  Google Colab
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    RAG • NLP
                  </span>
                  <span className="inline-flex items-center gap-1 cursor-pointer" onClick={() => openLink("https://pdf-chatbot-jap2c2teykcq3lphwljgud.streamlit.app/")}>
                    View Demo <span>↗</span>
                  </span>
                
                </div>
              </article>

              {/* Sign Language Translator */}
              <article className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Machine Learning
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  ASL Hand Sign Language Translator
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  Real-time ASL hand sign detection for accessibility, combining
                  image processing and ML models with a simple web interface.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – Python, OpenCV, HTML, CSS, GitHub, Google Colab
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    Computer Vision
                  </span>
                  <span className="inline-flex items-center gap-1 cursor-pointer" onClick={() => openLink("https://signdetection.netlify.app/")}>
                    View Demo <span>↗</span>
                  </span>
                </div>
              </article>

              {/* Image Forgery Analysis */}
<article
  className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4 cursor-pointer"
 
>
  <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
    Image Forgery Detection
  </div>

  <h3 className="mt-1 text-sm font-semibold">
    Image Tampering Detection
  </h3>

  <p className="mt-2 text-[0.82rem] text-slate-400">
    Image tampering detection using Python and OpenCV to identify
    inconsistencies in digital images.
  </p>

  <p className="mt-2 text-[0.75rem] text-slate-100/90">
    Tech Stack – Python, OpenCV, NumPy, Streamlit
  </p>

  <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
    <div className="flex gap-2">
      <a
        href="https://github.com/Rimjhimjhaa/image-tampering-detection"
        target="_blank"
        rel="noopener noreferrer"
        className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem] hover:border-white transition"
      >
        GitHub
      </a>

      <a
        href="https://drive.google.com/file/d/1UiDCS6JOyQZj71gy3IvSD-3lsgHTf18F/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="px-2 py-1 rounded-full border border-yellow-400/80 text-yellow-300 text-[0.7rem] hover:bg-yellow-400/10 transition"
      >
        Video Demo
      </a>
    </div>

    <a
      href="https://github.com/Rimjhimjhaa/image-tampering-detection"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 hover:text-white transition"
    >
      View Code <span>↗</span>
    </a>
  </div>
</article>
              {/* Excel Highlighter */}
              <article
                className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4 cursor-pointer"
                onClick={() =>
                  openLink("https://github.com/Rimjhimjhaa/HIGHLIGHTER")
                }
              >
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Excel Automation
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  Highlighter (Excel VBA Script)
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  Excel automation script to highlight key values, helping quickly
                  scan large data sheets and focus on critical information.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – Excel, VBA Script
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    GitHub
                  </span>
                  <a
                    href="https://github.com/Rimjhimjhaa/HIGHLIGHTER"
                    target="_blank"
                    className="inline-flex items-center gap-1"
                  >
                    View Code <span>↗</span>
                  </a>
                </div>
              </article>


              {/* Loan EMI Calculator */}
              <article
                className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4 cursor-pointer"
                onClick={() =>
                  openLink("https://github.com/Rimjhimjhaa/LOAN-EMI-CALCULATOR-")
                }
              >
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Excel Tool
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  Loan EMI Calculator
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  An Excel-based EMI calculator that helps users estimate their EMI
                  and visualize repayment plans with formulas and basic charts.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – Excel
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    GitHub
                  </span>
                  <a
                    href="https://github.com/Rimjhimjhaa/LOAN-EMI-CALCULATOR-"
                    target="_blank"
                    className="inline-flex items-center gap-1"
                  >
                    View Code <span>↗</span>
                  </a>
                </div>
              </article>

              {/* External Portfolio */}
              <article
                className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4 cursor-pointer"
                onClick={() =>
                  openLink("https://rimjhimjhaa.github.io/portfolio/")
                }
              >
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Web Portfolio
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  Previous Portfolio Website
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  Earlier version of my personal portfolio showcasing projects and
                  skills. This new portfolio builds on it with more interactivity
                  and animations.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – HTML, CSS, JavaScript, GitHub Pages
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    Live
                  </span>
                  <a
                    href="https://rimjhimjhaa.github.io/portfolio/"
                    target="_blank"
                    className="inline-flex items-center gap-1"
                  >
                    Visit Site <span>↗</span>
                  </a>
                </div>
              </article>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-7 reveal">
              <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase">
                Experience
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                Practical exposure through internship experience and hands-on
                project work.
              </p>
            </div>

            <div className="experience-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4 grid md:grid-cols-[1.1fr_minmax(0,1fr)] gap-5">
              <div>
                <div className="text-sm font-semibold mb-1">
                  Research Design &amp; Standards Organisation (RDSO) – Internship
                </div>
                <div className="text-[0.82rem] text-slate-400 mb-3">
                  RDSO • Internship • Certificate available
                </div>
                <div className="space-y-1.5 text-[0.82rem] text-slate-300">
                  <div>▸ Gained exposure to real-world engineering workflows and standards.</div>
                  <div>▸ Understood how structured data and automation can improve decision making.</div>
                  <div>▸ Improved professional communication, documentation, and teamwork skills.</div>
                </div>
                <a
                  href="https://drive.google.com/file/d/1Fm_KbQLqiXMx_b-HIKxKsmqZEVKUp6yC/view?usp=sharing"
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[0.8rem] text-sky-200 mt-3"
                >
                  View Internship Certificate <span>↗</span>
                </a>
              </div>
              <div>
                <div className="text-sm font-semibold mb-1">
                  What I’m focusing on now
                </div>
                <div className="space-y-1.5 text-[0.82rem] text-slate-300">
                  <div>▸ Building more RAG-based intelligent assistants and tools.</div>
                  <div>▸ Strengthening DSA and backend skills for scalable systems.</div>
                  <div>▸ Exploring cloud-native deployments and serverless patterns.</div>
                </div>
              </div>
            </div>
          </section>

          {/* CERTIFICATIONS */}
          <section id="certifications" className="py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-7 reveal">
              <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase">
                Certifications
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                Certified in AI, Cloud, and Web technologies with a strong focus on
                hands-on learning.
              </p>
            </div>

            <div className="cert-list reveal space-y-3">
              {[
                [
                  "Serverless Computing – IBM",
                  "IBM",
                  "https://drive.google.com/file/d/1-M5mZ-yShc8nnW8MD2dzGTLb5MNw41wV/view?usp=sharing",
                ],
                [
                  "AI – IBM",
                  "IBM",
                  "https://drive.google.com/file/d/1NNSkL8WD3Bfvm809Q-8GG8V0JoHLDnDt/view?usp=sharing",
                ],
                [
                  "Python (Data Science) – IBM",
                  "IBM",
                  "https://drive.google.com/file/d/1Z_O5SgW0-vEYn8AhYvyf-SwGo_vToV0H/view?usp=sharing",
                ],
                [
                  "HTML & CSS – IBM",
                  "IBM",
                  "https://drive.google.com/file/d/1tM27uWgvPJ2cJDT5jmr8Am1Ftntkdyen/view?usp=sharing",
                ],
                [
                  "Cloud Essentials – IBM",
                  "IBM",
                  "https://drive.google.com/file/d/1aYGsfnjGGMGWwi2EOOkZkVIOPyU3y0An/view?usp=sharing",
                ],
                [
                  "AI (LLM + RAG)",
                  "Specialization in LLM + Retrieval Augmented Generation",
                  "https://drive.google.com/file/d/1F5_RK3vdzxxM8BTPXz1hFfVVqWwD-lOa/view?usp=sharing",
                ],
              ].map(([name, org, url]) => (
                <div
                  key={name}
                  className="cert-item flex flex-col sm:flex-row sm:items-center justify-between gap-2 rounded-full border border-dashed border-slate-500/80 bg-slate-950/90 px-3 py-2"
                >
                  <div>
                    <div className="text-[0.85rem] font-medium">{name}</div>
                    <div className="text-[0.78rem] text-slate-400">{org}</div>
                  </div>
                  <a
                    href={url}
                    target="_blank"
                    className="inline-flex items-center gap-1 text-[0.78rem] text-sky-200"
                  >
                    Open Certificate <span>↗</span>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-10">
  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-7 reveal">
    <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase">
      Contact
    </h2>
    <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
      Let’s collaborate on ideas in Web, ML, RAG, Cloud, or data-driven
      solutions.
    </p>
  </div>

  <div className="grid md:grid-cols-[1.1fr_minmax(0,1fr)] gap-5">
    {/* LEFT CARD — UNCHANGED */}
    <div className="contact-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4 space-y-2 text-[0.86rem]">
      <div className="flex items-center gap-3">
        <div className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-400">
          Email
        </div>
        <div>
          <a
            href="mailto:rj05jharimjhim@gmail.com"
            className="border-b border-dashed border-slate-400/80"
          >
            rj05jharimjhim@gmail.com
          </a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-400">
          Phone
        </div>
        <div>
          <a
            href="tel:+919555667526"
            className="border-b border-dashed border-slate-400/80"
          >
            +91-9555667526
          </a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-400">
          LinkedIn
        </div>
        <div>
          <a
            href="https://www.linkedin.com/in/rimjhim-jha-5114s8/"
            target="_blank"
            className="border-b border-dashed border-slate-400/80"
          >
            linkedin.com/in/rimjhim-jha-5114s8/
          </a>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-400">
          GitHub
        </div>
        <div>
          <a
            href="https://rimjhimjhaa.github.io/portfolio/"
            target="_blank"
            className="border-b border-dashed border-slate-400/80"
          >
            Portfolio &amp; GitHub Projects
          </a>
        </div>
      </div>

      <p className="text-[0.8rem] text-slate-400 mt-2">
        Prefer a quick hello? Drop me an email or message on LinkedIn – I’m
        always open to discussing internships, projects, and collaborations.
      </p>

      <div className="inline-flex items-center gap-2 text-[0.8rem] text-slate-400 mt-2">
        <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
        <span>
          Tip: You can always revisit the lamp switch at the top to “power
          up” this portfolio again.
        </span>
      </div>
    </div>

    {/* RIGHT CARD — FORMSPREE CONNECTED */}
    <form
      action="https://formspree.io/f/mykylvgk"
      method="POST"
      className="contact-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4"
    >
      <div className="space-y-3 text-[0.85rem]">
        <div className="space-y-1">
          <label
            htmlFor="nameInput"
            className="text-[0.78rem] text-slate-400"
          >
            Your Name
          </label>
          <input
            id="nameInput"
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full rounded-full border border-slate-500/80 bg-slate-900/90 px-3 py-2 text-[0.85rem] outline-none focus:border-slate-100 focus:ring-1 focus:ring-slate-100 transition"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="emailInput"
            className="text-[0.78rem] text-slate-400"
          >
            Your Email
          </label>
          <input
            id="emailInput"
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-full border border-slate-500/80 bg-slate-900/90 px-3 py-2 text-[0.85rem] outline-none focus:border-slate-100 focus:ring-1 focus:ring-slate-100 transition"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="messageInput"
            className="text-[0.78rem] text-slate-400"
          >
            Message
          </label>
          <textarea
            id="messageInput"
            name="message"
            placeholder="Write a short message or collaboration idea..."
            className="w-full rounded-2xl border border-slate-500/80 bg-slate-900/90 px-3 py-2 text-[0.85rem] outline-none min-h-[90px] resize-y focus:border-slate-100 focus:ring-1 focus:ring-slate-100 transition"
          />
        </div>

        <div className="flex flex-col gap-1">
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.85rem] tracking-[0.16em] uppercase bg-[linear-gradient(135deg,#f97316,#eab308,#22c55e)] text-slate-900 shadow-[0_16px_40px_rgba(251,191,36,0.6)] hover:scale-[1.02] hover:-translate-y-[1px] active:scale-[0.98] active:translate-y-[1px] transition self-start"
          >
            Send Message <span className="text-base">➤</span>
          </button>

          <div className="text-[0.75rem] text-slate-400">
            Your message will be sent directly to my inbox.
          </div>
        </div>
      </div>
    </form>
  </div>
</section>
</main>


        {/* FOOTER */}
        <footer className="max-w-5xl mx-auto px-4 pb-8 pt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-indigo-900/80 text-[0.76rem] text-slate-400">
          <div>
            © <span>{year}</span> Rimjhim Jha. Crafted with Next.js, Tailwind CSS &amp; React.
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="#hero"
              className="border-b border-dashed border-slate-500/80"
            >
              Back to top ↑
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
