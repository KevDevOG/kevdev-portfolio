export type Project = {
  id: string;
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  status: 'completed' | 'in-progress' | 'planned';
  featured: boolean;
  technologies: string[];
  features: string[];
  learnings: string[];
  demoUrl?: string;
  githubUrl?: string;
  image?: string;
};

export type StackItem = {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'tools' | 'deployment' | 'methodology';
  level?: 'learning' | 'practicing' | 'comfortable';
  description?: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
  tags?: string[];
};

export type MethodStep = {
  stepNumber: number;
  title: string;
  description: string;
};
