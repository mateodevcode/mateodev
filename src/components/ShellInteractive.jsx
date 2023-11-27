import React from 'react';
import Typed from 'typed.js';

 export function TypeNombres() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Hola, Soy <strong>Mateo Lizcano</strong>', 'Profesional en <strong>Negocios y Dirección de empresas</strong>', '<strong>Desarrollador Web y Android</strong>', 'y amante de la <strong>Ciberseguridad</strong>', '<strong>MateoDev</strong>'],
      typeSpeed: 80,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el} />
    </div>
  );
}


export function TypeDescripcion() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['MateoDev es solo el reflejo profesional de toda mi trayectoria, un espacio donde podrás ver mis proyectos y disfrutar del aprendizaje que brindamos a través de todos los recursos obtenidos de esta comunidad.'],
      typeSpeed: 50,
      startDelay: 20000,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el} />
    </div>
  );
}


export function TypeBinary() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['01101110 01100101 01110100 01110011 01101000 00100000 01110111 01101100 01100001 01101110 00100000 01100101 01111000 01110000 01101111 01110010 01110100 00100000 01110000 01110010 01101111 01100110 01101001 01101100 01100101 00100000 01101011 01100101 01111001 00111101 01100011 01101100 01100101 01100001 01110010'],
      typeSpeed: 5,
      startDelay: 1000*200,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div>
      <span ref={el} />
    </div>
  );
}
