import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onSectionClick: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onSectionClick }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/EduuGah',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/carlos-eduardo-863015377/',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: 'mailto:edugah1809@email.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre', id: 'about' },
    { label: 'Habilidades', id: 'skills' },
    { label: 'Projetos', id: 'projects' },
    { label: 'Contato', id: 'contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 bg-clip-text text-transparent mb-4">
                Carlos Eduardo da Silva de Oliveira
              </h3>
              <p className="text-gray-400 mb-6 max-w-md">
                Desenvolvedor Frontend em formação, apaixonado por tecnologia e design digital. 
                Criando soluções inovadoras que combinam código e criatividade.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-800 hover:bg-primary-600 rounded-lg transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <motion.button
                      onClick={() => onSectionClick(link.id)}
                      whileHover={{ x: 4 }}
                      className="text-gray-400 hover:text-white transition-all duration-200 text-left"
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-6">Contato</h4>
              <div className="space-y-3">
                <a
                  href="mailto:edugah1809@email.com"
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  edugah1809@email.com
                </a>
                <p className="text-gray-400">São Paulo, Brasil</p>
                <p className="text-gray-400">Disponível para freelances</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gray-400 text-sm mb-4 md:mb-0 flex items-center"
          >
            © {currentYear} Carlos Eduardo.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-primary-600 hover:bg-primary-700 rounded-lg transition-all duration-300 group"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;