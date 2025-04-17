import './style.css';
import { useState } from 'react';

function Contato() {
  const [copiado, setCopiado] = useState(false);

  const copiarEmail = () => {
    navigator.clipboard.writeText('edugah1809@gmail.com')
      .then(() => {
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2000); 
      });
  };

  return (
    <section id='contato'>
      <footer className="footer">
        <span>edugah1809@gmail.com</span>
        <button onClick={copiarEmail} className='botaoCopiar'>
          {copiado ? 'Copiado!' : 'Copiar'}
        </button>
      </footer>
    </section>
  );
}

export default Contato;
