import { useEffect, useState } from 'react';

const portfolio = {
  name: 'Shivendra Pratap Singh',
  role: 'Web Developer',
  location: 'Lucknow, Uttar Pradesh',
  headline: 'I develop clean websites that help businesses move faster online.',
  intro:
    'A Computer Science B.Tech student focused on solving website-related problems, learning through real projects, and preparing for a strong corporate engineering environment.',
  about:
    'I am Shivendra Pratap Singh, currently pursuing a Bachelor of Technology in Computer Science. I am looking forward to joining a corporate environment, learning from real challenges, and building websites that are useful, fast, and easy to understand.',
  sourceSite: 'https://tech-shivendra.github.io/portfolio/',
  contact: {
    linkedin:
      'https://www.linkedin.com/in/shivendra-pratap-singh-998b772a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    email: 'mailto:techshivendraa@gmail.com',
    github: 'https://github.com/tech-shivendra',
    instagram: 'https://www.instagram.com/shivendra.exe?igsh=MTc2ajZlN2JjbTZhNQ=='
  },
  codingProfiles: {
    github: {
      label: 'GitHub',
      handle: 'tech-shivendra',
      href: 'https://github.com/tech-shivendra',
      detail: 'Frontend projects, portfolio builds, and live GitHub Pages work.'
    },
    leetcode: {
      label: 'LeetCode',
      handle: 'tech-shivendraa',
      href: 'https://leetcode.com/u/tech-shivendraa/',
      detail: 'Problem solving practice across DSA topics and contest preparation.'
    },
    codeforces: {
      label: 'Codeforces',
      handle: 'techshivendra',
      href: 'https://codeforces.com/profile/techshivendra',
      detail: 'Competitive programming profile with rated contest history.'
    }
  }
};

const navItems = ['Home', 'Projects', 'Coding', 'About', 'Contact'];

const stats = [
  ['02', 'Featured projects'],
  ['B.Tech', 'Computer Science'],
  ['03', 'Coding profiles']
];

const projects = [
  {
    title: 'Travel Planner',
    eyebrow: 'Project 01',
    signal: 'Immersive destination browsing',
    description:
      'A vivid travel website with destination sections, tour highlights, gallery moments, and a polished hero experience.',
    tags: ['Travel UI', 'Hero design', 'Gallery'],
    href: 'https://tech-shivendra.github.io/Travel-Planner/'
  },
  {
    title: 'E-Cell Startup Hub',
    eyebrow: 'Project 02',
    signal: 'Student startup storytelling',
    description:
      'A student entrepreneurship website for E-Cell PW IOI, built around a bold welcome section and startup-focused messaging.',
    tags: ['Startup site', 'Campus brand', 'Landing page'],
    href: 'https://tech-shivendra.github.io/e-cell/'
  }
];

const focusAreas = [
  'Clean responsive pages',
  'Website problem solving',
  'Business-focused web design',
  'Learning from real challenges'
];

