import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
}

interface LyricsProps {
  currentSong: Song;
}

const Lyrics: React.FC<LyricsProps> = ({ currentSong }) => {
  const [lyrics, setLyrics] = useState('');

  useEffect(() => {
    // Simulated lyrics fetch
    const fetchedLyrics = `Imagine there's no heaven
It's easy if you try
No hell below us
Above us, only sky
Imagine all the people
Living for today...`;
    setLyrics(fetchedLyrics);
  }, [currentSong]);

  return (
    <div className="glassmorphic p-4 space-y-4">
      <h2 className="text-xl font-semibold flex items-center">
        <Music className="mr-2" /> Lyrics
      </h2>
      <div className="max-h-60 overflow-y-auto">
        <p className="whitespace-pre-line">{lyrics}</p>
      </div>
    </div>
  );
};

export default Lyrics;