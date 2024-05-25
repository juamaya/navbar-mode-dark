import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
 
import { loadSlim } from "@tsparticles/slim";  

 

import particlesConfig from './particles-config'

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
      
          await loadSlim(engine);
       
        }).then(() => {
          setInit(true);
        });
      }, []);
    
      const particlesLoaded = (container) => {
       // console.log(container);
      };
    
      const options = useMemo(
        () => (particlesConfig
      ),
        [],
      );
    
      if (init) {
        return (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
          />
        );
      }
}

export default ParticlesBackground