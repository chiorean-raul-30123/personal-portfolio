export type ProjectStatus = 'In progress';

export interface Project {
  id: string;
  name: string;
  title: string;
  description: string;
  technologies: string[];
  status?: ProjectStatus;
  image: string;
  images?: string[];
  imageAlt: string;
  objectPosition?: string;
  imageScale?: number;
}
