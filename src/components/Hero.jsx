import './Hero.css'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muhammad-afif-saifuddin-4a5259346/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/13bang',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:afif.putra224@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
]

const stats = [
  { value: '2+', label: 'Years Learning' },
  { value: '10+', label: 'Projects Built' },
  { value: '5+', label: 'Tech Stacks' },
  { value: '2', label: 'Internships' },
]

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-bg-gradient" />

      <div className="container hero-inner">
        <div className="hero-content">
          <div className="hero-badge animate-fade-up">
            <span className="badge-dot" />
            Available for opportunities
          </div>

          <h1 className="hero-title animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <span className="hero-name">Muhammad Afif Saifuddin</span>
            <span className="hero-role">Full Stack</span>
            <span className="hero-role accent">Web Developer</span>
          </h1>

          <p className="hero-desc animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Siswa SIJA SMK Negeri 2 Klaten dengan pengalaman praktis membangun website 
            menggunakan <strong>PHP, JavaScript, React JS</strong>, dan <strong>NestJS</strong>. 
            Memiliki ketertarikan besar pada pengembangan frontend, backend, hingga deployment infrastruktur.
          </p>

          <div className="hero-actions animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <a href="#projects" className="btn-primary">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
              </svg>
              View Projects
            </a>
            <a href="/CV_Muhammad_Afif_Saifuddin.pdf" download className="btn-outline">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download CV
            </a>
          </div>

          <div className="hero-socials animate-fade-up" style={{ animationDelay: '0.4s' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} className="social-link" title={s.label} target="_blank" rel="noopener noreferrer">
                {s.icon}
                <span>{s.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual animate-fade-up" style={{ animationDelay: '0.2s' }}>
          <div className="hero-photo-wrap">
            <div className="photo-ring" />
            <div className="photo-frame">
              <img src="/public/PAS FOTO APIP.svg" alt="Muhammad Afif Saifuddin" className="hero-photo" />
              <div className="photo-placeholder">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.3">
                  <circle cx="12" cy="8" r="4"/><path d="M20 21a8 8 0 10-16 0"/>
                </svg>
                <span>photo-profile.jpg</span>
              </div>
            </div>
            <div className="photo-badge-1">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              React & NestJS
            </div>
            <div className="photo-badge-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
              System Engineer
            </div>
          </div>
        </div>
      </div>

      {/* <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  )
}
