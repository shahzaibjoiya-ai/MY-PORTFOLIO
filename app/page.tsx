import Image from 'next/image';
import profileImage from './public/IMG_20260608_074522.jpg';

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Muhammad Shahzaib Asghar home"><span className="brand-mark">MSA</span><span>Shahzaib Asghar</span></a>
        <div className="nav-links"><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <a className="nav-availability" href="#contact"><span /> Available for work</a>
      </nav>

      <section className="hero section-shell" id="top">
        <div className="hero-copy"><p className="eyebrow"><span className="eyebrow-line" /> Software Engineer / 01</p><h1>Building digital<br /><em>experiences</em> that<br />move people.</h1><p className="hero-intro">I&apos;m Muhammad Shahzaib Asghar, a software engineer focused on thoughtful products, clean interfaces, and code that lasts.</p><div className="hero-actions"><a className="button button-primary" href="#work">See my work <span className="arrow">&#8599;</span></a><a className="text-link" href="#contact">Let&apos;s talk <span>&#8594;</span></a></div></div>
        <div className="hero-visual" aria-label="Photo of Muhammad Shahzaib Asghar"><div className="photo-placeholder"><Image src={profileImage} alt="Muhammad Shahzaib Asghar" className="photo-image" priority /></div><div className="visual-note note-top">Based in Pakistan<br /><strong>Available worldwide</strong></div><div className="visual-note note-bottom">Scroll to explore <span>&#8595;</span></div><div className="orbit orbit-one" /><div className="orbit orbit-two" /></div>
      </section>

      <section className="ticker" aria-label="Skills and technologies"><div className="ticker-track"><span>HTML</span><b>+</b><span>CSS</span><b>+</b><span>JAVASCRIPT</span><b>+</b><span>DART</span><b>+</b><span>NEXT.JS</span><b>+</b><span>NEST.JS</span><b>+</b><span>NODE.JS</span><b>+</b><span>FLUTTER</span></div></section>

      <section className="work-section section-shell" id="work"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> Selected work / 02</p><h2>A few things<br /><em>I&apos;ve built.</em></h2></div><div className="project-grid">
        <article className="project-card"><div className="project-art quran-art"><span className="art-star">✦</span><svg className="arabic-shape" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4 6.75A2.75 2.75 0 0 1 6.75 4H19v12.75A2.75 2.75 0 0 0 16.25 14H6.75A2.75 2.75 0 0 0 4 16.75zm2.75-1.5a1.25 1.25 0 0 0-1.25 1.25v9.5c0 .69.56 1.25 1.25 1.25h9.5a1.25 1.25 0 0 1-1.25-1.25V6.75a1.25 1.25 0 0 0-1.25-1.25h-7.5zm2.25 3.25h4.5M9.5 11h6.75M9.5 15h6.75" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="art-label">QURAN<br />MAJEED</span></div><div className="project-meta"><span>01 / Mobile app</span><span>Flutter · Dart</span></div><h3>Quran Majeed</h3><p>A focused, peaceful reading experience built for daily connection and reflection.</p><a className="https://github.com/shahzaibjoiya-ai/QuranMajeedApp" href="https://github.com/shahzaibjoiya-ai/QuranMajeedApp" target="_blank" rel="noreferrer">View project <span>&#8599;</span></a></article>
        <article className="project-card"><div className="project-art shop-art"><span className="shop-word">SHOP<br /><i>better.</i></span><span className="shop-bag">◒</span></div><div className="project-meta"><span>02 / Web app</span><span>Next.js · Node.js</span></div><h3>E-commerce web app</h3><p>A considered storefront experience that keeps browsing simple and buying effortless.</p><a className="https://github.com/shahzaibjoiya-ai/E-commerce-Web-App" href="https://github.com/shahzaibjoiya-ai/E-commerce-Web-App" target="_blank" rel="noreferrer">View project <span>&#8599;</span></a></article>
        <article className="project-card"><div className="project-art calc-art"><div className="calc-display">2,024<span>=</span></div><div className="calc-keys"><i>+</i><i>-</i><i>×</i><i>÷</i><i>7</i><i>8</i><i>9</i><i>=</i></div></div><div className="project-meta"><span>03 / Utility app</span><span>Flutter · Dart</span></div><h3>Calculator app</h3><p>Simple, speedy, and satisfying. A utility app where every detail earns its place.</p><a className="https://github.com/shahzaibjoiya-ai/Calculator-App" href="https://github.com/shahzaibjoiya-ai/Calculator-App" target="_blank" rel="noreferrer">View project <span>&#8599;</span></a></article>
      </div></section>

      <section className="about-section section-shell" id="about"><div className="section-heading"><p className="eyebrow"><span className="eyebrow-line" /> The person behind the code / 03</p><h2>Curious by nature.<br /><em>Precise by craft.</em></h2></div><div className="about-content"><p className="about-lead">I care about the space where design meets engineering. The best products feel obvious in your hands, even when the thinking behind them is anything but.</p><div className="skills-list"><div><span>Languages</span><p>HTML, CSS, JavaScript, Dart</p></div><div><span>Frameworks</span><p>Next.js, Nest.js, Node.js</p></div><div><span>Databases</span><p>PostgreSQL, SQL, Firebase</p></div><div><span>Tools</span><p>VS Code, Android Studio, Git, GitHub</p></div></div></div></section>

      <section className="contact-section" id="contact"><div><p className="eyebrow"><span className="eyebrow-line" /> Have a project in mind? / 04</p><h2>Let&apos;s make<br /><em>something good.</em></h2></div><div className="contact-side"><p>Have an idea that needs a sharp digital home? I&apos;d love to hear about it.</p><a className="button button-light" href="mailto:shahzaibjoiya572@gmail.com">Start a conversation <span className="arrow">&#8599;</span></a><span className="contact-email">shahzaibjoiya572@gmail.com</span></div></section>

      <footer className="site-footer"><span>&copy; 2024 Muhammad Shahzaib Asghar</span><span>Designed &amp; built with intention</span><div className="footer-links"><a href="#top">Back to top &#8593;</a><a href="https://github.com/shahzaibjoiya-ai/" target="_blank" rel="noreferrer">GitHub &#8599;</a></div></footer>
    </main>
  );
}
