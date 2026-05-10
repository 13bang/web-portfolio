import { useEffect } from 'react' 
import './Projects.css'

const projects = [
  {
    title: 'Anandamid Marketplace',
    desc: 'Website marketplace modern dengan arsitektur fullstack — React JS (Vite) di frontend dan NestJS di backend. Dilengkapi sistem auth, product listing, dan cart.',
    tags: ['React JS', 'Vite', 'NestJS', 'REST API', 'PM2', 'Cloudflare Tunnel'],
    type: 'Fullstack',
    color: 'accent',
    highlight: true,
    role: 'Fullstack Developer',
    company: 'Anandam Computer',
    link: 'https://anandam.id',
  },
  {
    title: 'Sistem Manajemen Stok',
    desc: 'Aplikasi web manajemen persediaan barang dengan fitur pelaporan transaksi penjualan dan pembelian. Dikembangkan menggunakan PHP Native untuk frontend dan backend dengan styling CSS murni.',
    tags: ['PHP Native', 'JavaScript', 'CSS Native', 'MySQL'],
    type: 'Fullstack',
    color: 'green',
    highlight: false,
    role: 'Web Developer',
    company: 'Anandam Computer',
    link: '#',
  },
  {
    title: 'supergaming.id',
    desc: 'Website company profile badan usaha dari Anandam Computer.',
    tags: ['PHP', 'HTML', 'CSS', 'Responsive'],
    type: 'Frontend',
    color: 'purple',
    highlight: false,
    role: 'Web Developer',
    company: 'Anandam Computer',
    link: 'https://supergaming.id',
  },
  {
    title: 'mitragamacomputer.com',
    desc: 'Website company profile badan usaha dari Anandam Computer.',
    tags: ['PHP', 'HTML', 'CSS', 'Responsive'],
    type: 'Frontend',
    color: 'accent',
    highlight: false,
    role: 'Web Developer',
    company: 'Anandam Computer',
    link: 'https://mitragamacomputer.com',
  },
  {
    title: 'Open-Source Research & Integration',
    desc: 'Riset, evaluasi, dan integrasi berbagai produk open-source dengan layanan pihak ketiga. Meliputi instalasi sistem, konfigurasi, uji fitur, dan pembuatan technical documentation.',
    tags: ['Open-Source', 'Docker', 'Linux', 'System Config', 'Documentation'],
    type: 'Research',
    color: 'orange',
    highlight: false,
    role: 'System Engineer',
    company: 'PT Malifax Indonesia',
    link: '#',
  },
  {
    title: 'Personal Web Portfolio',
    desc: 'Website portofolio interaktif dengan antarmuka modern dan Dark Mode. Dibangun secara mandiri dari awal menggunakan ekosistem React dan styling CSS Native.',
    tags: ['React JS', 'Vite', 'Native CSS', 'Responsive UI'],
    type: 'Frontend',
    color: 'purple',
    highlight: false,
    role: 'Web Developer',
    company: 'Personal Project',
    link: '#',
  },
]

const colorMap = {
  accent: 'var(--accent)',
  green: 'var(--green)',
  purple: 'var(--accent-2)',
  orange: '#f59e0b',
}

export default function Projects() {
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.15 });

    const hiddenElements = document.querySelectorAll('.reveal');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects">
      <div className="container">
        
        <div className="reveal">
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">Projects &amp; Karya</h2>
          <p className="section-desc" style={{ marginBottom: '3rem' }}>
            Beberapa project yang telah saya kerjakan selama magang dan belajar mandiri.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`project-card ${project.highlight ? 'highlight' : ''} reveal reveal-delay-${(i % 3) + 1}`} 
              style={{ '--card-color': colorMap[project.color] }}
            >
              <div className="pc-top">
                <div className="pc-badges">
                  <span className="pc-type" style={{ color: colorMap[project.color] }}>{project.type}</span>
                  <span className="pc-company">{project.company}</span>
                </div>
              </div>

              <h3 className="pc-title">{project.title}</h3>
              <p className="pc-desc">{project.desc}</p>

              <div className="pc-tags">
                {project.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="pc-footer">
                <span className="pc-role">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                  {project.role}
                </span>
                {project.link !== '#' && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="pc-link">
                    Visit Site
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}