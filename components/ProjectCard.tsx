import { ArrowUpRight, Github } from 'lucide-react';
import type { Project } from '@/data/projects';

const accentStyles = {
  coral: 'project-visual coral',
  blue: 'project-visual blue',
  yellow: 'project-visual yellow',
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className={accentStyles[project.accent as keyof typeof accentStyles]}>
        <span className="project-number">{project.number}</span>
        <div className="visual-window"><span /><span /><span /></div>
        <div className="visual-lines"><i /><i /><i /></div>
      </div>
      <div className="project-content">
        <p className="eyebrow">Selected work</p>
        <h3>{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="project-links">
          {project.availableLinks?.github && <a href={project.availableLinks.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub</a>}
          {project.availableLinks?.demo && <a href={project.availableLinks.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={16} /></a>}
          {!project.availableLinks && <span className="quiet-link">Portfolio project</span>}
        </div>
      </div>
    </article>
  );
}
