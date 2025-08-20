'use client';

import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export function TypingAnimation({ text, className = '', speed = 100, delay = 0 }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Start typing after delay
    const startTimeout = setTimeout(() => {
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setDisplayedText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          clearInterval(typingInterval);
          // Stop cursor blinking when done
          setTimeout(() => {
            setShowCursor(false);
          }, 1000);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => {
      clearTimeout(startTimeout);
      clearInterval(cursorInterval);
    };
  }, [text, speed, delay, currentIndex]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}