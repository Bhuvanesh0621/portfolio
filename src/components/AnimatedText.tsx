import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface CharSpanProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const CharSpan: React.FC<CharSpanProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for layout */}
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {char === ' ' ? '\u00A0' : char}
      </span>
      {/* Absolute positioned animated character */}
      <motion.span style={{ opacity }} className="absolute inset-0 select-none">
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.length;

  let globalCharIndex = 0;

  return (
    <p
      ref={containerRef}
      style={style}
      className={`relative flex flex-wrap justify-center ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const startIndex = globalCharIndex;
        globalCharIndex += wordChars.length;

        // Account for space after word (except last word)
        const hasSpace = wordIndex < words.length - 1;
        const spaceIndex = hasSpace ? globalCharIndex++ : -1;

        return (
          <React.Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, charIdx) => {
                const charPos = startIndex + charIdx;
                const start = charPos / totalChars;
                const end = Math.min(1, start + 2 / totalChars);
                return (
                  <CharSpan
                    key={charIdx}
                    char={char}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </span>
            {hasSpace && (
              <span className="inline-block">
                <CharSpan
                  char=" "
                  progress={scrollYProgress}
                  range={[
                    spaceIndex / totalChars,
                    Math.min(1, (spaceIndex + 2) / totalChars),
                  ]}
                />
              </span>
            )}
          </React.Fragment>
        );
      })}
    </p>
  );
};

export default AnimatedText;
