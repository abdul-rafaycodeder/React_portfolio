import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// ─── Placeholder image URLs (replace with your actual imports) ───────────────
const github = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
const likedin = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg';
const profileImage = 'https://via.placeholder.com/300x300/6366f1/ffffff?text=AR';
const project1 = 'https://via.placeholder.com/600x400/1a1a2e/6366f1?text=E-Commerce';
const project2 = 'https://via.placeholder.com/600x400/1a1a2e/8b5cf6?text=AI+Dashboard';
const project3 = 'https://via.placeholder.com/600x400/1a1a2e/06b6d4?text=Social+Media';
const project4 = 'https://via.placeholder.com/600x400/1a1a2e/f59e0b?text=3D+Portfolio';
const project5 = 'https://via.placeholder.com/600x400/1a1a2e/10b981?text=Chat+App';
const project6 = 'https://via.placeholder.com/600x400/1a1a2e/ef4444?text=Task+Manager';
const linkedinImage2 = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg';

// ─── SKILLS DATA ─────────────────────────────────────────────────────────────
const skillsData = [
  { name: 'HTML5',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',         isTailwind: false },
  { name: 'CSS3',       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',           isTailwind: false },
  { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', isTailwind: false },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', isTailwind: false },
  { name: 'React',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',         isTailwind: false },
  { name: 'Next.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',       isTailwind: false },
  { name: 'Tailwind',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', isTailwind: true },
  { name: 'Bootstrap',  logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', isTailwind: false },
  { name: 'Firebase',   logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',      isTailwind: false },
  { name: 'MongoDB',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',     isTailwind: false },
  { name: 'MySQL',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',         isTailwind: false },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', isTailwind: false },
  { name: 'Figma',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',         isTailwind: false },
  { name: 'UI/UX',      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', isTailwind: false },
  { name: 'Node.js',    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',       isTailwind: false },
];

// ─── EXPERIENCES DATA ─────────────────────────────────────────────────────────
const experiencesData = [
  {
    timeline: '2023 - Present',
    color: '#6366f1',
    title: 'Senior Frontend Developer',
    company: 'TechCorp Inc.',
    description: 'Led development of modern web applications using React, TypeScript, and Next.js. Improved performance by 40% and mentored junior developers.',
    tags: ['React', 'TypeScript', 'Next.js', 'Node.js'],
    svgShape: <path d="M12 28L20 12L28 28H12Z" fill="white" fillOpacity="0.9" />,
  },
  {
    timeline: '2021 - 2023',
    color: '#8b5cf6',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: 'Built scalable APIs and interactive dashboards. Reduced load time by 60% through optimization and implemented CI/CD pipelines.',
    tags: ['React', 'Python', 'Django', 'AWS'],
    svgShape: <circle cx="20" cy="20" r="8" fill="white" fillOpacity="0.9" />,
  },
  {
    timeline: '2020 - 2021',
    color: '#06b6d4',
    title: 'Junior Developer',
    company: 'StartUp Hub',
    description: 'Started professional journey building responsive websites and mobile apps. Learned modern JavaScript frameworks and agile methodologies.',
    tags: ['JavaScript', 'React', 'CSS', 'Git'],
    svgShape: <rect x="12" y="12" width="16" height="16" rx="4" fill="white" fillOpacity="0.9" />,
  },
  {
    timeline: '2019 - 2020',
    color: '#f59e0b',
    title: 'Freelance Developer',
    company: 'Self Employed',
    description: 'Completed 20+ projects for international clients. Specialized in creating portfolio websites and e-commerce solutions.',
    tags: ['HTML/CSS', 'WordPress', 'PHP', 'MySQL'],
    svgShape: (
      <>
        <path d="M20 12L24 20H16L20 12Z" fill="white" fillOpacity="0.9" />
        <path d="M20 28L16 20H24L20 28Z" fill="white" fillOpacity="0.7" />
      </>
    ),
  },
];

// ─── PROJECTS DATA ────────────────────────────────────────────────────────────
const projectsData = [
  {
    image: project1,
    alt: 'E-Commerce Platform',
    liveUrl: 'https://abdul-rafaycodeder.github.io/Ibrahim_Sir_Website_clone/#',
    repoUrl: 'https://github.com/abdul-rafaycodeder/Ibrahim_Sir_Website_clone',
    category: 'Full Stack',
    title: 'E-Commerce Platform',
    description: 'Modern e-commerce platform with real-time inventory, payment integration, and admin dashboard.',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    image: project2,
    alt: 'AI Analytics Dashboard',
    liveUrl: 'https://abdul-rafaycodeder.github.io/Text_To_PDF/',
    repoUrl: 'https://github.com/abdul-rafaycodeder/Text_To_PDF',
    category: 'AI/ML',
    title: 'AI Analytics Dashboard',
    description: 'Intelligent dashboard with machine learning predictions and real-time data visualization.',
    tags: ['Next.js', 'Python', 'TensorFlow'],
  },
  {
    image: project3,
    alt: 'Social Media App',
    liveUrl: 'https://abdul-rafaycodeder.github.io/marketplase_website_project/',
    repoUrl: 'https://github.com/abdul-rafaycodeder/marketplase_website_project',
    category: 'Mobile App',
    title: 'Social Media App',
    description: 'Feature-rich social platform with real-time chat, stories, and content sharing capabilities.',
    tags: ['React Native', 'Firebase', 'Redux'],
  },
  {
    image: project4,
    alt: 'Portfolio Website',
    liveUrl: 'https://abdul-rafaycodeder.github.io/CSS_Color_Code_Converter/',
    repoUrl: 'https://github.com/abdul-rafaycodeder/CSS_Color_Code_Converter',
    category: 'Web Design',
    title: '3D Portfolio Website',
    description: 'Stunning 3D portfolio with animations, interactive elements, and modern design aesthetics.',
    tags: ['Three.js', 'React', 'GSAP'],
  },
  {
    image: project5,
    alt: 'Real-time Chat App',
    liveUrl: 'https://abdul-rafaycodeder.github.io/Password_Generator/',
    repoUrl: 'https://github.com/abdul-rafaycodeder/Password_Generator',
    category: 'Web App',
    title: 'Real-time Chat App',
    description: 'Instant messaging platform with video calls, file sharing, and end-to-end encryption.',
    tags: ['Socket.io', 'Express', 'WebRTC'],
  },
  {
    image: project6,
    alt: 'Task Management Tool',
    liveUrl: 'https://abdulrehman-web.netlify.app/',
    repoUrl: 'https://github.com/mrmaneditor000820-ui/React-app-Learning',
    category: 'Productivity',
    title: 'Task Management Tool',
    description: 'Collaborative project management with Kanban boards, time tracking, and team analytics.',
    tags: ['Vue.js', 'Laravel', 'PostgreSQL'],
  },
];

// ─── ICON SVGs ────────────────────────────────────────────────────────────────
const ExternalLinkIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const LoginIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="login-icon">
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ─── NAVBAR ───────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navLinks = [
    { href: '#',                  label: 'Home'      },
    { href: '#aboutmemain',       label: 'About'     },
    { href: '#experiences',       label: 'My Journey'},
    { href: '#skills',            label: 'Work'      },
    { href: '#projects',          label: 'Projects'  },
    { href: '#contactSectionMain',label: 'Contact'   },
  ];

  return (
    <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <a href="#">
            <svg className="logo-icon" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <rect width="40" height="40" rx="8" fill="#6366f1" />
              <path d="M12 28L20 12L28 28H12Z" fill="white" fillOpacity="0.9" />
              <circle cx="20" cy="22" r="3" fill="#6366f1" />
            </svg>
            <span className="logo-text">Rafay</span>
          </a>
        </div>

        {/* Nav Links */}
        <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-menu">
            {navLinks.map((link, i) => (
              <li key={i} className="nav-item">
                <a href={link.href} className={`nav-link ${i === 0 ? 'active' : ''}`} onClick={closeMobileMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="navbar-actions">
            <button className="btn-login">
              <LoginIcon />
              Login
            </button>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobileMenu}></div>
      )}
    </nav>
  );
};

// ─── HERO SECTION ─────────────────────────────────────────────────────────────
const HeroSection = () => (
  <section className="hero" id="home">
    <div className="bg-blur blur-1"></div>
    <div className="bg-blur blur-2"></div>
    <div className="bg-blur blur-3"></div>

    <div className="hero-container">
      <div className="hero-badge">
        <span className="fire">🔥</span>
        <span>Modern React Portfolio</span>
      </div>

      <h1 className="hero-title">
        <span className="white-text">Build Amazing </span>
        <span className="blue-text">Digital</span>
        <br />
        <span className="blue-text">Experiences</span>
      </h1>

      <p className="hero-description">
        Professional portfolio website jahan tum apne projects, AI tools aur
        creative work stylish way me showcase kar sakte ho.
      </p>

      <div id="profilemain">
        <div id="profiles">
          <a href="https://github.com/abdul-rafaycodeder" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub" />
          </a>
        </div>
        <div id="profiles2">
          <a href="https://www.linkedin.com/in/abdul-rafay-2bbb063a8/" target="_blank" rel="noopener noreferrer">
            <img src={likedin} alt="LinkedIn" />
          </a>
        </div>
      </div>

      <div className="hero-buttons">
        <a href="#aboutmemain" className="btn btn-primary">Explore Now</a>
        <a href="#projects"    className="btn btn-secondary">View Projects</a>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </div>
  </section>
);

// ─── ABOUT ME SECTION ─────────────────────────────────────────────────────────
const AboutSection = () => (
  <section id="aboutmemain">
    <div id="aboutmeleft">
      <div id="aboutmetext">
        <span className="section-badge about-badge">👨‍💻 About Me</span>
        <h2 className="about-heading">
          Who <span className="blue-text">I am?</span>
        </h2>
        <p>
          My name is <strong>Abdul Rafay</strong> 😎. I am a professional and enthusiastic
          programmer in my daily life. I am a quick learner with a self-learning attitude.
          I love to learn and explore new technologies and am passionate about problem-solving.
        </p>
        <p>
          I love almost all the stacks of web application development and love to make
          the web more open to the world. My core skill is based on
          <strong> JavaScript</strong> and I love to do most things using it.
          I am available for any kind of job opportunity that suits my skills and interests.
        </p>
        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Exp.</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Clients</span>
          </div>
        </div>
        <a href="#projects" className="btn btn-primary about-cta">View My Work</a>
      </div>
    </div>
    <div id="aboutmeright">
      <div id="aboutmerightimage">
        <div className="image-glow-ring">
          <img src={profileImage} alt="Abdul Rafay" className="imageOver" />
        </div>
        <div className="floating-badge fb-1">⚡ React Dev</div>
        <div className="floating-badge fb-2">🚀 JS Expert</div>
      </div>
    </div>
  </section>
);

// ─── EXPERIENCE CARD ──────────────────────────────────────────────────────────
const ExperienceCard = ({ data, index }) => (
  <div className="experience-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="card-timeline">{data.timeline}</div>
    <div className="card-header">
      <div className="company-logo">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="10" fill={data.color} />
          {data.svgShape}
        </svg>
      </div>
      <div className="card-title-group">
        <h3 className="card-title">{data.title}</h3>
        <p className="card-company">{data.company}</p>
      </div>
    </div>
    <p className="card-description">{data.description}</p>
    <div className="card-tech-stack">
      {data.tags.map((tag, i) => (
        <span key={i} className="tech-tag">{tag}</span>
      ))}
    </div>
  </div>
);

// ─── EXPERIENCES SECTION ──────────────────────────────────────────────────────
const ExperiencesSection = () => (
  <section className="experiences" id="experiences">
    <div className="experiences-container">
      <div className="section-header">
        <span className="section-badge">💼 Experiences</span>
        <h2 className="section-title">
          <span className="white-text">My Professional </span>
          <span className="blue-text">Journey</span>
        </h2>
        <p className="section-description">
          Years of experience in building digital products and solving complex problems
        </p>
      </div>
      <div className="experiences-grid">
        {experiencesData.map((exp, i) => (
          <ExperienceCard key={i} data={exp} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// ─── SKILLS SECTION ───────────────────────────────────────────────────────────
const SkillsSection = () => {
  // Double the array for seamless infinite scroll
  const doubled = [...skillsData, ...skillsData];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        <div className="section-header">
          <span className="section-badge">🛠️ My Skills</span>
          <h2 className="section-title">
            <span className="white-text">Technologies </span>
            <span className="blue-text">I Work With</span>
          </h2>
          <p className="section-description">
            Cutting-edge technologies and tools I use to build amazing digital experiences
          </p>
        </div>

        <div className="skills-marquee-container">
          <div className="skills-marquee">
            {doubled.map((skill, i) => (
              <div className="skill-card" key={i}>
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className={skill.isTailwind ? 'skill-logo-tailwind' : 'skill-logo'}
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── PROJECT CARD ─────────────────────────────────────────────────────────────
const ProjectCard = ({ data, index }) => (
  <div className="project-card" style={{ animationDelay: `${index * 0.1}s` }}>
    <div className="project-image-wrapper">
      <img src={data.image} alt={data.alt} className="project-image" />
      <a href={data.liveUrl} target="_blank" rel="noopener noreferrer">
        <div className="project-overlay">
          <div className="overlay-content">
            <span className="overlay-icon">👁️</span>
            <span>View Project</span>
          </div>
        </div>
      </a>
      <div className="project-category">{data.category}</div>
    </div>
    <div className="project-content">
      <h3 className="project-title">{data.title}</h3>
      <p className="project-description">{data.description}</p>
      <div className="project-tech-stack">
        {data.tags.map((tag, i) => (
          <span key={i} className="project-tech-tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={data.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link primary-link">
          <ExternalLinkIcon />
          Live Demo
        </a>
        <a href={data.repoUrl} target="_blank" rel="noopener noreferrer" className="project-link secondary-link">
          <GithubIcon />
          Source Code
        </a>
      </div>
    </div>
  </div>
);

// ─── PROJECTS SECTION ─────────────────────────────────────────────────────────
const ProjectsSection = () => (
  <section className="projects" id="projects">
    <div className="projects-container">
      <div className="section-header">
        <span className="section-badge">🚀 Portfolio</span>
        <h2 className="section-title">
          <span className="white-text">Featured </span>
          <span className="blue-text">Projects</span>
        </h2>
        <p className="section-description">
          Showcasing my best work and creative projects built with modern technologies
        </p>
      </div>
      <div className="projects-grid">
        {projectsData.map((proj, i) => (
          <ProjectCard key={i} data={proj} index={i} />
        ))}
      </div>
    </div>
  </section>
);

// ─── CONTACT SECTION ──────────────────────────────────────────────────────────
const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contactSectionMain">
      <div className="contact-bg-blur contact-blur-1"></div>
      <div className="contact-bg-blur contact-blur-2"></div>

      <div className="contact-inner">
        <div id="contactSectionMainText">
          <span className="section-badge">📬 Contact</span>
          <h1>Get In <span className="blue-text">Touch</span></h1>
          <p>Have a project in mind? Let's create something amazing together</p>
        </div>

        <div id="contactSectionMain2">
          {/* Left Info */}
          <div id="contactSectionMainLeft">
            <div className="contact-info-card" id="contactSectionMainLeft1">
              <div className="contact-icon-wrap">✉️</div>
              <div className="contact-info-text">
                <span className="contact-info-label">Email</span>
                <a href="mailto:abdulrafaycodeder@gmail.com" className="contact-info-value">
                  abdulrafaycodeder@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-card" id="contactSectionMainLeft2">
              <div className="contact-icon-wrap">📍</div>
              <div className="contact-info-text">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">Karachi, Pakistan</span>
              </div>
            </div>

            <div className="contact-info-card" id="contactSectionMainLeft3">
              <div className="contact-icon-wrap">
                <img src={linkedinImage2} alt="LinkedIn" className="contact-social-icon" />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">LinkedIn</span>
                <a
                  href="https://www.linkedin.com/in/abdul-rafay-2bbb063a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-value"
                >
                  Abdul Rafay
                </a>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-icon-wrap">
                <img src={github} alt="GitHub" className="contact-social-icon github-icon" />
              </div>
              <div className="contact-info-text">
                <span className="contact-info-label">GitHub</span>
                <a
                  href="https://github.com/abdul-rafaycodeder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-info-value"
                >
                  abdul-rafaycodeder
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div id="contactSectionMainRight">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Abdul Rafay"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Your Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@gmail.com"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className={`contact-submit-btn ${submitted ? 'submitted' : ''}`}>
                {submitted ? '✅ Message Sent!' : '🚀 Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── FOOTER ───────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer>
    <div className="footer-inner">
      <div className="footer-logo">
        <svg width="32" height="32" viewBox="0 0 40 40" fill="none">
          <rect width="40" height="40" rx="8" fill="#6366f1" />
          <path d="M12 28L20 12L28 28H12Z" fill="white" fillOpacity="0.9" />
          <circle cx="20" cy="22" r="3" fill="#6366f1" />
        </svg>
        <span className="logo-text">Rafay</span>
      </div>
      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Abdul Rafay. All rights reserved.
      </p>
      <div className="footer-links">
        <a href="https://github.com/abdul-rafaycodeder" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/abdul-rafay-2bbb063a8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:abdulrafaycodeder@gmail.com">Email</a>
      </div>
    </div>
  </footer>
);

// ─── SCROLL TO TOP BUTTON ─────────────────────────────────────────────────────
const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      className={`scroll-to-top ${visible ? 'visible' : ''}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
    >
      ↑
    </button>
  );
};

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
const App = () => {
  return (
    <div className="app">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperiencesSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;