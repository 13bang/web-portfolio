import { useEffect } from 'react'
import './Experience.css'

const experiences = [
  {
    role: 'Web Developer Intern',
    company: 'Anandam Computer',
    period: 'Nov 2025 – Mei 2026',
    type: 'Internship',
    color: 'accent',
    tasks: [
      'Merancang dan membangun website manajemen persediaan stok barang menggunakan PHP dan JavaScript, dilengkapi fitur pelaporan transaksi penjualan dan pembelian.',
      'Mengembangkan website company profile yang responsif untuk klien eksternal — supergaming.id dan mitragamacomputer.com berbasis PHP.',
      'Membangun website marketplace Anandam dengan arsitektur modern menggunakan React JS (Vite) pada frontend dan NestJS pada backend.',
      'Menjalankan infrastruktur deployment backend pada server lokal menggunakan PM2 dan Cloudflare Tunnel.',
    ],
    tags: ['React JS (Vite)', 'NestJS', 'PHP', 'JavaScript', 'PM2', 'Cloudflare Tunnel'],
  },
  {
    role: 'System Engineer Intern',
    company: 'PT Malifax Indonesia',
    period: 'Mei 2025 – Nov 2025',
    type: 'Internship',
    color: 'purple',
    tasks: [
      'Melakukan riset dan evaluasi produk open-source — mulai dari instalasi, konfigurasi sistem, hingga uji coba fungsionalitas fitur secara menyeluruh.',
      'Mengembangkan kapabilitas produk open-source melalui integrasi sistem dengan aplikasi atau layanan pihak ketiga.',
      'Menyusun dokumentasi teknis komprehensif (how-to document) mencakup panduan instalasi dan penjabaran operasional dari setiap fitur produk hasil riset.',
    ],
    tags: ['Open-Source Research', 'System Configuration', 'Technical Documentation', 'Integration'],
  },
]

const education = {
  school: 'SMK Negeri 2 Klaten',
  major: 'Sistem Informasi Jaringan dan Aplikasi (SIJA)',
  period: 'Jul 2022 – Mei 2026',
  desc: 'Program keahlian 4 tahun dengan fokus pada infrastruktur jaringan, administrasi sistem, dan pengembangan perangkat lunak.',
  highlights: ['Web Development', 'Network Infrastructure', 'System Administration', 'Software Engineering'],
}

export default function Experience() {
  
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
    <section id="experience" className="experience">
      <div className="container">
        
        <div className="exp-header reveal">
          <p className="section-label">Career</p>
          <h2 className="section-title">Pengalaman & Pendidikan</h2>
          <p className="section-desc">
            Melalui pendidikan di SMK dan kesempatan magang di industri, saya banyak belajar mempraktikkan teori ke dalam proyek nyata, mulai dari pembuatan website hingga pengelolaan sistem.
          </p>
        </div>

        <div className="exp-layout">
          {/* Work Experience */}
          <div className="exp-column">
            {/* Animasi untuk Judul Kolom */}
            <h3 className="column-title reveal reveal-delay-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
              </svg>
              Pengalaman Kerja
            </h3>

            <div className="timeline">
              {experiences.map((exp, i) => (
                <div key={i} className={`timeline-item color-${exp.color} reveal reveal-delay-${i + 2}`}>
                  <div className="timeline-dot" />
                  <div className="timeline-card">
                    <div className="tc-header">
                      <div className="tc-meta">
                        <span className="tc-type">{exp.type}</span>
                        <span className="tc-period">{exp.period}</span>
                      </div>
                      <h4 className="tc-role">{exp.role}</h4>
                      <p className="tc-company">{exp.company}</p>
                    </div>
                    <ul className="tc-tasks">
                      {exp.tasks.map((t, j) => (
                        <li key={j}>{t}</li>
                      ))}
                    </ul>
                    <div className="tc-tags">
                      {exp.tags.map(tag => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="exp-column">
            <h3 className="column-title reveal reveal-delay-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Pendidikan
            </h3>

            <div className="edu-card reveal reveal-delay-3">
              <div className="edu-period">{education.period}</div>
              <h4 className="edu-school">{education.school}</h4>
              <p className="edu-major">{education.major}</p>
              <p className="edu-desc">{education.desc}</p>
              <div className="edu-highlights">
                {education.highlights.map(h => (
                  <span key={h} className="tag">{h}</span>
                ))}
              </div>
            </div>

            <div className="exp-timeline-visual reveal reveal-delay-4">
              <div className="timeline-bar">
                <div className="bar-label">
                  <span>Jul 2022</span>
                  <span>Mei 2026</span>
                </div>
                <div className="bar-track">
                  <div className="bar-edu" title="SMKN 2 Klaten" />
                  <div className="bar-gap" />
                  <div className="bar-intern1" title="PT Malifax" />
                  <div className="bar-gap" />
                  <div className="bar-intern2" title="Anandam Computer" />
                </div>
                <div className="bar-legend">
                  <span><i style={{background:'var(--green)'}} />SMK</span>
                  <span><i style={{background:'var(--accent-2)'}} />PT Malifax</span>
                  <span><i style={{background:'var(--accent)'}} />Anandam</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}