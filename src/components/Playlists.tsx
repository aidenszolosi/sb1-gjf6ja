import React, { useState } from 'react';
import { List, Plus } from 'lucide-react';

interface Playlist {
  name: string;
  songs: { title: string; artist: string; duration: string }[];
}

interface PlaylistsProps {
  playlists: Playlist[];
  onSelectPlaylist: (playlist: Playlist) => void;
  createPlaylist: (name: string) => void;
}

const Playlists: React.FC<PlaylistsProps> = ({ playlists, onSelectPlaylist, createPlaylist }) => {
  const [newPlaylistName, setNewPlaylistName] = useState('');

  const handleCreatePlaylist = () => {
    if (newPlaylistName.trim()) {
      createPlaylist(newPlaylistName.trim());
      setNewPlaylistName('');
    }
  };

  return (
    <div className="glassmorphic p-4">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <List className="mr-2" /> Playlists
      </h2>
      <ul className="space-y-2 mb-4">
        {playlists.map((playlist, index) => (
          <li 
            key={index} 
            className="flex justify-between items-center p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors cursor-pointer"
            onClick={() => onSelectPlaylist(playlist)}
          >
            <span>{playlist.name}</span>
            <span className="text-sm text-gray-400">{playlist.songs.length} songs</span>
          </li>
        ))}
      </ul>
      <div className="flex space-x-2">
        <input
          type="text"
          className="input flex-grow"
          placeholder="New playlist name"
          value={newPlaylistName}
          onChange={(e) => setNewPlaylistName(e.target.value)}
        />
        <button className="btn p-2" onClick={handleCreatePlaylist}>
          <Plus className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Playlists;