const motionSkills = [
  'Responsive layouts',
  'Landing pages',
  'E-commerce UI',
  'GitHub Pages',
  'Interaction polish',
  'Frontend practice'
];

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setScrollProgress(Math.min(progress, 1));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  const parallaxOffset = Math.round(scrollProgress * 140);

  return (
    <main className="site-shell">
      <ScrollProgress progress={scrollProgress} />
      <Header />
      <section className="hero section" id="home" aria-label="Home">
        <div
          className="hero__backdrop"
          style={{ '--scroll-parallax': `${parallaxOffset * 0.18}` }}
          aria-hidden="true"
        />
        <div className="hero__orbit hero__orbit--one" aria-hidden="true" />
        <div className="hero__orbit hero__orbit--two" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow">Hi, I am Shivendra</p>
          <h1>{portfolio.headline}</h1>
          <p className="hero__copy">{portfolio.intro}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#projects">
              View projects
            </a>
            <a className="button button--ghost" href="#contact">
              Reach out
            </a>
          </div>
        </div>
        <div
          className="hero__panel"
          style={{ '--parallax-y': `${parallaxOffset * -0.35}px` }}
          aria-label="Developer profile summary"
        >
          <span>Available for website work</span>
          <strong>{portfolio.role}</strong>
          <p>{portfolio.location}</p>
          <div className="signal-stack" aria-label="Frontend working style">
            <span>Build signal</span>
            <b>Clean UI</b>
            <b>Live deploys</b>
            <b>Fast iteration</b>
          </div>
        </div>
      </section>

      <section className="motion-ribbon" aria-label="Frontend capabilities">
        <div>
          {[...motionSkills, ...motionSkills].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </section>

      <section className="stats" aria-label="Portfolio highlights">
        {stats.map(([value, label]) => (
          <article className="stat-card" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </article>
        ))}
      </section>

      <section className="section projects" id="projects">
        <div className="section__heading">
          <p className="eyebrow">Projects</p>
          <h2>Selected frontend work with stronger visual identity.</h2>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article
              className="project-card"
              key={project.title}
              data-index={`0${index + 1}`}
            >
              <div className="project-card__topline">
                <p className="project-card__eyebrow">{project.eyebrow}</p>
                <span>Live</span>
              </div>
              <div>
                <h3>{project.title}</h3>
                <strong>{project.signal}</strong>
                <p>{project.description}</p>
              </div>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <a className="project-card__link" href={project.href}>
                View live site
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section coding" id="coding">
        <div className="section__heading">
          <p className="eyebrow">Coding profiles</p>
          <h2>Practice, contests, and code presence in one place.</h2>
        </div>
        <div className="coding-grid">
          {Object.values(portfolio.codingProfiles).map((profile) => (
            <a className="coding-card" href={profile.href} key={profile.label}>
              <div className="coding-card__topline">
                <span>{profile.label}</span>
                <b>@{profile.handle}</b>
              </div>
              <p>{profile.detail}</p>
              <strong>Open profile</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="section lab" aria-label="Portfolio experience lab">
        <div className="lab__panel">
          <p className="eyebrow">Frontend studio</p>
          <h2>Live work with motion and clarity.</h2>
          <p>
            A sharper showcase for live frontend work, built around momentum,
            readability, and confident presentation.
          </p>
        </div>
        <div className="lab__stack" aria-hidden="true">
          <span>01 / Parallax</span>
          <span>02 / Live Links</span>
          <span>03 / Responsive Grid</span>
        </div>
      </section>

      <section className="section about" id="about">
        <div className="section__heading">
          <p className="eyebrow">About me</p>
          <h2>Computer Science student with a builder's mindset.</h2>
        </div>
        <div className="about__body">
          <p>{portfolio.about}</p>
          <div className="focus-card">
            <span>Current focus</span>
            <ul>
              {focusAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Let's connect</p>
          <h2>If you have work or web-related queries, feel free to connect.</h2>
          <p>
            I am always open to useful conversations around websites, learning, and
            opportunities to build better digital experiences.
          </p>
        </div>
        <div className="contact__actions">
          <a className="button button--primary" href={portfolio.contact.linkedin}>
            LinkedIn
          </a>
          <a className="button button--ghost" href={portfolio.contact.email}>
            Email
          </a>
        </div>
        <div className="social-row" aria-label="Social profiles">
          <a href={portfolio.contact.github}>GitHub</a>
          <a href={portfolio.contact.instagram}>Instagram</a>
          <a href={portfolio.contact.linkedin}>LinkedIn</a>
        </div>
      </section>

      <footer className="footer">
        <span>Made with care by {portfolio.name}</span>
      </footer>
    </main>
  );
}

function ScrollProgress({ progress }) {
  return (
    <div className="scroll-progress" aria-hidden="true">
      <span style={{ transform: `scaleX(${progress})` }} />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <a className="brand" href="#home" aria-label="Shivendra portfolio home">
        <span>SP</span>
        {portfolio.name}
      </a>
      <nav aria-label="Main navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default App;
