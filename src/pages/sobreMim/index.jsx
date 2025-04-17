import './style.css'
import foto from '../../assets/icon.png'
import github from '../../assets/github.png'
import instagram from '../../assets/instagram.png'
import PurpleParticles from '../particulas/PurpleParticles';


function App() {
  return (
    <>

      <PurpleParticles />
      <div className="container">
        {    <div className="container">
      <div className="navbar">
        <a href="#sobremim">Sobre Mim</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a> 
      </div>     

      <section id='sobremim' className='sobreMim'>
  <div className='sobreMim-content'>
    <div id="sobreMimTexto">
      <span>Quem sou?</span>
      <h1><span className="typewriter">Carlos Eduardo</span></h1>
      <p id="sobreMimDescricao">
        Estudante de ADS, cursando 1º semestre na Unip (Universidade Paulista), iniciando sua carreira no mundo da programação.
      </p>
      <p>
        Atualmente focando estudos em Front-End, usando HTML, CSS, e JavaScript como base, utilizando também tecnologias como NextJs e Figma para auxiliar no processo.
      </p>
    </div>

    <div className="fotoElinks">
    <img src={foto} alt="fotoEdu" className='fotoEdu'/>
      <div className="links">
        <a href="https://github.com/eduugah" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
          <span>EduuGah</span>
        </a>
        <a href="https://instagram.com/eduugah" target="_blank" rel="noopener noreferrer">
          <img src={instagram} alt="Instagram" />
          <span>@Eduugah</span>
        </a>
      </div>
    </div>
  </div>
</section>

    </div>}
      </div>
    </>
  )
}

export default App
