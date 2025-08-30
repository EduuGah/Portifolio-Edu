import { Project } from '../types';
import projeto1 from '../photos/Projeto1.png'
export const projects: Project[] = [
  {
    id: '1',
    title: 'Previsão do Tempo',
    description: 'Aplicativo de previsão do tempo para cidades do Brasil, com busca em tempo real, sugestões de cidades e exibição de temperatura, vento, umidade e descrição do clima.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'API OpenWeatherMap', 'API IBGE'],
    image: projeto1,
    github: 'https://github.com/EduuGah/previsao-tempo',
    demo: 'https://previsao-tempo-smoky.vercel.app/'
  },
  {
    id: '2',
    title: 'API REST em Python',
    description: 'API REST completa desenvolvida em Python com FastAPI. Inclui autenticação JWT, validação de dados, documentação automática e integração com banco de dados PostgreSQL.',
    techs: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/TROCAR/python-api-rest'
  },
  {
    id: '3',
    title: 'Sistema de Gestão Java',
    description: 'Sistema desktop para gestão empresarial desenvolvido em Java com Swing. Inclui controle de estoque, vendas, relatórios e backup automático de dados.',
    techs: ['Java', 'Swing', 'MySQL', 'JasperReports'],
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/TROCAR/sistema-gestao-java'
  }
];