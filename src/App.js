import React, { useState, useEffect } from 'react';
import './App.css'; // Importing Tailwind's compiled CSS
import Player from './Player';
import Tab from './Tab';

function App() {
  const [selectedSong, setSelectedSong] = useState(null);
  const [accentColor, setAccentColor] = useState('rgba(0, 0, 0, 0)'); // Default transparent color

  const handleSelectSong = (song) => {
    setSelectedSong(song);
  };

  useEffect(() => {
    // Update the accent color based on the selected song's accent
    if (selectedSong && selectedSong.accent) {
      setAccentColor(`${selectedSong.accent}30`); // Add transparency to the color (50% opacity)
    } else {
      setAccentColor('rgba(0, 0, 0, 0)'); // Default to transparent if no song is selected
    }
  }, [selectedSong]);

  return (
    <div className="relative bg-black text-white sm:h-screen flex flex-col sm:flex-row justify-around">
      {/* Transparent accent overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-10"
        style={{ backgroundColor: accentColor }}
      />
      <div className="w-1/6 py-12 z-20 hidden lg:flex justify-center">
        <img
          className="h-8"
          src="https://www.pngkey.com/png/full/190-1907978_spotify-logo-png-white-spotify-logo-white-transparent.png"
          alt="Spotify Logo"
        />
      </div>
      <div className="p-4 w-full sm:w-1/2 z-20">
        <Player selectedSong={selectedSong} />
      </div>
      <div className="block w-full sm:w-1/2 lg:w-1/3 z-20 px-2 py-6">
        <Tab onSelectSong={handleSelectSong} />
      </div>
    </div>
  );
}

export default App;
