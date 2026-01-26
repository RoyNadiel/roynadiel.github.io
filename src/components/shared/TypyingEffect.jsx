import { useState, useEffect } from 'react';

function TypingEffect({
  // Ejemplo de uso: "Hola\n¿Cómo estás?"
  text,
  typingSpeed = 100,
  deletingSpeed = 50,
  delay = 1000,
  loop = false,
}) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = text;

      if (isDeleting) {
        setDisplayedText((prev) => currentText.substring(0, prev.length - 1));

        if (displayedText === '') {
          setIsDeleting(false);
          setIndex(0);
          setLoopNum((prev) => prev + 1);
        }
      } else {
        if (index < currentText.length) {
          setDisplayedText((prev) => prev + currentText[index]);
          setIndex((prev) => prev + 1);
        }

        if (index === currentText.length) {
          if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          } else {
            return;
          }
        }
      }
    };

    if (!loop && !isDeleting && index === text.length) return;

    const timeoutDuration = isDeleting ? deletingSpeed : typingSpeed;
    const timeout = setTimeout(handleTyping, timeoutDuration);

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    index,
    text,
    typingSpeed,
    deletingSpeed,
    delay,
    loop,
    loopNum,
  ]);

  return (
    <span className="whitespace-pre-wrap relative inline-block">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="transition-opacity duration-100"
          style={{
            opacity: i < index ? 1 : 0,
            visibility: i < index ? 'visible' : 'hidden',
          }}
        >
          {char}
          {/* Cursor posicionado después del último carácter visible */}
          {i === index - 1 && (
            <span className="absolute border-r-2 border-red-500 animate-[blink-caret_1.25s_step-end_infinite] h-[1.2em] -mt-[0.1em] ml-[1px]" />
          )}
        </span>
      ))}
      {/* Caso especial: Cursor al inicio */}
      {index === 0 && (
        <span className="absolute left-0 border-r-2 border-red-500 animate-[blink-caret_1.25s_step-end_infinite] h-[1.2em] -mt-[0.1em]" />
      )}
    </span>
  );
}

export default TypingEffect;
