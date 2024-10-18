import { useState, useEffect } from 'react';

const AnimatedTypingText = () => {
  const phrases = [
    "Hola, soy Alejandro Tamayo",
    "Puedes llamarme Tamflikk :)",
    "Soy un desarrollador FullStack",
    "¡Creador de soluciones web!"
  ];

  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const typingSpeed = 100; // velocidad de escritura
    const deletingSpeed = 50; // velocidad de borrado
    const pauseTime = 2000; // tiempo de pausa cuando la frase está completa

    const currentPhrase = phrases[phraseIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Escribiendo
        if (text.length < currentPhrase.length) {
          setText(currentPhrase.slice(0, text.length + 1));
        } else {
          // Pausa antes de empezar a borrar
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Borrando
        if (text.length > 0) {
          setText(currentPhrase.slice(0, text.length - 1));
        } else {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, phraseIndex, isDeleting]);

  return (
    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100 min-h-[3.5rem]">
      {text}
      <span className="animate-pulse">|</span>
    </h1>
  );
};

export default AnimatedTypingText;