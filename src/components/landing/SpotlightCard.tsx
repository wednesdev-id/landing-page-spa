import { useRef, type ReactNode, type MouseEvent } from 'react';
import './SpotlightCard.css';

type Props = {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
};

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }: Props) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = divRef.current?.getBoundingClientRect();
    if (!rect || !divRef.current) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    divRef.current.style.setProperty('--mouse-x', `${x}px`);
    divRef.current.style.setProperty('--mouse-y', `${y}px`);
    divRef.current.style.setProperty('--spotlight-color', spotlightColor);
  };

  return (
    <div ref={divRef} onMouseMove={handleMouseMove} className={`card-spotlight ${className}`.trim()}>
      {children}
    </div>
  );
};

export default SpotlightCard;
