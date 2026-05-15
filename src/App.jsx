import React, { useState, useEffect } from 'react';
import './App.css';
import github from './images/github.png';
import likedin from './images/linkedin.png';
import profileImage from './images/myimage.jpeg'
import project1 from './images/project1.png';
import project2 from './images/project2.png';
import project3 from './images/project3.png';
import project4 from './images/project4.png';
import project5 from './images/project5.png';
import project6 from './images/project6.png';


const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (

    <div className="app" >
      {/* ========== NAVBAR ========== */}
      <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="#">
              <svg
                className="logo-icon"
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
              >
                <rect width="40" height="40" rx="8" fill="#6366f1" />
                <path d="M12 28L20 12L28 28H12Z" fill="white" fillOpacity="0.9" />
                <circle cx="20" cy="22" r="3" fill="#6366f1" />
              </svg>
              <span className="logo-text">Rafay</span>
            </a>
          </div>

          {/* Navigation Links */}
          <div className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-menu">

              <li className="nav-item">
                <a href="#" className="nav-link active">Home</a>
              </li>

              <li className="nav-item">
                <a href="#aboutmemain" className="nav-link">About</a>
              </li>
              <li className="nav-item">
                <a href="#experiences" className="nav-link">My Journey</a>
              </li>
              <li className="nav-item">
                <a href="#skills" className="nav-link">Work </a>
              </li>
              <li className="nav-item">
                <a href="#projects" className="nav-link">Projects</a>
              </li>
              <li className="nav-item">
                <a href="#contact" className="nav-link">Contact</a>
              </li>
            </ul>

            {/* Login Button */}
            <div className="navbar-actions">
              <button className="btn-login">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="login-icon">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M13.8 12H3"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round" />
                </svg>
                Login
              </button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>


      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        {/* Animated Background Blobs */}
        <div className="bg-blur blur-1"></div>
        <div className="bg-blur blur-2"></div>
        <div className="bg-blur blur-3"></div>

        {/* Hero Content */}
        <div className="hero-container">
          {/* Badge */}
          <div className="hero-badge">
            <span className="fire">🔥</span>
            <span>Modern React Portfolio</span>
          </div>

          {/* Heading */}
          <h1 className="hero-title">
            <span className="white-text">Build Amazing </span>
            <span className="blue-text">Digital</span>
            <br />
            <span className="blue-text">Experiences</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Professional portfolio website jahan tum apne projects, AI tools aur
            creative work stylish way me showcase kar sakte ho.
          </p>

          <div id="profilemain">
            <div id="profiles">
              <a href="https://github.com/abdul-rafaycodeder" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="github" />
              </a>
            </div>

            <div id="profiles2">
              <a href="https://www.linkedin.com/in/abdul-rafay-2bbb063a8/" target="_blank" rel="noopener noreferrer">
                <img src={likedin} alt="LinkedIn" />
              </a>
            </div>
          </div>

          {/* Buttons */}
          <div className="hero-buttons">
            <a href="#explore" className="btn btn-primary">
              Explore Now
            </a>
            <a href="#projects" className="btn btn-secondary">
              View Projects
            </a>
          </div>
        </div>
      </section>
      {/* About Me Section */}
      <div id="aboutmemain">
        <div id="aboutmeleft">
          <div id="aboutmetext">
            <h3>Who I am?</h3>
            <p>My name is Abdul rafay 😑. I am a professional and enthusiastic <br /> programmer in my daily life. I am a quick learner with a self- <br />learning attitude. I love to learn and explore new technologies <br /> and am passionate about problem-solving. I love almost  <br /> the stacks of web application development and love to make <br /> the web more open to the world. My core skill is based on <br /> JavaScript and I love to do most of the things using <br /> JavaScript. I am available for any kind of job opportunity that <br /> suits my skills and interests.
            </p>
          </div>
        </div>
        <div id="aboutmeright">
          <div id="aboutmerightimage">
            <img src={profileImage} alt="About Me" className='imageOver' />
          </div>
        </div>
      </div>
      {/* ========== EXPERIENCES SECTION ========== */}
      <section className="experiences" id="experiences">
        <div className="experiences-container">
          {/* Section Header */}
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

          {/* Experience Cards */}
          <div className="experiences-grid">
            {/* Experience Card 1 */}
            <div className="experience-card">
              <div className="card-timeline">2023 - Present</div>
              <div className="card-header">
                <div className="company-logo">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="10" fill="#6366f1" />
                    <path d="M12 28L20 12L28 28H12Z" fill="white" fillOpacity="0.9" />
                  </svg>
                </div>
                <div className="card-title-group">
                  <h3 className="card-title">Senior Frontend Developer</h3>
                  <p className="card-company">TechCorp Inc.</p>
                </div>
              </div>
              <p className="card-description">
                Led development of modern web applications using React, TypeScript, and Next.js. Improved performance by 40% and mentored junior developers.
              </p>
              <div className="card-tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">TypeScript</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">Node.js</span>
              </div>
            </div>

            {/* Experience Card 2 */}
            <div className="experience-card">
              <div className="card-timeline">2021 - 2023</div>
              <div className="card-header">
                <div className="company-logo">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="10" fill="#8b5cf6" />
                    <circle cx="20" cy="20" r="8" fill="white" fillOpacity="0.9" />
                  </svg>
                </div>
                <div className="card-title-group">
                  <h3 className="card-title">Full Stack Developer</h3>
                  <p className="card-company">Digital Solutions Ltd.</p>
                </div>
              </div>
              <p className="card-description">
                Built scalable APIs and interactive dashboards. Reduced load time by 60% through optimization and implemented CI/CD pipelines.
              </p>
              <div className="card-tech-stack">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Django</span>
                <span className="tech-tag">AWS</span>
              </div>
            </div>

            {/* Experience Card 3 */}
            <div className="experience-card">
              <div className="card-timeline">2020 - 2021</div>
              <div className="card-header">
                <div className="company-logo">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="10" fill="#06b6d4" />
                    <rect x="12" y="12" width="16" height="16" rx="4" fill="white" fillOpacity="0.9" />
                  </svg>
                </div>
                <div className="card-title-group">
                  <h3 className="card-title">Junior Developer</h3>
                  <p className="card-company">StartUp Hub</p>
                </div>
              </div>
              <p className="card-description">
                Started professional journey building responsive websites and mobile apps. Learned modern JavaScript frameworks and agile methodologies.
              </p>
              <div className="card-tech-stack">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">CSS</span>
                <span className="tech-tag">Git</span>
              </div>
            </div>

            {/* Experience Card 4 */}
            <div className="experience-card">
              <div className="card-timeline">2019 - 2020</div>
              <div className="card-header">
                <div className="company-logo">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <rect width="40" height="40" rx="10" fill="#f59e0b" />
                    <path d="M20 12L24 20H16L20 12Z" fill="white" fillOpacity="0.9" />
                    <path d="M20 28L16 20H24L20 28Z" fill="white" fillOpacity="0.7" />
                  </svg>
                </div>
                <div className="card-title-group">
                  <h3 className="card-title">Freelance Developer</h3>
                  <p className="card-company">Self Employed</p>
                </div>
              </div>
              <p className="card-description">
                Completed 20+ projects for international clients. Specialized in creating portfolio websites and e-commerce solutions.
              </p>
              <div className="card-tech-stack">
                <span className="tech-tag">HTML/CSS</span>
                <span className="tech-tag">WordPress</span>
                <span className="tech-tag">PHP</span>
                <span className="tech-tag">MySQL</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== SKILLS SECTION ========== */}
      <section className="skills" id="skills">
        <div className="skills-container">
          {/* Section Header */}
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

          {/* Skills Marquee - Left to Right Auto Scroll */}
          <div className="skills-marquee-container">
            <div className="skills-marquee">
              {/* Original Set */}
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="skill-logo" />
                <span className="skill-name">HTML5</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="skill-logo" />
                <span className="skill-name">CSS3</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="skill-logo" />
                <span className="skill-name">TypeScript</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-logo" />
                <span className="skill-name">React</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="skill-logo" />
                <span className="skill-name">Next.js</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="skill-logo-tailwind" />
                <span className="skill-name">Tailwind</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="skill-logo" />
                <span className="skill-name">Bootstrap</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="skill-logo" />
                <span className="skill-name">Firebase</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="skill-logo" />
                <span className="skill-name">MongoDB</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="skill-logo" />
                <span className="skill-name">MySQL</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="skill-logo" />
                <span className="skill-name">PostgreSQL</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="skill-logo" />
                <span className="skill-name">Figma</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="UI/UX" className="skill-logo" />
                <span className="skill-name">UI/UX</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-logo" />
                <span className="skill-name">Node.js</span>
              </div>

              {/* Duplicate Set for Infinite Scroll */}
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="skill-logo" />
                <span className="skill-name">HTML5</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="skill-logo" />
                <span className="skill-name">CSS3</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="skill-logo" />
                <span className="skill-name">JavaScript</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" className="skill-logo" />
                <span className="skill-name">TypeScript</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="skill-logo" />
                <span className="skill-name">React</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="skill-logo" />
                <span className="skill-name">Next.js</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind CSS" className="skill-logo-tailwind" />
                <span className="skill-name">Tailwind</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="skill-logo" />
                <span className="skill-name">Bootstrap</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" className="skill-logo" />
                <span className="skill-name">Firebase</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="skill-logo" />
                <span className="skill-name">MongoDB</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="MySQL" className="skill-logo" />
                <span className="skill-name">MySQL</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" className="skill-logo" />
                <span className="skill-name">PostgreSQL</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" alt="Figma" className="skill-logo" />
                <span className="skill-name">Figma</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg" alt="UI/UX" className="skill-logo" />
                <span className="skill-name">UI/UX</span>
              </div>
              <div className="skill-card">
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="skill-logo" />
                <span className="skill-name">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== PROJECTS SECTION ========== */}
      <section className="projects" id="projects">
        <div className="projects-container">
          {/* Section Header */}
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

          {/* Projects Grid */}
          <div className="projects-grid">
            {/* Project Card 1 - E-Commerce App */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project1}
                  alt="E-Commerce Platform"
                  className="project-image"
                />
                <a href="https://abdul-rafaycodeder.github.io/Ibrahim_Sir_Website_clone/#" target="_blank" rel="noopener noreferrer">
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">👁️</span>
                      <span>View Project</span>
                    </div>
                  </div>
                </a>
                <div className="project-category">Full Stack</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">E-Commerce Platform</h3>
                <p className="project-description">
                  Modern e-commerce platform with real-time inventory, payment integration, and admin dashboard.
                </p>
                <div className="project-tech-stack">
                  <span className="project-tech-tag">React</span>
                  <span className="project-tech-tag">Node.js</span>
                  <span className="project-tech-tag">MongoDB</span>
                </div>
                <div className="project-links">
                  <a href="https://abdul-rafaycodeder.github.io/Ibrahim_Sir_Website_clone/#" target="_blank" rel="noopener noreferrer" className="project-link primary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Live Demo
                  </a>
                  <a href="https://github.com/abdul-rafaycodeder/Ibrahim_Sir_Website_clone" target="_blank" rel="noopener noreferrer" className="project-link secondary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 2 - AI Dashboard */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project2}
                  alt="AI Analytics Dashboard"
                  className="project-image"
                />
                <a href="https://abdul-rafaycodeder.github.io/Text_To_PDF/" target="_blank" rel="noopener noreferrer">
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">👁️</span>
                      <span>View Project</span>
                    </div>
                  </div>
                </a>
                <div className="project-category">AI/ML</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">AI Analytics Dashboard</h3>
                <p className="project-description">
                  Intelligent dashboard with machine learning predictions and real-time data visualization.
                </p>
                <div className="project-tech-stack">
                  <span className="project-tech-tag">Next.js</span>
                  <span className="project-tech-tag">Python</span>
                  <span className="project-tech-tag">TensorFlow</span>
                </div>
                <div className="project-links">
                  <a href="https://abdul-rafaycodeder.github.io/Text_To_PDF/" target="_blank" rel="noopener noreferrer" className="project-link primary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Live Demo
                  </a>
                  <a href="https://github.com/abdul-rafaycodeder/Text_To_PDF" target="_blank" rel="noopener noreferrer" className="project-link secondary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 3 - Social Media App */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project3}
                  alt="Social Media App"
                  className="project-image"
                />
                <a href="https://abdul-rafaycodeder.github.io/marketplase_website_project/" target="_blank" rel="noopener noreferrer">
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">👁️</span>
                      <span>View Project</span>
                    </div>
                  </div>
                </a>
                <div className="project-category">Mobile App</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Social Media App</h3>
                <p className="project-description">
                  Feature-rich social platform with real-time chat, stories, and content sharing capabilities.
                </p>
                <div className="project-tech-stack">
                  <span className="project-tech-tag">React Native</span>
                  <span className="project-tech-tag">Firebase</span>
                  <span className="project-tech-tag">Redux</span>
                </div>
                <div className="project-links">
                  <a href="https://abdul-rafaycodeder.github.io/marketplase_website_project/" target="_blank" rel="noopener noreferrer" className="project-link primary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Live Demo
                  </a>
                  <a href="https://github.com/abdul-rafaycodeder/marketplase_website_project" target="_blank" rel="noopener noreferrer" className="project-link secondary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 4 - Portfolio Website */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project4}
                  alt="Portfolio Website"
                  className="project-image"
                />
                <a href="https://abdul-rafaycodeder.github.io/CSS_Color_Code_Converter/" target="_blank" rel="noopener noreferrer">
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">👁️</span>
                      <span>View Project</span>
                    </div>
                  </div>
                </a>
                <div className="project-category">Web Design</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">3D Portfolio Website</h3>
                <p className="project-description">
                  Stunning 3D portfolio with animations, interactive elements, and modern design aesthetics.
                </p>
                <div className="project-tech-stack">
                  <span className="project-tech-tag">Three.js</span>
                  <span className="project-tech-tag">React</span>
                  <span className="project-tech-tag">GSAP</span>
                </div>
                <div className="project-links">
                  <a href="https://abdul-rafaycodeder.github.io/CSS_Color_Code_Converter/" target="_blank" rel="noopener noreferrer" className="project-link primary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Live Demo
                  </a>
                  <a href="https://github.com/abdul-rafaycodeder/CSS_Color_Code_Converter" target="_blank" rel="noopener noreferrer" className="project-link secondary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 5 - Chat Application */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project5}
                  alt="Real-time Chat App"
                  className="project-image"
                />
                <a href="https://abdul-rafaycodeder.github.io/Password_Generator/" target="_blank" rel="noopener noreferrer">
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">👁️</span>
                      <span>View Project</span>
                    </div>
                  </div>
                </a>
                <div className="project-category">Web App</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Real-time Chat App</h3>
                <p className="project-description">
                  Instant messaging platform with video calls, file sharing, and end-to-end encryption.
                </p>
                <div className="project-tech-stack">
                  <span className="project-tech-tag">Socket.io</span>
                  <span className="project-tech-tag">Express</span>
                  <span className="project-tech-tag">WebRTC</span>
                </div>
                <div className="project-links">
                  <a href="https://abdul-rafaycodeder.github.io/Password_Generator/" target="_blank" rel="noopener noreferrer" className="project-link primary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Live Demo
                  </a>
                  <a href="https://github.com/abdul-rafaycodeder/Password_Generator" target="_blank" rel="noopener noreferrer" className="project-link secondary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>

            {/* Project Card 6 - Task Management */}
            <div className="project-card">
              <div className="project-image-wrapper">
                <img
                  src={project6}
                  alt="Task Management Tool"
                  className="project-image"
                />
                <a href="https://abdulrehman-web.netlify.app/" target="_blank" rel="noopener noreferrer" >
                  <div className="project-overlay">
                    <div className="overlay-content">
                      <span className="overlay-icon">👁️</span>
                      <span>View Project</span>
                    </div>
                  </div>
                </a>
                <div className="project-category">Productivity</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Task Management Tool</h3>
                <p className="project-description">
                  Collaborative project management with Kanban boards, time tracking, and team analytics.
                </p>
                <div className="project-tech-stack">
                  <span className="project-tech-tag">Vue.js</span>
                  <span className="project-tech-tag">Laravel</span>
                  <span className="project-tech-tag">PostgreSQL</span>
                </div>
                <div className="project-links">
                  <a href="https://abdulrehman-web.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link primary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Live Demo
                  </a>
                  <a href="https://github.com/mrmaneditor000820-ui/React-app-Learning" target="_blank" rel="noopener noreferrer" className="project-link secondary-link">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== Contact SECTION ========== */}
      <div id="contactSectionMain">
        <div id="contactSectionMainText">
          <h1>Get In Touch</h1>
          <p>Have a project in mind? Let's create something amazing together</p>
        </div>
        <div id="contactSectionMainLeft">

        </div>
        <div id="contactSectionMainRight"></div>
      </div>
    </div>
  );
};

export default App;