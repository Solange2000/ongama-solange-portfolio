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
    title: 'TaskFlow Mobile App',
    description: 'Cross-platform productivity app for managing tasks with real-time sync and user authentication.',
    technologies: ['Flutter', 'Firebase', 'Dart'],
    accent: 'coral',
  },
  {
    number: '02',
    title: 'Student Portal Web',
    description: 'Web application for course management and student enrolment with SQL database backend.',
    technologies: ['JavaScript', 'SQL', 'HTML5', 'CSS3'],
    accent: 'blue',
  },
  {
    number: '03',
    title: 'Inventory System',
    description: 'Desktop application for inventory tracking, stock management and reporting.',
    technologies: ['C#', 'SQL', '.NET'],
    accent: 'yellow',
  },
];
