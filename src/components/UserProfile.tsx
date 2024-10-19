import React, { useState } from 'react';
import { User, LogOut } from 'lucide-react';

const UserProfile: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Simulated login
    setIsLoggedIn(true);
    setUsername('John Doe');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  if (!isLoggedIn) {
    return (
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
    );
  }

  return (
    <div className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
        <User className="text-white" />
      </div>
      <span className="font-medium">{username}</span>
      <button className="btn p-2" onClick={handleLogout}>
        <LogOut className="w-5 h-5" />
      </button>
    </div>
  );
};

export default UserProfile;