import type { SimpleIcon } from 'simple-icons';

export type BoxyTech = { name: string; icon?: SimpleIcon };

export default function BoxyAppIcons({ technologies }: { technologies: BoxyTech[] }) {
  return (
    <div className="boxy-icons" aria-label="Primary technologies">
      {technologies.map((technology) => (
        <div key={technology.name} className="boxy-icon-item" tabIndex={0} aria-label={technology.name}>
          <div className="boxy-icon-block">
            {technology.icon ? <svg viewBox="0 0 24 24" aria-hidden="true"><path d={technology.icon.path} /></svg> : <b>AWS</b>}
          </div>
          <span>{technology.name}</span>
        </div>
      ))}
    </div>
  );
}
