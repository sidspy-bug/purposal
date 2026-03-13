import { useState, useEffect } from 'react';
import '../styles/Messages.css';

const MESSAGES = [
  {
    icon: '🌟',
    title: 'You Light Up My World',
    text: 'Every single day, you bring brightness into my life that I never knew was possible. Your smile is the first thing I think of when I wake up.',
  },
  {
    icon: '💫',
    title: 'My Best Adventure',
    text: 'Every moment spent with you has been the greatest adventure of my life. You make the ordinary feel extraordinary in ways words can barely capture.',
  },
  {
    icon: '🌹',
    title: 'You Are My Home',
    text: 'Home is not a place — it\'s a feeling. And whenever I\'m with you, I am exactly where I belong. You are my safe harbor and my wildest dream.',
  },
  {
    icon: '💝',
    title: 'Forever & Always',
    text: 'I have never been more certain of anything in my life than I am of this: I want to spend every chapter of my story with you by my side.',
  },
];

export default function Messages({ onNext }) {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  function handleNext() {
    if (animating) return;
    if (current < MESSAGES.length - 1) {
      setAnimating(true);
      setVisible(false);
      setTimeout(() => {
        setCurrent((c) => c + 1);
        setVisible(true);
        setAnimating(false);
      }, 400);
    } else {
      setAnimating(true);
      setVisible(false);
      setTimeout(onNext, 500);
    }
  }

  const msg = MESSAGES[current];
  const isLast = current === MESSAGES.length - 1;

  return (
    <div className="messages-wrapper">
      <div className="messages-progress">
        {MESSAGES.map((_, i) => (
          <span
            key={i}
            className={`messages-dot ${i === current ? 'messages-dot--active' : ''} ${i < current ? 'messages-dot--done' : ''}`}
          />
        ))}
      </div>

      <div className={`messages-card ${visible ? 'messages-card--visible' : ''}`}>
        <div className="messages-icon" aria-hidden="true">{msg.icon}</div>
        <h2 className="messages-title">{msg.title}</h2>
        <p className="messages-text">{msg.text}</p>
        <button className="messages-btn" onClick={handleNext} disabled={animating}>
          {isLast ? (
            <>See Our Memories <span aria-hidden="true">📸</span></>
          ) : (
            <>Continue <span aria-hidden="true">→</span></>
          )}
        </button>
      </div>

      <p className="messages-count">
        {current + 1} / {MESSAGES.length}
      </p>
    </div>
  );
}
