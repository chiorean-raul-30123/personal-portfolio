import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const contacts = [
  { label: 'Email', value: 'raulg2656@gmail.com', href: 'mailto:raulg2656@gmail.com' },
  { label: 'GitHub', value: 'github.com/chiorean-raul-30123', href: 'https://github.com/chiorean-raul-30123', external: true },
  { label: 'LinkedIn', value: 'linkedin.com/in/raul-chiorean-003039337', href: 'https://linkedin.com/in/raul-chiorean-003039337', external: true },
  { label: 'Location', value: 'Cluj-Napoca, Romania' },
];

export function LetsWorkTogether() {
  const [isClicked, setIsClicked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  return <div className="contact-interaction">
    <div className={`contact-initial ${isClicked ? 'is-hidden' : ''}`} aria-hidden={isClicked}>
      <div className="contact-availability"><span /> OPEN TO CONVERSATIONS</div>
      <button className="contact-trigger" type="button" onClick={() => setIsClicked(true)} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}><span className="contact-heading">Let&apos;s work<br /><em>together</em></span><span className={`contact-arrow ${isHovered ? 'is-hovered' : ''}`}><ArrowUpRight size={28} strokeWidth={1.3} /></span></button>
      <p className="contact-description">Have an interesting engineering problem, a project idea, or just want to talk about backend architecture, Spring Boot or AI? Let&apos;s connect.</p><span className="contact-email">raulg2656@gmail.com</span>
    </div>
    <div className={`contact-revealed ${isClicked ? 'is-visible' : ''}`} aria-live="polite" aria-hidden={!isClicked}><span className="contact-revealed-label">CONTACT</span><h2>Let&apos;s talk</h2><div className="contact-list">{contacts.map((contact) => contact.href ? <a key={contact.label} href={contact.href} target={contact.external ? '_blank' : undefined} rel={contact.external ? 'noopener noreferrer' : undefined}><span><small>{contact.label}</small>{contact.value}</span><ArrowUpRight size={18} strokeWidth={1.4} /></a> : <div key={contact.label}><span><small>{contact.label}</small>{contact.value}</span></div>)}</div></div>
  </div>;
}
