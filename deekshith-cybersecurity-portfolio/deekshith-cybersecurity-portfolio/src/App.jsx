import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X,
  ShieldCheck, Terminal, Network, Bug, Cloud, Code2, Fingerprint,
  ExternalLink, LockKeyhole, Radar, FileCode2, Sun, Moon, Download
} from "lucide-react";

const profile = {
  name: "Aleti Deekshith Kumar Reddy",
  shortName: "Deekshith Reddy",
  email: "YOUR_EMAIL@example.com",
  github: "https://github.com/YOUR_GITHUB",
  linkedin: "https://www.linkedin.com/in/YOUR_LINKEDIN/",
  location: "India · Open to global opportunities"
};

const nav = [
  ["About", "#about"], ["Expertise", "#expertise"], ["Projects", "#projects"],
  ["Research", "#research"], ["Journey", "#journey"], ["Contact", "#contact"]
];

const skills = [
  { title: "Application security", icon: Bug, items: ["Web application testing", "OWASP Top 10", "Burp Suite", "Vulnerability analysis"] },
  { title: "Reconnaissance", icon: Radar, items: ["Attack surface mapping", "Subdomain enumeration", "Nmap", "Amass · Subfinder · httpx"] },
  { title: "Security engineering", icon: ShieldCheck, items: ["Network security", "SIEM fundamentals", "Splunk", "Wireshark"] },
  { title: "Cloud & development", icon: Cloud, items: ["OCI networking", "Google Cloud", "Python", "JavaScript · MERN"] }
];

const projects = [
  {
    number: "01", type: "INTERNSHIP PROJECT", status: "Internship",
    title: "Online Learning Management System",
    description: "A full-stack learning platform developed during an eight-week MERN stack internship at Codec Technologies Pvt. Ltd.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
    note: "Add repository, screenshots and your exact implemented features before publishing.",
    icon: Code2
  },
  {
    number: "02", type: "SECURITY PROJECT", status: "Build in progress",
    title: "LLM-Powered Honeypot",
    description: "A proposed honeypot project exploring how conversational AI can support the observation and analysis of suspicious interactions.",
    stack: ["Python", "SSH / Paramiko", "LLM integration", "Threat analysis"],
    note: "Present as in progress until the implementation and evaluation are complete.",
    icon: Terminal
  },
  {
    number: "03", type: "SECURITY ENGINEERING", status: "Concept",
    title: "Account Security Monitor",
    description: "A project concept for monitoring security-relevant account changes across supported services and notifying users about unexpected activity.",
    stack: ["Python", "APIs", "Event monitoring", "Notifications"],
    note: "Define supported integrations, authorization model and alert logic during implementation.",
    icon: Fingerprint
  },
  {
    number: "04", type: "RESEARCH DIRECTION", status: "Exploration",
    title: "Attack Surface Discovery",
    description: "An exploration of asset discovery workflows: subdomains, exposed services, directories and overlooked application endpoints.",
    stack: ["Nmap", "Amass", "Subfinder", "httpx"],
    note: "Use only on assets you own or are explicitly authorized to assess.",
    icon: Network
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } }
};

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div className={className} variants={fadeUp} initial="hidden"
      whileInView="visible" viewport={{ once: true, amount: 0.14 }}
      transition={{ delay }}>
      {children}
    </motion.div>
  );
}

