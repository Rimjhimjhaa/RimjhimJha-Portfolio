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
              <span className="text-gradient-main">Ashish Kumar Jha</span>
              <br />
              <span>Hello !!</span>
            </h1>
            <p className="text-sm md:text-base text-slate-400 max-w-md">
              Turn the switch ON to light up the lamp and unlock an interactive
              portfolio – showcasing 8+ years of expertise in Business Process
              Management, Data Analytics, and Digital Transformation across Energy
              &amp; Utilities industries.
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              <span className="px-3 py-1 rounded-full border border-slate-500/60 text-[0.7rem] uppercase tracking-[0.12em] text-slate-300 bg-white/5">
                Techno-Functional Consultant
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-500/60 text-[0.7rem] uppercase tracking-[0.12em] text-slate-300 bg-white/5">
                8+ Years Experience
              </span>
              <span className="px-3 py-1 rounded-full border border-slate-500/60 text-[0.7rem] uppercase tracking-[0.12em] text-slate-300 bg-white/5">
                Data • BPM • Energy Systems
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
                  AJ
                </span>
              </div>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold tracking-[0.12em] uppercase">
                  Ashish&nbsp;Kumar&nbsp;Jha
                </span>
                <span className="text-[0.7rem] text-slate-400">
                  Techno-Functional Consultant • Data &amp; BPM
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
                  ["Expertise", "#skills"],
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
                ["Expertise", "#skills"],
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
                  Techno-Functional Consultant • Data, BPM &amp; Energy Systems
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
                  Delivering{" "}
                  <span className="text-gradient-main">data-driven transformation</span>{" "}
                  across Energy &amp; Utilities.
                </h1>
                <p className="text-sm md:text-base text-slate-400 max-w-xl">
                  Consulting professional and Energy &amp; Utilities industry specialist
                  with 8+ years of experience across the complete Business Process
                  Management (BPM) lifecycle, digital transformation, and data-driven
                  consulting. Proven track record in delivering large-scale process
                  re-engineering, analytics platforms, and executive dashboards for
                  global energy and oil &amp; gas organizations.
                </p>

                <div className="flex flex-wrap gap-2 text-[0.8rem] text-slate-300">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(34,197,94,0.9)]" />
                    8+ Years Experience
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                    BPM • Data Analytics • AI
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-700 bg-slate-900/80">
                    Oil &amp; Gas • Energy • Utilities
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
                    href="mailto:jhakashish.16@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.85rem] tracking-[0.16em] uppercase border border-slate-400/80 bg-slate-900/90 hover:bg-slate-600/40 transition"
                  >
                    Email Me <span className="text-base">✉</span>
                  </a>
                </div>

                <div className="flex flex-wrap gap-2 text-[0.78rem] text-slate-400">
                  <span className="border border-dashed border-slate-500/80 rounded-full px-3 py-1">
                    BP Innovation Labs
                  </span>
                  <span className="border border-dashed border-slate-500/80 rounded-full px-3 py-1">
                    Digital Transformation
                  </span>
                  <span className="border border-dashed border-slate-500/80 rounded-full px-3 py-1">
                    Executive Dashboards
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
                <div className="text-sm font-semibold mb-1">Ashish Kumar Jha</div>
                <div className="text-[0.8rem] text-slate-400 mb-3">
                  Techno-Functional Consultant specializing in Energy, Utilities, and
                  Oil &amp; Gas domains with deep expertise in BPM, Data Analytics,
                  and Digital Transformation.
                </div>
                <div className="grid gap-2 text-[0.78rem] mb-3">
                  <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 items-baseline">
                    <div className="text-[0.65rem] tracking-[0.18em] uppercase text-slate-500">
                      MBA
                    </div>
                    <div>
                      <strong>PDEU, Gandhinagar</strong> – Energy &amp; Infrastructure
                    </div>
                  </div>
                  <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 items-baseline">
                    <div className="text-[0.65rem] tracking-[0.18em] uppercase text-slate-500">
                      B.Tech
                    </div>
                    <div>
                      <strong>Integral University</strong> – Computer Science &amp; Engineering
                    </div>
                  </div>
                  <div className="grid grid-cols-[auto,1fr] gap-x-3 gap-y-1 items-baseline">
                    <div className="text-[0.65rem] tracking-[0.18em] uppercase text-slate-500">
                      Location
                    </div>
                    <div>
                      <strong>Gurugram, India</strong>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5 text-[0.72rem] mb-3">
                  {[
                    "ARIS (Expert)",
                    "Power BI (Expert)",
                    "JIRA (Expert)",
                    "SQL & Python",
                    "Tableau",
                    "Azure DevOps",
                    "BPMN 2.0",
                    "Signavio",
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
                  <span>Currently working on AI-driven data insights at BP.</span>
                  <div className="flex gap-1.5">
                    <a
                      href="https://www.linkedin.com/in/ashish-kumar-jha/"
                      target="_blank"
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/90 text-xs hover:-translate-y-[2px] hover:border-slate-100/80 shadow-md transition"
                    >
                      in
                    </a>
                    <a
                      href="mailto:jhakashish.16@gmail.com"
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/90 text-xs hover:-translate-y-[2px] hover:border-slate-100/80 shadow-md transition"
                    >
                      ✉
                    </a>
                    <a
                      href="tel:+919919887811"
                      className="w-7 h-7 flex items-center justify-center rounded-full border border-slate-500/80 bg-slate-900/90 text-xs hover:-translate-y-[2px] hover:border-slate-100/80 shadow-md transition"
                    >
                      📞
                    </a>
                  </div>
                </div>
              </aside>
            </div>
          </section>

          {/* ABOUT ME */}
          <section id="about" className="py-10">
            <div className="reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-6">
              <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase mb-4">
                About Me
              </h2>
              <p className="text-[0.9rem] text-slate-300 leading-relaxed mb-4">
                I am a techno-functional consultant specializing in Energy, Utilities,
                and Oil &amp; Gas domains, combining deep industry knowledge with strong
                capabilities in process modeling, data analytics, automation, and
                solution design.
              </p>
              <p className="text-[0.9rem] text-slate-300 leading-relaxed mb-4">
                My experience spans consulting, solution architecture, agile delivery,
                and data innovation initiatives. I have led cross-functional teams,
                collaborated with senior stakeholders, and delivered measurable business
                outcomes including reduced delivery delays, improved risk posture, and
                real-time executive visibility.
              </p>
              <p className="text-[0.9rem] text-slate-300 leading-relaxed">
                Currently, I work closely with data engineering and business leadership
                teams to build integrated data models, analytics platforms, and AI-driven
                insights that enable faster, smarter decision-making.
              </p>
            </div>
          </section>

          {/* SKILLS / EXPERTISE */}
          <section id="skills" className="py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-7 reveal">
              <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase">
                Core Expertise
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                A blend of business consulting, data analytics, and industry-specific
                capabilities developed over 8+ years.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Business & Consulting",
                  items: [
                    "Business Process Modeling (BPMN 2.0)",
                    "Process Re-engineering & Digital Transformation",
                    "Design Thinking–led Consulting",
                    "Agile Scrum & Delivery Management",
                    "Solution Design & Pre-Sales Support",
                  ],
                },
                {
                  title: "Data & Analytics",
                  items: [
                    "Enterprise Data Modeling (PEM, MEM, MOM)",
                    "Advanced Data Analysis (SQL, Python)",
                    "Executive-level Metrics & KPI Frameworks",
                    "Business Intelligence & Visualization",
                    "Data Quality & Automation",
                  ],
                },
                {
                  title: "Industry Experience",
                  items: [
                    "Oil & Gas (Upstream, Midstream, Downstream)",
                    "Energy & Utilities (Gas & Electricity)",
                    "Chemicals & Natural Resources",
                    "Risk, Compliance & Governance",
                  ],
                },
                {
                  title: "Tools & Technologies",
                  items: [
                    "ARIS (Expert)",
                    "Signavio",
                    "Microsoft Visio (Expert)",
                    "Power BI (Expert)",
                    "Tableau",
                  ],
                },
                {
                  title: "Project Management",
                  items: [
                    "Azure DevOps",
                    "JIRA (Expert)",
                    "Microsoft Office Suite",
                    "Service Improvement & Automation Strategy",
                  ],
                },
                {
                  title: "Soft Skills",
                  items: [
                    "Stakeholder Management",
                    "Cross-functional Team Leadership",
                    "Client Communication & Demos",
                    "Knowledge Management",
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
                Key Projects &amp; Engagements
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                Selected work spanning data consulting, BPM transformation, and
                enterprise solutions for global energy organizations.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {/* BP Innovation Labs */}
              <article className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Data Consulting &amp; AI
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  BP Innovation Labs (DMDCT)
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  Acting as the primary business-facing and data analytics consultant
                  for BP's Data &amp; Digital teams. Designing consolidated enterprise
                  data models integrating multiple operational datasets.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – SQL, Python, Power BI, Tableau, Data Modeling
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    MethodHub • Current
                  </span>
                  <span className="inline-flex items-center gap-1">
                    Enterprise Data &amp; AI <span>🔷</span>
                  </span>
                </div>
              </article>

              {/* National Gas - Strategic Infrastructure */}
              <article className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Risk Compliance &amp; Implementation
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  Strategic Infrastructure – National Gas
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  Led the Invoicing Scrum, managing a cross-functional team of 25+
                  developers and testers. Reduced project delays by ~28% compared to
                  parallel modules through improved planning and governance.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – Power BI, JIRA, Azure DevOps, Solution Architecture
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    Wipro
                  </span>
                  <span className="inline-flex items-center gap-1">
                    40% Reporting Effort Reduced <span>📊</span>
                  </span>
                </div>
              </article>

              {/* Sustain Plus GEMINI */}
              <article className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Business Consulting
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  Sustain Plus GEMINI – National Gas
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  Conducted solution workshops, client demos, and sign-off sessions
                  ensuring 100% requirement compliance. Established knowledge management
                  practices via SDDs and FRDs, accelerating team onboarding.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – ARIS, Power BI, Documentation, Agile Scrum
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    Wipro
                  </span>
                  <span className="inline-flex items-center gap-1">
                    100% Compliance <span>✓</span>
                  </span>
                </div>
              </article>

              {/* IOCL Refinery Process Modeling */}
              <article className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  BPM &amp; Integration
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  IOCL Refinery Process Modeling (RPMS)
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  Modeled refinery operations using LP modeling and spiral planning
                  frameworks. Delivered detailed business operating models, process
                  hierarchies, KPIs, and maturity assessments for upstream and
                  downstream energy operations.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – ARIS, LP Modeling, BPMN 2.0, Process Architecture
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    Accenture
                  </span>
                  <span className="inline-flex items-center gap-1">
                    Refinery Operations <span>🏭</span>
                  </span>
                </div>
              </article>

              {/* Energy BPM CoE */}
              <article className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Center of Excellence
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  Energy BPM Center of Excellence
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  Built BPM assets in ARIS and conducted leadership-level design
                  thinking sessions. Designed proof-of-value concepts including smart
                  monitoring systems and centralized control platforms for industrial
                  operations.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – ARIS, Design Thinking, Smart Monitoring, IoT Concepts
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    Accenture
                  </span>
                  <span className="inline-flex items-center gap-1">
                    Innovation &amp; POV <span>💡</span>
                  </span>
                </div>
              </article>

              {/* Chemicals & Natural Resources CoE */}
              <article className="project-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300">
                  Industry CoE
                </div>
                <h3 className="mt-1 text-sm font-semibold">
                  Chemicals &amp; Natural Resources CoE
                </h3>
                <p className="mt-2 text-[0.82rem] text-slate-400">
                  Contributed to industry-specific BPM frameworks and process
                  optimization initiatives. Developed reusable assets and best
                  practices for chemicals and natural resources sector clients.
                </p>
                <p className="mt-2 text-[0.75rem] text-slate-100/90">
                  Tech Stack – ARIS, Process Optimization, Industry Frameworks
                </p>
                <div className="mt-3 flex items-center justify-between text-[0.78rem] text-slate-400">
                  <span className="px-2 py-1 rounded-full border border-slate-500/80 text-[0.7rem]">
                    Accenture
                  </span>
                  <span className="inline-flex items-center gap-1">
                    Reusable Assets <span>📦</span>
                  </span>
                </div>
              </article>
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-7 reveal">
              <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase">
                Professional Experience
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                8+ years of consulting experience across leading global organizations.
              </p>
            </div>

            <div className="space-y-5">
              {/* MethodHub */}
              <div className="experience-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <div className="text-sm font-semibold">MethodHub</div>
                    <div className="text-[0.82rem] text-yellow-300">
                      Business Analyst – Data Consulting &amp; AI Use-Cases
                    </div>
                  </div>
                  <div className="text-[0.78rem] text-slate-400 px-3 py-1 rounded-full border border-slate-500/80">
                    June 2025 – Present
                  </div>
                </div>
                <div className="space-y-1.5 text-[0.82rem] text-slate-300">
                  <div>▸ Acting as the primary business-facing and data analytics consultant for BP's Data &amp; Digital teams.</div>
                  <div>▸ Designing consolidated enterprise data models integrating multiple operational datasets.</div>
                  <div>▸ Performing complex data analysis using SQL and Python to generate actionable insights.</div>
                  <div>▸ Collaborating with data engineers and senior stakeholders to automate data ingestion, validation, and analytics workflows.</div>
                  <div>▸ Developing and maintaining executive dashboards using Power BI and Tableau, enabling real-time performance visibility.</div>
                </div>
              </div>

              {/* Wipro */}
              <div className="experience-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <div className="text-sm font-semibold">Wipro</div>
                    <div className="text-[0.82rem] text-yellow-300">
                      Business Consultant – Risk Compliance &amp; Implementation
                    </div>
                  </div>
                  <div className="text-[0.78rem] text-slate-400 px-3 py-1 rounded-full border border-slate-500/80">
                    March 2023 – June 2025
                  </div>
                </div>
                <div className="text-[0.78rem] text-slate-400 mb-2">
                  Projects: Strategic Infrastructure – National Gas | Sustain Plus GEMINI – National Gas
                </div>
                <div className="space-y-1.5 text-[0.82rem] text-slate-300">
                  <div>▸ Led the Invoicing Scrum, managing a cross-functional team of 25+ developers and testers.</div>
                  <div>▸ Reduced project delays by ~28% compared to parallel modules through improved planning and governance.</div>
                  <div>▸ Conducted solution workshops, client demos, and sign-off sessions ensuring 100% requirement compliance.</div>
                  <div>▸ Built real-time Power BI dashboards, reducing reporting effort by 40%.</div>
                  <div>▸ Established knowledge management practices via SDDs and FRDs, accelerating team onboarding.</div>
                </div>
              </div>

              {/* Accenture */}
              <div className="experience-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                  <div>
                    <div className="text-sm font-semibold">Accenture</div>
                    <div className="text-[0.82rem] text-yellow-300">
                      Business Consultant – BPM &amp; Integration Architecture
                    </div>
                  </div>
                  <div className="text-[0.78rem] text-slate-400 px-3 py-1 rounded-full border border-slate-500/80">
                    May 2017 – February 2023
                  </div>
                </div>
                <div className="text-[0.78rem] text-slate-400 mb-2">
                  Key Engagements: IOCL Refinery Process Modeling (RPMS) | Energy BPM CoE | Chemicals &amp; Natural Resources CoE
                </div>
                <div className="space-y-1.5 text-[0.82rem] text-slate-300">
                  <div>▸ Modeled refinery operations using LP modeling and spiral planning frameworks.</div>
                  <div>▸ Delivered detailed business operating models, process hierarchies, KPIs, and maturity assessments for upstream and downstream energy operations.</div>
                  <div>▸ Built BPM assets in ARIS and conducted leadership-level design thinking sessions.</div>
                  <div>▸ Designed proof-of-value concepts including smart monitoring systems and centralized control platforms for industrial operations.</div>
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
                Professional certifications validating expertise in business analysis,
                technology, and risk management.
              </p>
            </div>

            <div className="cert-list reveal space-y-3">
              {[
                [
                  "BCS ISEB – Certified Business Analyst",
                  "UK Professional Certification",
                  null,
                ],
                [
                  "Microsoft Certified ASP.NET 3.5 Professional",
                  "Microsoft Corporation",
                  null,
                ],
                [
                  "ISO 31000 Risk Management Expert",
                  "International Standards Organization",
                  null,
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
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      className="inline-flex items-center gap-1 text-[0.78rem] text-sky-200"
                    >
                      Open Certificate <span>↗</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* EDUCATION */}
          <section id="education" className="py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-7 reveal">
              <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase">
                Education
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                Academic foundation in management and technology.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300 mb-1">
                  MBA – Energy &amp; Infrastructure
                </div>
                <div className="text-sm font-semibold mb-1">
                  School of Petroleum Management, PDEU
                </div>
                <div className="text-[0.82rem] text-slate-400 mb-2">
                  Gandhinagar, Gujarat
                </div>
                <div className="text-[0.82rem] text-slate-300">
                  Specialization: Marketing &amp; Operations
                </div>
              </div>

              <div className="reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4">
                <div className="text-[0.7rem] tracking-[0.18em] uppercase text-yellow-300 mb-1">
                  B.Tech – Computer Science &amp; Engineering
                </div>
                <div className="text-sm font-semibold mb-1">
                  Integral University
                </div>
                <div className="text-[0.82rem] text-slate-400">
                  Lucknow, Uttar Pradesh
                </div>
              </div>
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="py-10">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 mb-7 reveal">
              <h2 className="text-sm sm:text-base tracking-[0.18em] uppercase">
                Contact
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                Let's connect to discuss consulting opportunities, data-driven
                solutions, or digital transformation initiatives.
              </p>
            </div>

            <div className="grid md:grid-cols-[1.1fr_minmax(0,1fr)] gap-5">
              {/* LEFT CARD */}
              <div className="contact-card reveal rounded-[22px] border border-slate-600/80 bg-slate-950/90 shadow-2xl p-4 space-y-2 text-[0.86rem]">
                <div className="flex items-center gap-3">
                  <div className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-400">
                    Email
                  </div>
                  <div>
                    <a
                      href="mailto:jhakashish.16@gmail.com"
                      className="border-b border-dashed border-slate-400/80"
                    >
                      jhakashish.16@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-400">
                    Phone
                  </div>
                  <div>
                    <a
                      href="tel:+919919887811"
                      className="border-b border-dashed border-slate-400/80"
                    >
                      +91-991-988-7811
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-400">
                    Location
                  </div>
                  <div>Gurugram, India</div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-[0.75rem] uppercase tracking-[0.18em] text-slate-400">
                    LinkedIn
                  </div>
                  <div>
                    <a
                      href="https://www.linkedin.com/in/ashish-kumar-jha/"
                      target="_blank"
                      className="border-b border-dashed border-slate-400/80"
                    >
                      linkedin.com/in/ashish-kumar-jha
                    </a>
                  </div>
                </div>

                <p className="text-[0.8rem] text-slate-400 mt-2">
                  I'm always open to discussing consulting engagements, data analytics
                  projects, BPM initiatives, and digital transformation opportunities.
                  Feel free to reach out via email or connect on LinkedIn.
                </p>

                <div className="inline-flex items-center gap-2 text-[0.8rem] text-slate-400 mt-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-yellow-300 to-orange-500 shadow-[0_0_12px_rgba(250,204,21,0.9)]" />
                  <span>
                    Tip: You can always revisit the lamp switch at the top to "power
                    up" this portfolio again.
                  </span>
                </div>
              </div>

              {/* RIGHT CARD — FORMSPREE CONNECTED */}
              <form
                action="https://formspree.io/f/xwvkzqzz"
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
            © <span>{year}</span> Ashish Kumar Jha. Crafted with Next.js, Tailwind CSS &amp; React.
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