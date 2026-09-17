import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowUpRight, Bot, CheckCircle2, ChevronDown, Code2, ExternalLink,
  FileCheck2, Github, Globe2, Linkedin, Mail, Menu, Moon, Play,
  ShieldCheck, Sparkles, Terminal, TestTube2, Workflow, X, Sun
} from "lucide-react";
import "./styles.css";

const skills = [
  ["React", "Development", Code2],
  ["Node.js", "Development", Terminal],
  ["Google Apps Script", "Automation", Workflow],
  ["Playwright", "QA Automation", TestTube2],
  ["Google Workspace", "Productivity", Globe2],
  ["IT Audit", "Assurance", ShieldCheck],
];

const services = [
  {
    icon: Code2,
    title: "Web Development",
    text: "Build and maintain practical, responsive web experiences and internal tools.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    text: "Turn repetitive processes into reliable automations using scripts and connected tools.",
  },
  {
    icon: TestTube2,
    title: "QA & Test Automation",
    text: "Combine manual testing with Playwright automation to catch issues early and document results clearly.",
  },
  {
    icon: ShieldCheck,
    title: "IT Audit Support",
    text: "Support audit activities with research, evidence, documentation, analysis, and process-focused thinking.",
  },
  {
    icon: Bot,
    title: "AI & Productivity",
    text: "Explore practical AI-assisted workflows that reduce manual effort and improve day-to-day operations.",
  },
  {
    icon: CheckCircle2,
    title: "Virtual Assistance",
    text: "Provide organized technical and administrative support, from research and documentation to website tasks.",
  },
];

const projects = [
  {
    number: "01",
    tag: "AUTOMATION",
    title: "Workflow Automation",
    text: "Automations designed to reduce repetitive work, improve consistency, and keep routine processes moving.",
    tools: ["Google Apps Script", "Google Workspace", "Automation"],
  },
  {
    number: "02",
    tag: "QA / TESTING",
    title: "Playwright Test Automation",
    text: "Browser-based test automation and manual QA practices focused on reliable software behavior and clear defect reporting.",
    tools: ["Playwright", "JavaScript", "Manual QA"],
  },
  {
    number: "03",
    tag: "DEVELOPMENT",
    title: "Web & Application Projects",
    text: "Practical development work using modern web technologies, with an emphasis on usable interfaces and maintainable code.",
    tools: ["React", "Node.js", "JavaScript"],
  },
];