function SectionHeading({ eyebrow, title, copy }) {
  return (
    <div className="section-heading">
      <p className="eyebrow"><span className="eyebrow-dot" />{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <p className="section-copy">{copy}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [light, setLight] = useState(false);

  return (
    <div className={light ? "site light" : "site"}>
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" aria-label="Deekshith home">
          <span className="brand-mark"><ShieldCheck size={19} /></span>
          <span>DR<span className="brand-period">.</span></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <div className="nav-actions">
          <button className="icon-button theme-toggle" onClick={() => setLight(!light)} aria-label="Toggle color theme">
            {light ? <Moon size={17} /> : <Sun size={17} />}
          </button>
          <a className="nav-cta" href="#contact">Let's connect <ArrowUpRight size={15} /></a>
          <button className="icon-button mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {menuOpen && <nav className="mobile-nav">
        {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </nav>}

      <main>
        <section id="home" className="hero container">
          <div className="hero-grid">
            <div className="hero-content">
              <Reveal>
                <p className="availability"><span className="pulse" /> CYBERSECURITY · RESEARCH · ENGINEERING</p>
                <h1>Finding weaknesses.<br /><span>Building stronger</span><br />defenses.</h1>
                <p className="hero-copy">
                  I'm <strong>Deekshith Reddy</strong>, an aspiring security researcher focused on
                  web application security, vulnerability discovery and practical cybersecurity solutions.
                </p>
                <div className="hero-actions">
                  <a href="#projects" className="button button-primary">Explore my work <ArrowUpRight size={17} /></a>
                  <a href="#contact" className="button button-ghost">Get in touch <ArrowRight size={16} /></a>
                </div>
                <div className="hero-socials">
                  <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>
                  <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16} /> LinkedIn</a>
                  <span className="social-divider" />
                  <span>{profile.location}</span>
                </div>
              </Reveal>
            </div>

            <Reveal className="hero-visual" delay={0.12}>
              <div className="terminal-window">
                <div className="terminal-top">
                  <div className="terminal-dots"><i /><i /><i /></div>
                  <span>research-session — zsh</span>
                  <span className="terminal-live">● LIVE</span>
                </div>
                <div className="terminal-body">
                  <p className="terminal-muted"># security researcher profile</p>
                  <p><span className="term-green">deekshith</span>@lab:~$ whoami</p>
                  <p className="term-output">aspiring_security_researcher</p>
                  <p><span className="term-green">deekshith</span>@lab:~$ focus --list</p>
                  <p className="term-output">[+] web_application_security</p>
                  <p className="term-output">[+] vulnerability_research</p>
                  <p className="term-output">[+] cloud_security</p>
                  <p className="term-output">[+] security_engineering</p>
                  <p><span className="term-green">deekshith</span>@lab:~$ <span className="cursor" /></p>
                </div>
                <div className="terminal-footer">
                  <span><span className="footer-dot" /> SYSTEM READY</span>
                  <span>ETHICAL · METHODICAL · CURIOUS</span>
                </div>
              </div>
              <div className="visual-caption"><span>FIG 01</span> / A curious mind. A methodical process.</div>
              <div className="orbit orbit-a" /><div className="orbit orbit-b" />
            </Reveal>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section id="about" className="section container">
          <Reveal><SectionHeading eyebrow="01 / THE PERSON" title="Curiosity is my starting point." copy="I’m building the foundations to become a security researcher who can think critically, test responsibly and engineer practical defenses." /></Reveal>
          <div className="about-grid">
            <Reveal className="about-main">
              <p className="about-lead">I’m a Computer Science student specializing in Cyber Security at <span>Parul University</span>, graduating in 2027.</p>
              <p className="body-copy">My interests sit at the intersection of offensive security and security engineering. I enjoy understanding how web applications behave, exploring attack surfaces and learning how vulnerabilities can be identified and addressed responsibly.</p>
              <p className="body-copy">Alongside security, I have hands-on full-stack development exposure through a MERN stack internship. That development perspective helps me think about application architecture, implementation choices and security as part of the engineering process.</p>
              <div className="about-callout"><LockKeyhole size={18} /><p><strong>My approach</strong><br />Learn deeply. Test with authorization. Document clearly. Build with security in mind.</p></div>
            </Reveal>
            <Reveal className="facts-card" delay={0.1}>
              <div className="fact-row"><span>EDUCATION</span><strong>B.Tech · CSE (Cyber Security)</strong></div>
              <div className="fact-row"><span>UNIVERSITY</span><strong>Parul University</strong></div>
              <div className="fact-row"><span>GRADUATION</span><strong>2027</strong></div>
              <div className="fact-row"><span>INTERNSHIP</span><strong>Codec Technologies Pvt. Ltd.</strong></div>
              <div className="fact-row"><span>FOCUS</span><strong>Application & Cloud Security</strong></div>
              <div className="fact-row"><span>BASED IN</span><strong>India · Open to global roles</strong></div>
            </Reveal>
          </div>
        </section>

        <section id="expertise" className="section section-alt">
          <div className="container">
            <Reveal><SectionHeading eyebrow="02 / TECHNICAL EXPERTISE" title="Areas I’m exploring and building in." copy="A working toolkit across application security, reconnaissance, security operations, cloud and software development." /></Reveal>
            <div className="skill-grid">
              {skills.map((group, i) => {
                const Icon = group.icon;
                return <Reveal key={group.title} delay={i * 0.06}>
                  <article className="skill-card">
                    <div className="skill-icon"><Icon size={20} /></div>
                    <h3>{group.title}</h3>
                    <div className="skill-tags">{group.items.map(item => <span key={item}>{item}</span>)}</div>
                  </article>
                </Reveal>;
              })}
            </div>
            <Reveal className="toolbelt">
              <div><p className="eyebrow">TOOLS & TECHNOLOGIES</p><p className="toolbelt-copy">Tools I have explored through learning, labs and development work.</p></div>
              <div className="tool-list">
                {["Burp Suite", "Nmap", "Wireshark", "Metasploit", "Kali Linux", "Splunk", "Python", "JavaScript", "React", "Node.js", "MongoDB", "AWS / OCI / GCP"].map(t => <span key={t}>{t}</span>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="projects" className="section container">
          <Reveal><SectionHeading eyebrow="03 / SELECTED WORK" title="Projects with a purpose." copy="A transparent view of my development experience and the security projects I’m currently shaping. Project status is stated clearly." /></Reveal>
          <div className="project-list">
            {projects.map((project, i) => {
              const Icon = project.icon;
              return <Reveal key={project.number} delay={i * 0.045}>
                <article className="project-card">
                  <div className="project-number">{project.number}</div>
                  <div className="project-icon"><Icon size={22} /></div>
                  <div className="project-info">
                    <div className="project-meta"><span>{project.type}</span><b className={project.status === "Internship" ? "status status-done" : "status"}>{project.status}</b></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-stack">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
                    <p className="project-note">{project.note}</p>
                  </div>
                  <div className="project-arrow"><ArrowUpRight size={20} /></div>
                </article>
              </Reveal>;
            })}
          </div>
        </section>

        <section id="research" className="section section-alt">
          <div className="container research-grid">
            <Reveal>
              <SectionHeading eyebrow="04 / RESEARCH MINDSET" title="Understand the surface. Respect the boundary." copy="Security research requires curiosity and discipline in equal measure. I’m developing a repeatable, evidence-led approach to learning and testing." />
              <a href="#contact" className="text-link">Discuss a security opportunity <ArrowUpRight size={16} /></a>
            </Reveal>
            <Reveal className="research-panel" delay={0.1}>
              <div className="research-panel-head"><span><Radar size={16} /> RESEARCH WORKFLOW</span><span>01 — 04</span></div>
              {[
                ["01", "Map the scope", "Understand assets, boundaries and authorization."],
                ["02", "Form a hypothesis", "Identify likely trust boundaries and failure points."],
                ["03", "Validate responsibly", "Use controlled tests and preserve clear evidence."],
                ["04", "Communicate findings", "Document impact, reproduction and remediation."]
              ].map(([n, title, copy]) => <div className="workflow-row" key={n}><span>{n}</span><div><strong>{title}</strong><p>{copy}</p></div><ArrowUpRight size={15} /></div>)}
              <p className="research-footnote"><ShieldCheck size={14} /> Testing is performed only in authorized environments.</p>
            </Reveal>
          </div>
        </section>

        <section id="journey" className="section container">
          <Reveal><SectionHeading eyebrow="05 / EXPERIENCE & LEARNING" title="The foundation so far." copy="A snapshot of my academic journey, development experience and ongoing technical learning." /></Reveal>
          <div className="timeline">
            <Reveal><div className="timeline-item"><div className="timeline-marker" /><div className="timeline-date">2023 — 2027</div><div className="timeline-content"><span className="timeline-label">EDUCATION</span><h3>B.Tech, Computer Science Engineering — Cyber Security</h3><p>Parul University · Vadodara, Gujarat</p><p className="timeline-detail">Building foundations in computer science, networking and cybersecurity.</p></div></div></Reveal>
            <Reveal><div className="timeline-item"><div className="timeline-marker" /><div className="timeline-date">8 WEEKS</div><div className="timeline-content"><span className="timeline-label">INTERNSHIP</span><h3>MERN Stack Intern</h3><p>Codec Technologies Pvt. Ltd.</p><p className="timeline-detail">Worked with MongoDB, Express.js, React and Node.js on an Online Learning Management System. Add exact dates and responsibilities before publishing.</p></div></div></Reveal>
            <Reveal><div className="timeline-item"><div className="timeline-marker" /><div className="timeline-date">CERTIFICATIONS</div><div className="timeline-content"><span className="timeline-label">CLOUD & SECURITY LEARNING</span><h3>Oracle OCI Networking</h3><p>Oracle Cloud Infrastructure</p><h3 className="cert-second">Google Cloud Cybersecurity</h3><p>Google Cloud</p><p className="timeline-detail">Add credential URLs or certificate images to verify each credential.</p></div></div></Reveal>
          </div>
        </section>

        <section className="section closing-band">
          <div className="container closing-inner">
            <Reveal><p className="eyebrow"><span className="eyebrow-dot" /> CURRENTLY GROWING</p><h2>Always learning.<br /><span>Always questioning.</span></h2><p>Interested in internships, security research collaborations and entry-level opportunities where I can learn from experienced engineers and contribute with care.</p><a href="#contact" className="button button-primary">Start a conversation <ArrowUpRight size={17} /></a></Reveal>
            <div className="closing-symbol"><Fingerprint size={150} strokeWidth={0.7} /></div>
          </div>
        </section>

        <section id="contact" className="section container contact-section">
          <Reveal><SectionHeading eyebrow="06 / CONTACT" title="Have a security problem worth exploring?" copy="I’m open to meaningful conversations about cybersecurity, research, internships and early-career opportunities." /></Reveal>
          <Reveal className="contact-card">
            <div><span className="contact-label">GET IN TOUCH</span><h3>Let's build a more secure digital world.</h3><p>For opportunities, technical discussions or collaboration, reach out through one of the channels below.</p></div>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><Mail size={18} /><span><small>EMAIL</small>{profile.email}</span><ArrowUpRight size={16} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={18} /><span><small>LINKEDIN</small>Connect professionally</span><ExternalLink size={15} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /><span><small>GITHUB</small>Explore my repositories</span><ExternalLink size={15} /></a>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand" href="#home"><span className="brand-mark"><ShieldCheck size={17} /></span><span>DR<span className="brand-period">.</span></span></a>
        <p>Designed with intent. Built with curiosity.</p>
        <span>© {new Date().getFullYear()} {profile.shortName}</span>
      </footer>
    </div>
  );
}

export default App;
