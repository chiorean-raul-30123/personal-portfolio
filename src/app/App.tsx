import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';
import { TechStack } from '../components/sections/TechStack';
import { Experience } from '../components/sections/Experience';
import { Contact } from '../components/sections/Contact';
import { useLenis } from '../hooks/useLenis';

export default function App() {
  useLenis();
  return <><Navbar /><main><Hero /><Projects /><Experience /><TechStack /><Contact /></main><Footer /></>;
}
