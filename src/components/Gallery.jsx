import { useState } from 'react';
import '../styles/Gallery.css';

const MEMORIES = [
  { emoji: '🌅', label: 'Our first sunrise', color: '#ff6b35' },
  { emoji: '☕', label: 'Lazy morning coffees', color: '#c0392b' },
  { emoji: '🎵', label: 'Dancing in the rain', color: '#8e44ad' },
  { emoji: '🍕', label: 'Late night pizza runs', color: '#e74c3c' },
  { emoji: '🌙', label: 'Stargazing together', color: '#2c3e50' },
  { emoji: '🎭', label: 'Movie nights', color: '#d35400' },
  { emoji: '🏖️', label: 'Beach adventures', color: '#27ae60' },
  { emoji: '🎂', label: 'Celebrating you', color: '#e91e63' },
  { emoji: '🤝', label: 'Holding your hand', color: '#9b59b6' },
];

export default function Gallery({ onNext }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">Our Beautiful Memories 📸</h2>
      <p className="gallery-subtitle">Every moment with you is a treasure I hold dear</p>

      <div className="gallery-grid">
        {MEMORIES.map((mem, i) => (
          <button
            key={i}
            className={`gallery-card ${selected === i ? 'gallery-card--selected' : ''}`}
            style={{ '--card-color': mem.color, animationDelay: `${i * 0.07}s` }}
            onClick={() => setSelected(selected === i ? null : i)}
            aria-pressed={selected === i}
            aria-label={mem.label}
          >
            <span className="gallery-emoji" aria-hidden="true">{mem.emoji}</span>
            <span className="gallery-label">{mem.label}</span>
            {selected === i && (
              <span className="gallery-heart" aria-hidden="true">💕</span>
            )}
          </button>
        ))}
      </div>

      <p className="gallery-hint">Tap a memory to relive it ✨</p>

      <button className="gallery-next-btn" onClick={onNext}>
        I Have Something to Ask You <span aria-hidden="true">💍</span>
      </button>
    </div>
  );
}
