// update to possibly remove any code that had to do with the blinking cursor
import { useState, useEffect, useCallback } from 'react';

export const useTypewriter = (text: string, speed = 15) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const startTyping = useCallback(() => {

    setIsTyping(true);
    let i = 0;
    setDisplayedText('');

    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, speed);

    return () => {
        clearInterval(typingInterval)
        setIsTyping(false);
    };
  }, [text, speed]);

  useEffect(() => {
    if (text) {
      startTyping();
    } else {
        setDisplayedText('');
    }
  }, [text, startTyping]);

  return {displayedText, isTyping};
};