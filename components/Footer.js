import Link from "next/link"

export default function Footer() {
  return (

<footer className="footer">

<div className="container footer-grid">

{/* COMPANY */}

<div className="footer-brand">

<h3 className="footer-logo">
Pearls IT Hub
</h3>

<p className="footer-desc">
Building scalable software solutions that power modern businesses.
</p>

<div className="footer-social">

<a href="#">📘</a>
<a href="#">🐦</a>
<a href="#">💼</a>

</div>

</div>


{/* SERVICES */}

<div>

<h4 className="footer-title">Services</h4>

<ul className="footer-links">

<li><Link href="/services">Web Development</Link></li>
<li><Link href="/services">SaaS Platforms</Link></li>
<li><Link href="/services">UI/UX Design</Link></li>
<li><Link href="/services">API Development</Link></li>

</ul>

</div>


{/* COMPANY */}

<div>

<h4 className="footer-title">Company</h4>

<ul className="footer-links">

<li><Link href="/about">About</Link></li>
<li><Link href="/projects">Projects</Link></li>
<li><Link href="/blog">Blog</Link></li>
<li><Link href="/careers">Careers</Link></li>

</ul>

</div>


{/* CONTACT */}

<div>

<h4 className="footer-title">Contact</h4>

<div className="footer-contact">

<p>pearlsithub.in@gmail.com</p>
<p>+91 8015613840</p>
<p>Chennai, Tamil Nadu</p>

</div>

</div>

</div>


{/* BOTTOM */}

<div className="footer-bottom">

<p>
© 2026 Pearls IT Hub. All rights reserved. 
</p>

</div>

</footer>

  )
}