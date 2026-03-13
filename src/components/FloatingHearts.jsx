import { useEffect, useState } from 'react';
import '../styles/FloatingHearts.css';

const HEARTS = ['❤️', '💕', '💗', '💖', '💝', '🌹', '💞'];

function createHeart(id) {
  return {
    id,
    symbol: HEARTS[Math.floor(Math.random() * HEARTS.length)],
    left: Math.random() * 100,
    size: 14 + Math.random() * 22,
    duration: 6 + Math.random() * 8,
    delay: Math.random() * 4,
  };
}

export default function FloatingHearts({ count = 18 }) {
  const [hearts, setHearts] = useState(() =>
    Array.from({ length: count }, (_, i) => createHeart(i))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => {
        const updated = [...prev];
        const idx = Math.floor(Math.random() * updated.length);
        updated[idx] = createHeart(updated[idx].id + count);
        return updated;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="floating-hearts" aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={{
            left: `${h.left}%`,
            fontSize: `${h.size}px`,
            animationDuration: `${h.duration}s`,
            animationDelay: `${h.delay}s`,
          }}
        >
          {h.symbol}
        </span>
      ))}
    </div>
  );
}
