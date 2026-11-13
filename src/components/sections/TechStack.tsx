import { siAngular, siApachekafka, siDocker, siOpenjdk, siPostgresql, siPython, siRabbitmq, siReact, siRedis, siSpringboot, siTypescript } from 'simple-icons';
import BoxyAppIcons, { type BoxyTech } from '../ui/boxy-app-icons';

type Tech = BoxyTech;

const primary: Tech[] = [
  { name: 'Java', icon: siOpenjdk }, { name: 'React', icon: siReact }, { name: 'Python', icon: siPython },{ name: 'Spring Boot', icon: siSpringboot }, { name: 'TypeScript', icon: siTypescript }, 
  { name: 'Angular', icon: siAngular }, { name: 'PostgreSQL', icon: siPostgresql }, { name: 'Docker', icon: siDocker },
  { name: 'RabbitMQ', icon: siRabbitmq }, { name: 'AWS' },{ name: 'Redis', icon: siRedis },{ name: 'Apache Kafka', icon: siApachekafka },  
];

export function TechStack() {
  return <section id="tech-stack" className="tech-section"><div className="tech-inner">
    <div className="eyebrow">04 / Tech Stack</div>
    <h2 className="tech-title">Tools I work with</h2>
    <p className="tech-intro">A practical stack built around reliable backend systems, modern web applications and AI-powered solutions.</p>
    <div className="tech-stage"><BoxyAppIcons technologies={primary} /></div>
  </div></section>;
}
