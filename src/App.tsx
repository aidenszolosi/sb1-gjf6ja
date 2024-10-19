import React, { useState } from 'react';
import MusicPlayer from './components/MusicPlayer';
import Queue from './components/Queue';
import NowPlaying from './components/NowPlaying';
import Search from './components/Search';
import UserProfile from './components/UserProfile';
import Playlists from './components/Playlists';
import Lyrics from './components/Lyrics';
import PlaylistDetails from './components/PlaylistDetails';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState({
    title: 'Imagine',
    artist: 'John Lennon',
    album: 'Imagine',
    duration: '3:07',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop&q=80'
  });

  const [queue, setQueue] = useState([
    { title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' },
    { title: 'Stairway to Heaven', artist: 'Led Zeppelin', duration: '8:02' },
    { title: 'Hotel California', artist: 'Eagles', duration: '6:30' },
  ]);

  const [playlists, setPlaylists] = useState([
    { name: 'Favorites', songs: [{ title: 'Imagine', artist: 'John Lennon', duration: '3:07' }] },
    { name: 'Chill Vibes', songs: [{ title: 'Bohemian Rhapsody', artist: 'Queen', duration: '5:55' }] },
    { name: 'Workout Mix', songs: [{ title: 'Eye of the Tiger', artist: 'Survivor', duration: '4:05' }] },
  ]);

  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [loopSong, setLoopSong] = useState(false);
  const [loopPlaylist, setLoopPlaylist] = useState(false);

  const addToQueue = (song) => {
    setQueue([...queue, song]);
  };

  const removeFromQueue = (index) => {
    const newQueue = [...queue];
    newQueue.splice(index, 1);
    setQueue(newQueue);
  };

  const reorderQueue = (startIndex, endIndex) => {
    const newQueue = [...queue];
    const [removed] = newQueue.splice(startIndex, 1);
    newQueue.splice(endIndex, 0, removed);
    setQueue(newQueue);
  };

  const createPlaylist = (name) => {
    setPlaylists([...playlists, { name, songs: [...queue] }]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      <div className="acrylic w-full max-w-7xl p-8 space-y-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold neon-text">Discord Music Bot</h1>
          <UserProfile />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Search onAddToQueue={addToQueue} />
            <MusicPlayer 
              isPlaying={isPlaying} 
              setIsPlaying={setIsPlaying} 
              currentSong={currentSong}
              loopSong={loopSong}
              setLoopSong={setLoopSong}
              loopPlaylist={loopPlaylist}
              setLoopPlaylist={setLoopPlaylist}
            />
            <Lyrics currentSong={currentSong} />
          </div>
          
          <div className="space-y-8">
            <NowPlaying song={currentSong} />
            <Queue 
              queue={queue} 
              removeFromQueue={removeFromQueue} 
              reorderQueue={reorderQueue}
            />
            {selectedPlaylist ? (
              <PlaylistDetails 
                playlist={selectedPlaylist} 
                onBack={() => setSelectedPlaylist(null)}
                addToQueue={addToQueue}
              />
            ) : (
              <Playlists 
                playlists={playlists} 
                onSelectPlaylist={setSelectedPlaylist}
                createPlaylist={createPlaylist}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;