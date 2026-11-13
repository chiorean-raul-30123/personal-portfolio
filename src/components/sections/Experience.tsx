import PigmentExperienceLedger from '../ui/pigment-experience-ledger';

const items = [
  { company: 'Endava', role: 'Java Developer', years: 'current', location: 'Cluj-Napoca, Romania', summary: ['Java Developer with a focus on backend development, REST APIs, SQL optimization, testing and reliable software delivery.'], tags: ['Java', 'Spring Boot', 'REST APIs', 'SQL', 'Testing', 'Scrum'] },
  { company: 'Our Cozy Place', role: 'Full-Stack Developer · IN PROGRESS', years: 'current', location: 'Cluj-Napoca, Romania', summary: ['Independent full-stack development of a vacation rental booking platform, including frontend design, backend services, reservation logic, authentication, payment integration and deployment.'], tags: ['Angular', 'Spring Boot', 'PostgreSQL', 'REST APIs', 'Docker', 'Netopia'] },
  { company: 'AWS Cloud Practitioner', role: 'COURSE COMPLETED · EXAM UPCOMING', years: 'learning', location: 'Online', summary: ['Completed the AWS Cloud Practitioner training course and received a course completion certificate. Preparing for the AWS Certified Cloud Practitioner examination.'], tags: ['AWS', 'Cloud Fundamentals', 'Cloud Architecture', 'Security', 'Pricing', 'Core AWS Services'] },
];

export function Experience() {
  return <section id="experience" className="experience-section"><div className="experience-inner">
    <div className="experience-heading-row"><h2 className="experience-title">Experience &amp; learning</h2><div className="eyebrow experience-eyebrow">03 / Experience</div></div>
    <p className="experience-intro">A focused record of professional work, independent development and continued learning.</p>
    <PigmentExperienceLedger items={items} heading="" intro="" palette="mono" colors={['#16050a', '#5e1120', '#b5493c']} background="#08090b" ink="#f5f1e8" strength={0.62} defaultOpen={0} minHeight="auto" cta={{ label: 'Download Resume', href: '/assets/docs/raul-chiorean-cv.pdf', target: '_blank', download: 'raul-chiorean-cv.pdf' }} className="experience-pigment" />
  </div></section>;
}
