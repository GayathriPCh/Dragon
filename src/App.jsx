import React, { useEffect, useRef, useState } from 'react';
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Services from './components/services/Services';
import backgroundMusic from './beats.mp3'; // Importing the background music
import './App.scss';

const App = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Set up audio settings
    audio.volume = 1.0;
    audio.loop = true;

    const playAudio = () => {
      if (isPlaying) {
        audio.play()
          .then(() => {
            console.log('Audio playback started');
          })
          .catch(error => {
            console.log('Audio playback failed: ', error);
          });
      }
    };

    // Play audio immediately if the state is true
    playAudio();

    // Event listener for user interaction
    const handleUserInteraction = () => {
      if (isPlaying) {
        audio.play()
          .then(() => {
            console.log('Audio playback resumed after interaction');
          })
          .catch(error => {
            console.log('Audio playback failed: ', error);
          });
      }
    };

    document.addEventListener('click', handleUserInteraction);

    return () => {
      document.removeEventListener('click', handleUserInteraction);
      audio.pause();
      audio.currentTime = 0;
    };
  }, [isPlaying]);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={backgroundMusic} />
      <button className="toggle-music-button" onClick={toggleMusic}>
        {isPlaying ? 'Stop Music' : 'Play Music'}
      </button>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
