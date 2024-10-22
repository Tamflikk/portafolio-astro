import React from 'react';
import { Linkedin, Github, Gitlab, Twitter } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin size={28} />,
      url: 'https://www.linkedin.com/in/alejandro-tamayo-hornsby/',
      color: '#0a66c2'
    },
    {
      name: 'Twitter/X',
      icon: <Twitter size={28} />,
      url: 'https://twitter.com/tamflikk',
      color: '#51a7e5'
    },
    {
      name: 'GitHub',
      icon: <Github size={28} />,
      url: 'https://github.com/Tamflikk',
      color: 'white'
    },
    {
      name: 'GitLab',
      icon: <Gitlab size={28} />,
      url: 'https://gitlab.com/tamflikk',
      color: '#fc6d26'
    }
  ];

  return (
    <section id="contact" className="py-5">
      <h2 className="text-4xl font-bold mb-12 text-center text-gray-100">
        Conectemos
      </h2>
      <div className="max-w-3xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col items-center py-3"
            >
              <div 
                className="w-16 h-16 flex items-center justify-center rounded-full 
                         bg-gray-800 transition-all duration-300 ease-in-out
                         group-hover:scale-110 group-hover:shadow-lg
                         group-hover:shadow-[var(--hover-color)]"
                style={{ '--hover-color': `${social.color}` }}
              >
                <div className="text-gray-400 transition-colors duration-300 
                              group-hover:text-white">
                  {social.icon}
                </div>
              </div>
              <span className="mt-6 mb-2 text-gray-200 font-medium opacity-0 transform 
                             translate-y-2 transition-all duration-300 ease-in-out
                             group-hover:opacity-100 group-hover:translate-y-0">
                {social.name}
              </span>
              <div className="absolute -inset-2 rounded-lg opacity-0 bg-gradient 
                            transition-all duration-300 ease-in-out group-hover:opacity-15"
                   style={{ 
                     backgroundImage: `linear-gradient(180deg, ${social.color}, transparent)` 
                   }} 
              />
            </a>
          ))}
        </div>
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-400 text-lg">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>
        <a
          href="https://wa.link/8yrovq"
          target="_blank"
          className="inline-block mt-4 px-8 py-3 text-lg font-medium text-white 
                    bg-gradient-to-r from-blue-500 to-purple-600 rounded-full
                    transition-all duration-300 ease-in-out hover:scale-105
                    hover:shadow-lg hover:shadow-blue-500/25"
        >
          Contáctame
        </a>
      </div>
    </section>
  );
};

export default SocialLinks;