function App() {
  const [dark, setDark] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
  }, [dark]);

  const nav = ["About", "Services", "Work", "Skills"];

  return (
    <div className="site">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="brand" href="#top" aria-label="Aerochrise home">
            <span className="brand-mark">AK</span>
            <span>AEROCHRlSE</span>
          </a>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {nav.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>{item}</a>
            ))}
            <a className="nav-cta" href="mailto:aerochrisekim28@gmail.com" onClick={() => setOpen(false)}>Let's talk <ArrowUpRight size={15}/></a>
          </div>

          <div className="nav-actions">
            <button className="icon-btn" onClick={() => setDark(!dark)} aria-label="Toggle theme">
              {dark ? <Sun size={18}/> : <Moon size={18}/>}
            </button>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={21}/> : <Menu size={21}/>}
            </button>
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero container">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse" /> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Build smarter.<br/><span>Automate better.</span></h1>
            <p className="hero-sub">
              I'm <strong>Aerochrise Kim Melendres</strong> — a developer, automation engineer,
              IT auditor, and virtual assistant focused on turning repetitive work into reliable systems.
            </p>
            <div className="hero-buttons">
              <a className="btn primary" href="#work">View my work <ArrowUpRight size={17}/></a>
              <a className="btn secondary" href="mailto:aerochrisekim28@gmail.com">Get in touch <Mail size={17}/></a>
            </div>
            <div className="hero-links">
              <a href="https://github.com/aerochrisekim28" target="_blank" rel="noreferrer"><Github size={16}/> GitHub</a>
              <a href="https://www.linkedin.com/in/aerochrise-kim-m-1b7a9118b/" target="_blank" rel="noreferrer"><Linkedin size={16}/> LinkedIn</a>
            </div>
          </div>

          <div className="hero-terminal">
            <div className="terminal-head">
              <div className="dots"><i/><i/><i/></div>
              <span>~/aerochrise</span>
              <span className="terminal-live">● live</span>
            </div>
            <div className="terminal-body">
              <p><span className="muted">$</span> whoami</p>
              <p className="accent">Aerochrise Kim Melendres</p>
              <p><span className="muted">$</span> focus --list</p>
              <p className="terminal-line"><b>01</b> software development</p>
              <p className="terminal-line"><b>02</b> workflow automation</p>
              <p className="terminal-line"><b>03</b> QA & test automation</p>
              <p className="terminal-line"><b>04</b> IT audit & operations</p>
              <p className="terminal-line"><b>05</b> virtual assistance</p>
              <p><span className="muted">$</span> status</p>
              <p className="status"><CheckCircle2 size={16}/> ready to build <span className="cursor">_</span></p>
            </div>
          </div>
        </section>

        <div className="ticker">
          <div className="ticker-inner">
            <span>DEVELOPMENT</span><b>✦</b><span>AUTOMATION</span><b>✦</b><span>QUALITY ASSURANCE</span><b>✦</b><span>IT AUDIT</span><b>✦</b><span>VIRTUAL ASSISTANCE</span><b>✦</b>
            <span>DEVELOPMENT</span><b>✦</b><span>AUTOMATION</span><b>✦</b><span>QUALITY ASSURANCE</span><b>✦</b><span>IT AUDIT</span><b>✦</b><span>VIRTUAL ASSISTANCE</span>
          </div>
        </div>

        <section id="about" className="section container split">
          <div>
            <p className="section-kicker">01 / ABOUT</p>
            <h2>A technical mindset with an <em>operations</em> perspective.</h2>
          </div>
          <div className="section-copy">
            <p>Bachelor's degree holder with professional experience across IT auditing, QA testing, website management, automation, and virtual assistance.</p>
            <p>I'm detail-oriented and analytical, with a strong interest in software development, test automation, and process improvement. I enjoy understanding how a process works, finding the friction, and building a cleaner way forward.</p>
            <div className="mini-stats">
              <div><strong>DEV</strong><span>React · Node.js</span></div>
              <div><strong>AUTO</strong><span>Apps Script · Workflows</span></div>
              <div><strong>QA</strong><span>Playwright · Manual</span></div>
            </div>
          </div>
        </section>

        <section id="services" className="section container">
          <div className="section-heading">
            <div><p className="section-kicker">02 / WHAT I DO</p><h2>Useful skills, <em>practical outcomes.</em></h2></div>
            <p>I combine technical execution with organized support to help teams work more efficiently.</p>
          </div>
          <div className="service-grid">
            {services.map(({icon: Icon, title, text}, i) => (
              <article className="service-card" key={title}>
                <span className="card-num">0{i+1}</span>
                <Icon size={25} strokeWidth={1.6}/>
                <h3>{title}</h3>
                <p>{text}</p>
                <span className="card-arrow"><ArrowUpRight size={17}/></span>
              </article>
            ))}
          </div>
        </section>

        <section id="work" className="section container work-section">
          <div className="section-heading">
            <div><p className="section-kicker">03 / SELECTED WORK</p><h2>Projects built around <em>automation.</em></h2></div>
            <a className="text-link" href="https://github.com/aerochrisekim28" target="_blank" rel="noreferrer">See GitHub <ExternalLink size={15}/></a>
          </div>
          <div className="project-list">
            {projects.map((p) => (
              <article className="project" key={p.number}>
                <div className="project-number">{p.number}</div>
                <div className="project-main">
                  <span className="project-tag">{p.tag}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <div className="tool-list">{p.tools.map(t => <span key={t}>{t}</span>)}</div>
                </div>
                <div className="project-icon"><ArrowUpRight size={25}/></div>
              </article>
            ))}
          </div>
          <div className="project-note"><Sparkles size={17}/> Replace these placeholders with public demos, screenshots, or case studies as you publish projects.</div>
        </section>

        <section id="skills" className="section container">
          <div className="section-heading">
            <div><p className="section-kicker">04 / TOOLKIT</p><h2>Tools I use to <em>get things done.</em></h2></div>
          </div>
          <div className="skill-grid">
            {skills.map(([name, cat, Icon]) => (
              <div className="skill" key={name}><Icon size={20}/><div><strong>{name}</strong><span>{cat}</span></div></div>
            ))}
          </div>
        </section>

        <section className="cta container">
          <div className="cta-inner">
            <div>
              <p className="section-kicker">LET'S BUILD</p>
              <h2>Have a repetitive task?<br/><em>Let's automate it.</em></h2>
            </div>
            <a className="btn primary" href="mailto:aerochrisekim28@gmail.com">Start a conversation <ArrowUpRight size={18}/></a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <div><span className="brand-mark small">AK</span><span>© {new Date().getFullYear()} Aerochrise Kim Melendres</span></div>
        <div className="footer-links">
          <a href="mailto:aerochrisekim28@gmail.com"><Mail size={15}/> Email</a>
          <a href="https://github.com/aerochrisekim28" target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a>
          <a href="https://www.linkedin.com/in/aerochrise-kim-m-1b7a9118b/" target="_blank" rel="noreferrer"><Linkedin size={15}/> LinkedIn</a>
        </div>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);