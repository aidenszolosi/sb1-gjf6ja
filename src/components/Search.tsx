import React, { useState } from 'react';
import { Search as SearchIcon, Plus, Link } from 'lucide-react';

interface SearchProps {
  onAddToQueue: (song: { title: string; artist: string; duration: string }) => void;
}

const Search: React.FC<SearchProps> = ({ onAddToQueue }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    // Simulated search results
    const results = [
      { title: 'Shape of You', artist: 'Ed Sheeran', duration: '3:53' },
      { title: 'Blinding Lights', artist: 'The Weeknd', duration: '3:20' },
      { title: 'Dance Monkey', artist: 'Tones and I', duration: '3:29' },
    ];
    setSearchResults(results);
  };

  const handleAddLink = () => {
    // Here you would typically parse the link and add the song to the queue
    // For this example, we'll just add a placeholder song
    onAddToQueue({
      title: 'Song from Link',
      artist: 'Unknown Artist',
      duration: '0:00'
    });
    setSearchQuery('');
  };

  return (
    <div className="glassmorphic p-4 space-y-4">
      <div className="flex space-x-2">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Search for songs or paste a link..."
            className="input w-full pl-10"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button
          className="btn flex items-center justify-center"
          onClick={handleAddLink}
        >
          <Link className="w-5 h-5 mr-2" />
          Add Link
        </button>
      </div>
      {searchResults.length > 0 && (
        <ul className="space-y-2">
          {searchResults.map((song, index) => (
            <li key={index} className="flex justify-between items-center p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
              <div>
                <p className="font-medium">{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
              <button
                className="btn p-2"
                onClick={() => onAddToQueue(song)}
              >
                <Plus className="w-5 h-5" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;