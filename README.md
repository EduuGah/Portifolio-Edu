# 🚀 Portfólio Carlos Eduardo da Silva de Oliveira

Um portfólio moderno e responsivo desenvolvido com React, TypeScript e Tailwind CSS, apresentando projetos e habilidades em desenvolvimento Fullstack e design digital.

## ✨ Características

- **Design Moderno**: Interface limpa com gradientes roxos e animações suaves
- **Tema Claro/Escuro**: Toggle de tema com persistência no LocalStorage
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Animações Fluidas**: Micro-interações com Framer Motion
- **SEO Friendly**: Meta tags otimizadas para mecanismos de busca
- **Performance**: Otimizado com Vite e lazy loading

## 🛠️ Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Superset tipado do JavaScript
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utilitário
- **Framer Motion** - Biblioteca de animações
- **Lucide React** - Ícones modernos
- **clsx** - Utilitário para classes condicionais

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos para executar

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SEU-USUARIO/portfolio-carlos-eduardo.git
   cd portfolio-carlos-eduardo
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador**
   ```
   http://localhost:5173
   ```

## 🏗️ Build para Produção

```bash
npm run build
# ou
yarn build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

## 🎨 Personalização

### 1. Informações Pessoais

Edite os seguintes arquivos para personalizar com suas informações:

**`src/components/Home.tsx`**
```tsx
// Altere nome, título e descrição
<h1>Seu Nome Aqui</h1>
<p>Sua Profissão/Título</p>
```

**`src/components/About.tsx`**
```tsx
// Atualize sua bio e informações
<p>Sua biografia personalizada...</p>
```

### 2. Projetos

**`src/data/projects.ts`**
```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Seu Projeto',
    description: 'Descrição do projeto...',
    techs: ['React', 'Node.js'],
    image: 'https://sua-imagem.jpg',
    github: 'https://github.com/seu-usuario/projeto',
    demo: 'https://seu-projeto.com'
  }
  // Adicione mais projetos...
];
```

### 3. Habilidades

**`src/components/Skills.tsx`**
```tsx
// Edite as categorias e habilidades
const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      // Suas habilidades...
    ]
  }
];
```

### 4. Contatos

**`src/components/Contact.tsx`** e **`src/components/Footer.tsx`**
```tsx
// Atualize links e informações de contato
const contactInfo = [
  {
    title: 'Email',
    value: 'seu@email.com',
    link: 'mailto:seu@email.com'
  }
  // Outros contatos...
];
```

### 5. Cores do Tema

**`tailwind.config.js`**
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Sua paleta de cores primária
        500: '#8b5cf6', // Roxo padrão
      },
      secondary: {
        // Sua paleta de cores secundária  
        500: '#d946ef', // Rosa padrão
      }
    }
  }
}
```

## 📧 Configuração do Formulário de Contato

### Opção 1: Formspree (Recomendado)

1. Crie uma conta em [formspree.io](https://formspree.io)
2. Crie um novo formulário e copie o endpoint
3. Em `src/components/Contact.tsx`, substitua na função `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('https://formspree.io/f/SEU_FORM_ID', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
  }
};
```

### Opção 2: EmailJS

1. Crie uma conta em [emailjs.com](https://www.emailjs.com/)
2. Configure um template de email
3. Instale o EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
4. Configure conforme documentação do EmailJS

## 🚀 Deploy

### Vercel (Recomendado)

1. Instale a CLI do Vercel:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Netlify

1. Faça build do projeto:
   ```bash
   npm run build
   ```

2. Faça upload da pasta `dist/` no Netlify

### GitHub Pages

1. Instale o gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Adicione no `package.json`:
   ```json
   {
     "homepage": "https://seu-usuario.github.io/portfolio-carlos-eduardo",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## 📁 Estrutura do Projeto

```
portfolio-carlos-eduardo/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── README.md
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🎯 Melhorias Futuras

- [ ] Blog integrado
- [ ] Sistema de comentários
- [ ] Integração com CMS
- [ ] Análise de métricas
- [ ] PWA (Progressive Web App)
- [ ] Internacionalização (i18n)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## 📞 Contato

- **Email**: carlos.eduardo@email.com
- **LinkedIn**: [/in/carlos-eduardo-dev](https://linkedin.com/in/TROCAR)
- **GitHub**: [@carlos-eduardo-dev](https://github.com/TROCAR)

---

⭐ Se este projeto foi útil para você, considere dar uma estrela no repositório!