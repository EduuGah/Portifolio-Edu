import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './pages/sobreMim'
import Habilidades from './pages/habilidades/Habilidades.jsx'
import Projetos from './pages/projetos/index.jsx'
import Contato from './pages/contato/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index />
    <Habilidades />
    <Projetos />
    <Contato />
  </StrictMode>,
)
