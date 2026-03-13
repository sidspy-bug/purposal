import { useState } from 'react';
import '../styles/Home.css';
import FloatingHearts from './FloatingHearts';

export default function Home({ onStart }) {
  const [clicked, setClicked] = useState(false);

  function handleStart() {
    setClicked(true);
    setTimeout(onStart, 600);
  }

  return (
    <div className="home-wrapper">
      <FloatingHearts count={20} />
      <div className={`home-card ${clicked ? 'home-card--exit' : ''}`}>
        <div className="home-rose" aria-hidden="true">🌹</div>
        <h1 className="home-title">
          <span className="home-title-line">Something</span>
          <span className="home-title-line home-title-accent">Special</span>
          <span className="home-title-line">Awaits You</span>
        </h1>
        <p className="home-subtitle">
          A message from the heart, just for you 💕
        </p>
        <button
          className="home-btn"
          onClick={handleStart}
          disabled={clicked}
          aria-label="Start the proposal experience"
        >
          <span className="home-btn-text">Open Your Heart</span>
          <span className="home-btn-icon" aria-hidden="true">✨</span>
        </button>
        <p className="home-hint">Click to begin this special journey</p>
      </div>
    </div>
  );
}
