import { motion, useReducedMotion } from 'motion/react';
import { useState } from 'react';
import profileImage from '../../assets/images/profile.jpg';

const paragraphs = [
  "I’m Raul Chiorean, a software engineer based in Cluj-Napoca, Romania. I build backend services and full-stack applications with Java, Spring Boot and PostgreSQL, and I enjoy working on the parts of a system that need to be reliable: APIs, data consistency, testing and secure authentication.",
  "I recently completed a degree in Automation at the Technical University of Cluj-Napoca. Professionally, I work as a Java Developer at Endava, where I’ve focused on REST API performance, SQL optimization and test coverage in a Scrum team.",
  "Outside work, I’m building a full-stack booking platform for a vacation rental property. It’s a hands-on project where I make the design decisions myself, from reservation logic and idempotent payments to authentication and deployment.",
  "I’m always happy to talk about backend architecture, Spring Boot or interesting engineering problems.",
];

export function About() {
  const shouldReduceMotion = useReducedMotion();
  const [hasImage, setHasImage] = useState(true);
  const reveal = shouldReduceMotion ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0 } } : { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

  return <section id="about" className="about-section"><div className="about-transition" aria-hidden="true" /><div className="about-inner">
    <motion.div className="about-photo-wrap" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={reveal} transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}>
      {hasImage ? <img className="about-photo" src={profileImage} alt="Raul Chiorean" onError={() => setHasImage(false)} /> : <div className="about-photo-placeholder"><span>RC</span><small>Add profile.jpg</small></div>}
    </motion.div>
    <motion.div className="about-copy" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.08 } } }}>
      <motion.div className="eyebrow" variants={reveal}>01 / About Me</motion.div>
      <motion.h2 className="about-title" variants={reveal}>A little about me.</motion.h2>
      <div className="about-body">{paragraphs.map((paragraph) => <motion.p key={paragraph} variants={reveal}>{paragraph}</motion.p>)}</div>
    </motion.div>
  </div></section>;
}
