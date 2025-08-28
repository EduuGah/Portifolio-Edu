export interface Project {
  id: string;
  title: string;
  description: string;
  techs: string[];
  image: string;
  link?: string;
  github?: string;
  demo?: string;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'frontend' | 'backend' | 'design' | 'tools';
  level: number;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export type Theme = 'light' | 'dark';