'use client';

import { ArrowDown, ArrowUpRight, BriefcaseBusiness, Code2, Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Navbar } from './Navbar';
import { ProjectCard } from './ProjectCard';
import { Reveal } from './Reveal';
import { skills } from '@/data/skills';
import { projects } from '@/data/projects';
import { experience } from '@/data/experience';
import { education } from '@/data/education';

export function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <section id="home" className="hero section-wrap">
        <div className="hero-copy">
          <motion.div className="status-pill" initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .55 }}><span className="status-dot" /> Available for opportunities</motion.div>
          <motion.p className="hero-kicker" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .15 }}>IT GRADUATE <span>/</span> SOFTWARE DEVELOPER</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .2, duration: .7 }}>Building software<br /><em>with purpose.</em></motion.h1>
          <motion.p className="hero-lede" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .35, duration: .6 }}>I&apos;m Ongama Solange, a developer creating user-focused, scalable, and high-performance software solutions.</motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .48 }}>
            <a href="#projects" className="button button-primary">View projects <ArrowUpRight size={17} /></a>
            <a href="/ONGAMA_SOLANGE_CV.pdf" className="button button-ghost" download><Download size={16} /> Download CV</a>
          </motion.div>
          <div className="hero-meta"><span><MapPin size={15} /> Gqeberha, South Africa</span><span><Mail size={15} /> ongamasolange240@gmail.com</span></div>
        </div>
        <motion.div className="hero-art" initial={{ opacity: 0, scale: .94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: .3, duration: .9 }}>
          <div className="art-orbit orbit-one" /><div className="art-orbit orbit-two" />
          <div className="profile-placeholder"><Image src="/profile.jpeg" alt="Ongama Solange" fill sizes="(max-width: 680px) 79vw, 390px" priority /><span className="profile-caption">ONGAMA SOLANGE<br /><b>SOFTWARE DEVELOPER</b></span></div>
          <div className="floating-note note-one"><Code2 size={17} /><span>Flutter<br /><b>& Web</b></span></div>
          <div className="floating-note note-two"><Sparkles size={16} /><span>Thoughtful<br /><b>by design</b></span></div>
          <div className="art-label">01 <span>/</span> 03</div>
        </motion.div>
      </section>

      <section id="about" className="about section-wrap section-block">
        <Reveal className="section-intro"><p className="eyebrow">01 / About me</p><h2>Curious by nature.<br /><span>Precise by practice.</span></h2></Reveal>
        <Reveal delay={.1} className="about-body"><p>I&apos;m an IT graduate and software developer focused on building applications that are useful, considered, and easy to use.</p><p>My interests span application development, web development, Flutter, and data-driven software. I enjoy turning problems into clear, dependable digital experiences while continuously learning along the way.</p><div className="about-signature">OS <span>Gqeberha, SA</span></div></Reveal>
      </section>

      <section id="skills" className="skills-section section-block"><div className="section-wrap"><Reveal><p className="eyebrow">02 / Toolkit</p><div className="section-heading-row"><h2>Technologies &amp; <span>tools I use.</span></h2><p>Tools are only useful when they help make the work clearer. These are the technologies I currently build with.</p></div></Reveal><div className="skills-grid">{skills.map((skill, index) => { const Icon = skill.icon; return <Reveal key={skill.name} delay={index * .035}><div className="skill-card"><Icon size={20} strokeWidth={1.7} /><span>{skill.name}</span><small>{skill.category}</small></div></Reveal>; })}</div></div></section>

      <section id="experience" className="experience section-wrap section-block" aria-labelledby="experience-title">
        <Reveal>
          <p className="eyebrow">03 / Experience</p>
          <div className="section-heading-row">
            <h2 id="experience-title">Where I&apos;ve<br /><span>been learning.</span></h2>
            <p className="experience-summary">A concise record of my professional experience and ICT application development education.</p>
          </div>
        </Reveal>
        <div className="experience-layout">
          <div className="timeline-line" aria-hidden="true" />
          {experience.map((item) => (
            <Reveal key={`${item.company}-${item.role}`} className="experience-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="experience-period">{item.period}</div>
              <div className="experience-details">
                <p className="eyebrow">{item.company}</p>
                <h3>{item.role}</h3>
                <p>{item.description}</p>
              </div>
              <BriefcaseBusiness className="experience-icon" size={30} aria-hidden="true" />
            </Reveal>
          ))}
          {education.map((item) => (
            <Reveal key={`${item.institution}-${item.qualification}`} className="education-item">
              <div className="timeline-dot" aria-hidden="true" />
              <div className="experience-period">Education</div>
              <div className="experience-details">
                <p className="eyebrow">{item.institution}</p>
                <h3>{item.qualification}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="projects" className="projects-section section-block"><div className="section-wrap"><Reveal><p className="eyebrow">04 / Selected work</p><div className="section-heading-row"><h2>Projects with<br /><span>room to grow.</span></h2><p>A collection of portfolio projects representing my interest in useful, practical software. More work is on the way.</p></div></Reveal><div className="projects-grid">{projects.map((project, index) => <Reveal key={project.title} delay={index * .1}><ProjectCard project={project} /></Reveal>)}</div></div></section>

      <section id="contact" className="contact-section section-wrap"><Reveal><div className="contact-panel"><div><p className="eyebrow">05 / Start a conversation</p><h2>Let&apos;s make something<br /><span>useful together.</span></h2><p className="contact-copy">Open to roles and collaborative projects in software development.</p></div><a className="contact-email" href="mailto:ongamasolange240@gmail.com">ongamasolange240@gmail.com <ArrowUpRight size={21} /></a><div className="contact-mark">OS</div></div></Reveal></section>

      <footer className="footer section-wrap"><span>© {new Date().getFullYear()} Ongama Solange</span><span>Gqeberha, South Africa</span><div className="footer-links"><a href="https://github.com/Solange2000" target="_blank" rel="noreferrer">GitHub</a><a href="https://wa.me/27660423770" target="_blank" rel="noreferrer">WhatsApp</a><a href="mailto:ongamasolange240@gmail.com">Email</a><a href="#home">Back to top <ArrowDown size={14} className="back-arrow" /></a></div></footer>
    </main>
  );
}
