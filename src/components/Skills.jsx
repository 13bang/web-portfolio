import { useState, useEffect } from 'react' // Tambahkan useEffect di sini
import './Skills.css'

const skillGroups = [
  {
    category: 'Frontend',
    color: 'accent',
    skills: [
      { name: 'React JS (Vite)', level: 85, note: 'Tampilan UI Marketplace' },
      { name: 'JavaScript', level: 82, note: 'Interaktivitas Website' },
      { name: 'HTML & CSS', level: 90, note: 'Desain Responsif' },
      { name: 'PHP Native', level: 80, note: 'Web Profile & Stok Barang' },
    ],
  },
  {
    category: 'Backend & Infrastruktur', 
    color: 'green',
    skills: [
      { name: 'NestJS', level: 75, note: 'API Backend Marketplace' },
      { name: 'PHP Backend', level: 78, note: 'Logika Transaksi & Laporan' },
      { name: 'Docker', level: 70, note: 'Deployment Aplikasi' },
      { name: 'PM2', level: 72, note: 'Manajemen Local Server' },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: 'purple',
    skills: [
      { name: 'Ubuntu OS', level: 75, note: 'Konfigurasi Server' },
      { name: 'Cloudflare Tunnel', level: 68, note: 'Publikasi Server Lokal' },
      { name: 'Git & GitHub', level: 80, note: 'Manajemen Versi Kode' },
      { name: 'Microsoft Office', level: 80, note: 'Penyusunan Dokumen' },
    ],
  },
  {
    category: 'Soft Skills',
    color: 'orange',
    skills: [
      { name: 'Problem Solving', level: 85, note: 'Troubleshooting Sistem' },
      { name: 'Technical Docs', level: 88, note: 'Pembuatan How-To Doc' },
      { name: 'Fast Learner', level: 85, note: 'Riset Produk Open-Source' },
      { name: 'Team Collaboration', level: 90, note: 'Kerja Sama Tim Magang' },
    ],
  },
]

const techStack = [
  { name: 'React', category: 'frontend' },
  { name: 'Vite', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'HTML5', category: 'frontend' },
  { name: 'CSS3', category: 'frontend' },
  { name: 'PHP', category: 'frontend' },
  { name: 'NestJS', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'REST API', category: 'backend' },
  { name: 'MySQL', category: 'backend' },
  { name: 'Docker', category: 'devops' },
  { name: 'PM2', category: 'devops' },
  { name: 'Ubuntu', category: 'devops' },
  { name: 'Cloudflare', category: 'devops' },
  { name: 'Git', category: 'devops' },
  { name: 'GitHub', category: 'devops' },
  { name: 'Open-Source', category: 'research' },
  { name: 'Technical Docs', category: 'research' },
  { name: 'MS Office', category: 'tools' },
]

export default function Skills() {
  const [active, setActive] = useState('all')

  const categories = ['all', 'frontend', 'backend', 'devops', 'research', 'tools']
  const filtered = active === 'all' ? techStack : techStack.filter(t => t.category === active)

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
    <section id="skills" className="skills">
      <div className="container">
        
        <div className="reveal">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Skills &amp; Tech Stack</h2>
          <p className="section-desc" style={{ marginBottom: '3rem' }}>
            Teknologi dan alat yang saya gunakan dalam membangun solusi web yang berkualitas.
          </p>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group, gi) => (
            <div key={gi} className={`skill-group color-${group.color} reveal reveal-delay-${gi + 1}`}>
              <div className="sg-header">
                <h3 className="sg-title">{group.category}</h3>
              </div>
              <div className="sg-list">
                {group.skills.map((skill, si) => (
                  <div key={si} className="skill-item">
                    <div className="skill-meta">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-note">{skill.note}</span>
                    </div>
                    <div className="skill-bar-track">
                      <div
                        className="skill-bar-fill"
                        style={{ '--target-width': `${skill.level}%` }}
                      />
                    </div>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="tech-section reveal reveal-delay-2">
          <h3 className="tech-title">Technology Stack</h3>
          <div className="tech-filter">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="tech-badges">
            {filtered.map((t, i) => (
              <span key={i} className={`tech-badge cat-${t.category}`}>{t.name}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}