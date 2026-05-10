import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="logo-bracket">&lt;</span>
          <span className="logo-text">Apip</span>
          <span className="logo-bracket">/&gt;</span>
        </div>
        <p className="footer-copy">
          © {year} Muhammad Afif Saifuddin.
        </p>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  )
}
