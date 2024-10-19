import React from 'react';

interface Song {
  title: string;
  artist: string;
  album: string;
  duration: string;
  cover: string;
}

interface NowPlayingProps {
  song: Song;
}

const NowPlaying: React.FC<NowPlayingProps> = ({ song }) => {
  return (
    <div className="glassmorphic p-4 space-y-4">
      <h2 className="text-xl font-semibold mb-2">Now Playing</h2>
      <img src={song.cover} alt={`${song.title} album cover`} className="w-full rounded-lg shadow-lg" />
      <div className="space-y-1">
        <p className="text-lg font-medium">{song.title}</p>
        <p className="text-sm text-gray-400">{song.artist}</p>
        <p className="text-sm text-gray-400">{song.album}</p>
      </div>
    </div>
  );
};

export default NowPlaying;