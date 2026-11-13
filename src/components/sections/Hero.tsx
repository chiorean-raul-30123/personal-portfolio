import SilkMeshShaderHero from '../ui/silk-mesh-shader-hero';
import { About } from './About';

export function Hero() {
  return (
    <div id="home" className="relative z-0">
      <SilkMeshShaderHero
        title={'SOFTWARE DEVELOPER'}
        primaryCta={{ label: 'Explore Projects', href: '#projects' }}
        secondaryCta={{ label: 'Get in Touch', href: '#contact' }}
        caption={'SPRING BOOT • Angular\nMICROSERVICES • AI'}
        palette="claret"
        height="auto"
        className="smh-shared-stage"
      >
        <About />
      </SilkMeshShaderHero>
    </div>
  );
}
