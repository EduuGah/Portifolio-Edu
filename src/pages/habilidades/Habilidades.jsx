import './style.css';
import htmlIcon from '../../assets/htmlIcon.png';
import cssIcon from '../../assets/cssIcon.png';
import jsIcon from '../../assets/JavaScriptIcon.png';
import reactIcon from '../../assets/reactJsIcon.png';
import python from '../../assets/pythonIcon.png';
import figma from '../../assets/figmaIcon.png';
import { useState } from 'react';

function Habilidades() {
  const [descricaoIndex, setDescricaoIndex] = useState(null);
  const [animKey, setAnimKey] = useState(0);

  const handleMouseEnter = (i) => {
    setDescricaoIndex(i);
    setAnimKey((k) => k + 1);
  };
  const handleMouseLeave = () => {
    setDescricaoIndex(null);
    setAnimKey((k) => k + 1);
  };


  const descricoes = [
    'HTML foi uma das primeiras coisas que aprendi, junto com CSS e JS.',
    'CSS me ajuda a estilizar e dar vida aos projetos web.',
    'JavaScript foi minha porta de entrada para a lógica de programação.',
    'Python é intuitiva, gosto de aprender e trabalhar com ela.',
    'React me permite criar interfaces web de forma rápida e eficiente.',
    'Figma é a ferramenta que uso para criar e planejar meus designs.',
  ];

  const icons = [
    { src: htmlIcon, alt: 0 },
    { src: cssIcon, alt: 1 },
    { src: jsIcon, alt: 2 },
    { src: python, alt: 3 },
    { src: reactIcon, alt: 4 },
    { src: figma, alt: 5 },
  ];

  return (
    <section id='habilidades' className='habilidades'>
      <div className="habilidades-content">
        <div className="containerHabilidades">
          <div id="habilidadesTexto">
            <h1><span>Habilidades</span></h1>
            <div className="descricao-wrapper">
              <p id="descricao">
                {descricaoIndex === null
                  ? '*Passe o mouse sobre o ícone*'
                  : descricoes[descricaoIndex]}
              </p>
            </div>
          </div>

          <div className="iconsHabilidades">
            {icons.map((icon, i) => (
              <div
                className={`icon ${descricaoIndex !== null && descricaoIndex !== i ? 'scaled-down' : ''
                  }`}
                key={i}
                onMouseEnter={() => setDescricaoIndex(i)}
                onMouseLeave={() => setDescricaoIndex(null)}
              >
                <img src={icon.src} alt={i.toString()} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Habilidades;
