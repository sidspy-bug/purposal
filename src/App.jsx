import { useState } from 'react';
import Home from './components/Home';
import Messages from './components/Messages';
import Gallery from './components/Gallery';
import Proposal from './components/Proposal';
import './App.css';

export default function App() {
  const [step, setStep] = useState('home');

  return (
    <div className="app">
      {step === 'home' && <Home onStart={() => setStep('messages')} />}
      {step === 'messages' && <Messages onNext={() => setStep('gallery')} />}
      {step === 'gallery' && <Gallery onNext={() => setStep('proposal')} />}
      {step === 'proposal' && <Proposal />}
    </div>
  );
}
