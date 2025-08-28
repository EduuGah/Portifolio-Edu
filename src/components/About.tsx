import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, GraduationCap, Coffee } from 'lucide-react';
import Edu from "../photos/Edu.png";

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const highlights = [
    {
      icon: GraduationCap,
      title: 'Formação Acadêmica',
      description: 'Cursando Análise e Desenvolvimento de Sistemas na UNIP',
    },
    {
      icon: Code2,
      title: 'Desenvolvimento',
      description: 'Especialização em tecnologias Frontend e Backend modernas',
    },
    {
      icon: Palette,
      title: 'Design Digital',
      description: 'Criação de interfaces e experiências visuais impactantes',
    },
    {
      icon: Coffee,
      title: 'Sempre Aprendendo',
      description: 'Constantemente explorando novas tecnologias e tendências',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Sobre <span className="bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">Mim</span>
          </motion.h2>
          
          <motion.div
            variants={itemVariants}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 mx-auto mb-8"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full blur opacity-20"
              />
              <div className="relative bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 backdrop-blur-sm">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-64 rounded-xl overflow-hidden"
                >
                  <img
                    src={Edu}
                    alt="Carlos Eduardo"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Olá! Eu sou o <span className="font-semibold text-primary-600 dark:text-primary-400">Carlos Eduardo</span>, 
              um desenvolvedor apaixonado por tecnologia e design digital. Atualmente cursando 
              <span className="font-semibold"> Análise e Desenvolvimento de Sistemas na UNIP</span>, 
              estou focado em desenvolvimento frontend e criação de experiências digitais.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            >
              Combino programação com design para criar interfaces atrativas e funcionais. 
              Estou sempre explorando novas tecnologias e aprimorando minhas habilidades para 
              entregar projetos de qualidade.
            </motion.p>
          </motion.div>
        </div>

        {/* Highlights Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-lg mb-4">
                  <Icon className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {highlight.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default About;