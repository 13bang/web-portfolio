import { useEffect } from 'react'
import './About.css'

const approaches = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
    title: 'Problem Solver',
    desc: 'Selalu mencari solusi terbaik untuk setiap tantangan teknis yang dihadapi.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
    title: 'Terstruktur & Rapi',
    desc: 'Berusaha menulis baris kode yang rapi dan terorganisir agar mudah dibaca oleh rekan satu tim.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    title: 'Team Player',
    desc: 'Kolaboratif, komunikatif, dan siap bekerja dalam tim lintas divisi.',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Fast Learner',
    desc: 'Cepat beradaptasi dengan teknologi baru dan antusias mengikuti perkembangan industri.',
  },
]

export default function About() {

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
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          
          <div className="about-left reveal">
            <p className="section-label">About Me</p>
            <h2 className="section-title">Dari Baris Kode<br />Hingga Deployment</h2>
            <p className="about-text">
              Saya adalah siswa jurusan <strong>Sistem Informasi Jaringan dan Aplikasi (SIJA)</strong> di
              SMK Negeri 2 Klaten yang menaruh minat besar pada pengembangan teknologi web.
              Melalui pengalaman magang di dua tempat berbeda, saya berkesempatan untuk ikut serta membangun
              aplikasi nyata, mulai dari sistem manajemen stok hingga marketplace.
            </p>
            <p className="about-text">
              Dalam proses pengembangannya, saya memiliki pengalaman praktis menggunakan <strong>React JS (Vite), NestJS, dan PHP</strong>. 
              Selain itu, saya juga pernah mempraktikkan tahap deployment menggunakan <strong>Docker, PM2</strong>, serta <strong>Cloudflare Tunnel</strong>. 
              Saya sangat antusias untuk terus belajar dan mengeksplorasi hal-hal baru.
            </p>
            <div className="about-info">
              <div className="info-item">
                <span className="info-label">Lokasi</span>
                <span className="info-value">Klaten, Jawa Tengah</span>
              </div>
              <div className="info-item">
                <span className="info-label">Institusi</span>
                <span className="info-value">SMK Negeri 2 Klaten</span>
              </div>
              <div className="info-item">
                <span className="info-label">Program</span>
                <span className="info-value">SIJA (2022–2026)</span>
              </div>
              <div className="info-item">
                <span className="info-label">Email</span>
                <span className="info-value">afif.putra224@gmail.com</span>
              </div>
              <div className="info-item">
                <span className="info-label">Phone</span>
                <span className="info-value">+62 895-3757-06990</span>
              </div>
              <div className="info-item">
                <span className="info-label">Status</span>
                <span className="info-value status-available">
                  <span className="status-dot" />
                  Available
                </span>
              </div>
            </div>
          </div>

          <div className="about-right">
            <div className="approach-grid">
              {approaches.map((a, i) => (
                /* 3. TAMBAHAN: Masukkan class "reveal" dan "reveal-delay" di sini agar kotaknya muncul bergantian */
                <div key={i} className={`approach-card reveal reveal-delay-${i + 1}`}>
                  <div className="approach-icon">{a.icon}</div>
                  <h4 className="approach-title">{a.title}</h4>
                  <p className="approach-desc">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}