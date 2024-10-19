import React from 'react';
import { ArrowLeft, Plus } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  duration: string;
}

interface Playlist {
  name: string;
  songs: Song[];
}

interface PlaylistDetailsProps {
  playlist: Playlist;
  onBack: () => void;
  addToQueue: (song: Song) => void;
}

const PlaylistDetails: React.FC<PlaylistDetailsProps> = ({ playlist, onBack, addToQueue }) => {
  return (
    <div className="glassmorphic p-4">
      <div className="flex items-center mb-4">
        <button className="mr-2" onClick={onBack}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-xl font-semibold">{playlist.name}</h2>
      </div>
      <ul className="space-y-2">
        {playlist.songs.map((song, index) => (
          <li key={index} className="flex justify-between items-center p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
            <div>
              <p className="font-medium">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">{song.duration}</span>
              <button 
                className="p-1 hover:bg-blue-500 rounded"
                onClick={() => addToQueue(song)}
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistDetails;