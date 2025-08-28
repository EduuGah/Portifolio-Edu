import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Landing Page em React',
    description: 'Landing page moderna e responsiva desenvolvida com React, TypeScript e Tailwind CSS. Inclui animações suaves, tema escuro/claro e design otimizado para conversão.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    github: 'https://github.com/TROCAR/landing-page-react',
    demo: 'https://landing-page-demo.com'
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