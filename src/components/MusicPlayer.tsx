import React from 'react';
import {
  Play,
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  Repeat,
} from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
  currentSong: {
    title: string;
    artist: string;
    duration: string;
  };
  loopSong: boolean;
  setLoopSong: (loop: boolean) => void;
  loopPlaylist: boolean;
  setLoopPlaylist: (loop: boolean) => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({
  isPlaying,
  setIsPlaying,
  currentSong,
  loopSong,
  setLoopSong,
  loopPlaylist,
  setLoopPlaylist,
}) => {
  return (
    <div className="glassmorphic p-6 space-y-4">
      <div className="flex justify-between items-center">
        <SkipBack className="w-8 h-8 cursor-pointer hover:text-blue-400 transition-colors" />
        {isPlaying ? (
          <Pause
            className="w-12 h-12 cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => setIsPlaying(false)}
          />
        ) : (
          <Play
            className="w-12 h-12 cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => setIsPlaying(true)}
          />
        )}
        <SkipForward className="w-8 h-8 cursor-pointer hover:text-blue-400 transition-colors" />
      </div>
      <div className="text-center">
        <p className="font-medium">{currentSong.title}</p>
        <p className="text-sm text-gray-400">{currentSong.artist}</p>
      </div>
      <div className="flex items-center space-x-2">
        <Volume2 className="w-6 h-6" />
        <input type="range" className="w-full accent-blue-500" />
      </div>
      <div className="flex justify-between text-sm">
        <span>1:30</span>
        <span>{currentSong.duration}</span>
      </div>
      <div className="w-full bg-white bg-opacity-20 rounded-full h-1">
        <div
          className="bg-blue-500 h-1 rounded-full animate-pulse-slow"
          style={{ width: '45%' }}
        ></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          className={`btn p-2 ${loopSong ? 'bg-blue-500' : ''}`}
          onClick={() => setLoopSong(!loopSong)}
        >
          <Repeat className="w-5 h-5" />
        </button>
        <button
          className={`btn p-2 ${loopPlaylist ? 'bg-blue-500' : ''}`}
          onClick={() => setLoopPlaylist(!loopPlaylist)}
        >
          <Repeat className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
