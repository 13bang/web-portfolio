import { useEffect } from 'react' 
import './Contact.css'

const contactInfo = [
  {
    label: 'Email',
    value: 'afif.putra224@gmail.com',
    href: 'mailto:afif.putra224@gmail.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
  },
  {
    label: 'Phone / WhatsApp',
    value: '+62 895-3757-06990',
    href: 'https://wa.me/62895375706990',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012.18 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Kalikotes, Klaten, Jawa Tengah, Indonesia',
    href: 'https://www.google.com/maps/search/?api=1&query=-7.718276768731192,110.62389888843148',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'Muhammad Afif Saifuddin',
    href: 'https://www.linkedin.com/in/muhammad-afif-saifuddin-4a5259346/',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Contact() {

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
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-inner">
          <div className="contact-left">
            <div className="reveal">
              <p className="section-label">Contact</p>
              <h2 className="section-title">Mari Berkolaborasi</h2>
              <p className="contact-text">
                Saya terbuka untuk peluang kerja, proyek freelance, atau sekadar berdiskusi tentang
                teknologi. Jangan ragu untuk menghubungi saya!
              </p>
            </div>

            <div className="contact-cards">
              {contactInfo.map((info, i) => (
                <a key={i} href={info.href} className={`contact-card reveal reveal-delay-${i + 1}`} target="_blank" rel="noopener noreferrer">
                  <div className="contact-card-icon">{info.icon}</div>
                  <div className="contact-card-content">
                    <span className="contact-card-label">{info.label}</span>
                    <span className="contact-card-value">{info.value}</span>
                  </div>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="contact-arrow">
                    <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-cta-card reveal reveal-delay-2">
              <div className="cta-glow" />
              <h3 className="cta-title">Download CV Saya</h3>
              <p className="cta-desc">
                Dapatkan informasi lengkap tentang pengalaman, pendidikan, dan kemampuan saya
                dalam format PDF yang siap dibaca.
              </p>
              <a href="/CV_Muhammad_Afif_Saifuddin.pdf" download className="btn-primary cta-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>
                </svg>
                Download CV (PDF)
              </a>

              <div className="cta-divider">atau</div>

              <a href="mailto:afif.putra224@gmail.com" className="btn-outline cta-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Kirim Email
              </a>

              {/* <div className="cta-note">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                Biasanya merespon dalam 1×24 jam
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}