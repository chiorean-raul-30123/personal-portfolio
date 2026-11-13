import { SqueezeCarousel } from '../ui/carousel-squeeze';
import { projects } from '../../data/projects';

export function Projects() {
  const slides = projects.map((project) => ({
    id: project.id,
    title: project.title,
    description: project.description,
    image: project.image,
    images: project.images,
    objectPosition: project.objectPosition,
    imageScale: project.imageScale,
    imageAlt: project.imageAlt,
    background: 'linear-gradient(135deg, #321018, #09090b 72%)',
    overlay: <span className="project-overlay"><strong>{project.name}</strong>{project.status && <small>IN PROGRESS</small>}</span>,
  }));

  return <section id="projects" className="projects-section"><div className="projects-inner">
    <div className="projects-heading-row"><h2 className="projects-title">Featured work</h2><div className="eyebrow projects-eyebrow">02 / Projects</div></div>
    <p className="projects-intro">A selection of systems, platforms and experiments in progress.</p>
    <SqueezeCarousel slides={slides} label="Featured projects" height="clamp(220px, 34vw, 360px)" gap={12} slatGap={6} radius={18} accent="#b5493c" accentForeground="#f7ebdd" panelClassName="project-panel" className="project-carousel" />
  </div></section>;
}
