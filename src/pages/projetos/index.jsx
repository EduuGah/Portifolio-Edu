import './style.css';
import projeto1 from '../../assets/projeto1.png';
import projeto2 from '../../assets/projeto2.png';
import projeto3 from '../../assets/projeto3.png';
import github from '../../assets/github.png'
import link from '../../assets/link.png';


function Projetos() {
  const projetos = [
    {
      imagem: projeto1,
      titulo: 'Portfólio Pessoal',
      descricao: 'Projeto pessoal criado em React com foco em responsividade e organização.',
      github: 'https://github.com/EduuGah/Portifolio-Edu',
      vercel: 'https://edugah.com.br/'
    },
    {
      imagem: projeto2,
      titulo: 'FUTURO PROJETO',
      descricao: 'Landing page fictícia de um produto, desenvolvida com HTML, CSS e JavaScript puro.'
    },
    {
      imagem: projeto3,
      titulo: 'FUTURO PROJETO',
      descricao: 'Clone da interface do Netflix, usando React + Styled Components.'
    }
  ];

  return (
    <section id='projetos' className='projetos'>
      <div className="projetos-content">
        <h1><span>Projetos</span></h1>
        <div className="projetos-grid">
          {projetos.map((projeto, i) => (
            <div className="card-projeto" key={i}>
              <img src={projeto.imagem} alt={`Projeto ${i}`} />
              <h2>{projeto.titulo}</h2>
              <p>{projeto.descricao}</p>
              <div className="footer">
                <a href={projeto.github} target="_blank" rel="noopener noreferrer">
                  <img src={github} alt="link Repositório" />
                  <span>GitHub</span>
                </a>
                <a href={projeto.vercel} target="_blank" rel="noopener noreferrer">
                  <img src={link} alt="" />
                  <span>Site</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projetos;
