export interface Project {
  number: string;
  title: string;
  description: string;
  technologies: string[];
  accent: string;
  availableLinks?: { github?: string; demo?: string };
}

export const projects: Project[] = [
  {
    number: '01',
    title: 'Ongama Solange Portfolio',
    description: 'A responsive personal portfolio for presenting software development work, experience, and contact details.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    accent: 'blue',
    availableLinks: { github: 'https://github.com/Solange2000/ongama-solange-portfolio' },
  },
  {
    number: '02',
    title: 'VW YES Trainee Training Tracker',
    description: 'Training tracker for new trainees.',
    technologies: ['JavaScript'],
    accent: 'coral',
    availableLinks: { github: 'https://github.com/Solange2000/Training-tracker' },
  },
];
