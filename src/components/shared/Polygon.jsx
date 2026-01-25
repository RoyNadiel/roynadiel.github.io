import './Polygon.css';
import { useRef, useEffect } from 'react';

export default function Polygon({ className, isHovered }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const orbit = containerRef.current.querySelector('.orbit-container');
    const satellites = containerRef.current.querySelectorAll('.satellite');
    const elements = [orbit, ...Array.from(satellites)];

    elements.forEach((el) => {
      if (!el) return;

      const animations = el.getAnimations();
      animations.forEach((anim) => {
        // Adjust playbackRate for orbit and satellite counter-spin animations
        if (
          anim.animationName === 'orbit-spin' ||
          anim.animationName === 'satellite-counter-spin'
        ) {
          anim.updatePlaybackRate(isHovered ? 2 : 1);
        }
      });
    });
  }, [isHovered]);

  return (
    <div
      ref={containerRef}
      className="polygon-wrapper relative flex justify-center items-center"
    >
      <div
        className={`z-10 transition-all duration-500 ${isHovered ? 'drop-shadow-[0_0_40px_rgba(240,28,255,0.8)]' : ''}`}
      >
        <div className={`polygon w-16 h-32 md:w-22 md:h-40 ${className}`}></div>
      </div>
      <div className="orbit-container absolute flex justify-center items-center pointer-events-none">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`satellite sat-${i} transition-colors duration-500 ease-in-out ${
              isHovered
                ? 'bg-[#f67eff] shadow-[0_0_15px_rgba(240,28,255,0.9)]'
                : 'bg-[#38bdf8] shadow-[0_0_15px_rgba(56,189,248,0.9)]'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
