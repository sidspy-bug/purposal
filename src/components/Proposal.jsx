import { useState, useCallback } from 'react';
import ReactConfetti from 'react-confetti';
import { useWindowSize } from 'react-use';
import '../styles/Proposal.css';
import FloatingHearts from './FloatingHearts';

const NO_TEXTS = [
  'No 😅',
  'Are you sure? 🤔',
  'Think again... 😬',
  'Please reconsider! 🙏',
  'Last chance! 😢',
  'Really though? 😭',
  'I\'m heartbroken! 💔',
  'You can\'t mean it! 😱',
  'Check yes instead! 😍',
];

export default function Proposal() {
  const { width, height } = useWindowSize();
  const [answered, setAnswered] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const [noPos, setNoPos] = useState({ top: null, left: null });

  const handleYes = useCallback(() => setAnswered(true), []);

  const handleNo = useCallback(() => {
    setNoCount((c) => c + 1);
    // Move the NO button to a random position
    const top = 20 + Math.random() * 55;
    const left = 5 + Math.random() * 70;
    setNoPos({ top: `${top}%`, left: `${left}%` });
  }, []);

  const noLabel = NO_TEXTS[Math.min(noCount, NO_TEXTS.length - 1)];
  const yesScale = 1 + noCount * 0.18;

  return (
    <div className="proposal-wrapper">
      <FloatingHearts count={answered ? 30 : 14} />

      {answered && (
        <ReactConfetti
          width={width}
          height={height}
          recycle={true}
          numberOfPieces={280}
          colors={['#e91e63', '#f48fb1', '#ce93d8', '#ffeb3b', '#fff', '#ff80ab']}
        />
      )}

      {!answered ? (
        <div className="proposal-question-card">
          <div className="proposal-ring" aria-hidden="true">💍</div>
          <h1 className="proposal-heading">Will You Be Mine?</h1>
          <p className="proposal-subtext">
            You are the person I want to wake up next to every single day.
            My life is immeasurably better because you are in it.
            So, with all my heart…
          </p>

          <div className="proposal-buttons">
            <button
              className="proposal-yes-btn"
              style={{ transform: `scale(${yesScale})` }}
              onClick={handleYes}
              aria-label="Yes, I will be yours"
            >
              YES! 💕
            </button>

            <button
              className="proposal-no-btn"
              style={
                noPos.top
                  ? { position: 'fixed', top: noPos.top, left: noPos.left }
                  : {}
              }
              onClick={handleNo}
              aria-label={noLabel}
            >
              {noLabel}
            </button>
          </div>

          {noCount > 0 && (
            <p className="proposal-tease">
              {noCount === 1 && 'Oops! The button slipped away 😄'}
              {noCount === 2 && 'Still running away! Try the YES button 💕'}
              {noCount >= 3 && 'The NO button really doesn\'t want to be clicked 😂'}
            </p>
          )}
        </div>
      ) : (
        <div className="proposal-yes-card">
          <div className="proposal-yes-emoji" aria-hidden="true">🎉</div>
          <h1 className="proposal-yes-title">She Said YES!!! 💍💕</h1>
          <p className="proposal-yes-text">
            This is the happiest moment of my life. You have made me the luckiest person in the world.
            I promise to love you, cherish you, and stand by your side forever.
          </p>
          <div className="proposal-yes-hearts" aria-hidden="true">
            💕 💖 💗 💝 💕 💖 💗 💝
          </div>
          <p className="proposal-yes-signature">
            With all my love, always and forever 🌹
          </p>
        </div>
      )}
    </div>
  );
}
