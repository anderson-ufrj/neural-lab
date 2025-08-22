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
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Reset when text changes
    setDisplayedText('');
    setShowCursor(true);

    // Cursor blink effect
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    // Start typing after delay
    const startTimeout = setTimeout(() => {
      let index = 0;
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
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
  }, [text, speed, delay]); // Removed currentIndex from dependencies

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}