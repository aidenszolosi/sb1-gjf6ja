import React from 'react';
import { List, X, ArrowUp, ArrowDown } from 'lucide-react';

interface Song {
  title: string;
  artist: string;
  duration: string;
}

interface QueueProps {
  queue: Song[];
  removeFromQueue: (index: number) => void;
  reorderQueue: (startIndex: number, endIndex: number) => void;
}

const Queue: React.FC<QueueProps> = ({ queue, removeFromQueue, reorderQueue }) => {
  return (
    <div className="glassmorphic p-4">
      <h2 className="text-xl font-semibold mb-4 flex items-center">
        <List className="mr-2" /> Queue
      </h2>
      <ul className="space-y-2">
        {queue.map((song, index) => (
          <li key={index} className="flex justify-between items-center p-2 hover:bg-white hover:bg-opacity-10 rounded transition-colors">
            <div>
              <p className="font-medium">{song.title}</p>
              <p className="text-sm text-gray-400">{song.artist}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-400">{song.duration}</span>
              <button 
                className="p-1 hover:bg-red-500 rounded"
                onClick={() => removeFromQueue(index)}
              >
                <X className="w-4 h-4" />
              </button>
              {index > 0 && (
                <button 
                  className="p-1 hover:bg-blue-500 rounded"
                  onClick={() => reorderQueue(index, index - 1)}
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              )}
              {index < queue.length - 1 && (
                <button 
                  className="p-1 hover:bg-blue-500 rounded"
                  onClick={() => reorderQueue(index, index + 1)}
                >
                  <ArrowDown className="w-4 h-4" />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Queue;