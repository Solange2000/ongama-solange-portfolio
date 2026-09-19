'use client';

import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav-shell">
      <nav className="nav-inner" aria-label="Main navigation">
        <a href="#home" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">OS</span>
          <span>Ongama Solange</span>
        </a>
        <div className="desktop-links">
          {links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}
        </div>
        <a className="nav-contact" href="mailto:ongamasolange240@gmail.com">
          Get in touch <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && <div className="mobile-menu">{links.map((link) => <a key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</a>)}</div>}
    </header>
  );
}
