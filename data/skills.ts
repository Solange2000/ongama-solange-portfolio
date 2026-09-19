import type { LucideIcon } from 'lucide-react';
import { Braces, Database, GitBranch, Globe, Layers3, Server, Smartphone, Terminal } from 'lucide-react';

export interface Skill {
  name: string;
  category: string;
  icon: LucideIcon;
}

export const skills: Skill[] = [
  { name: 'Flutter', category: 'Mobile', icon: Smartphone },
  { name: 'Dart', category: 'Mobile', icon: Braces },
  { name: 'Java', category: 'Languages', icon: Terminal },
  { name: 'JavaScript', category: 'Web', icon: Globe },
  { name: 'C#', category: 'Languages', icon: Braces },
  { name: 'SQL', category: 'Data', icon: Database },
  { name: 'HTML5', category: 'Web', icon: Globe },
  { name: 'CSS3', category: 'Web', icon: Layers3 },
  { name: 'Oracle APEX', category: 'Platforms', icon: Server },
  { name: 'Firebase', category: 'Data', icon: Database },
  { name: 'Git', category: 'Tools', icon: GitBranch },
];
