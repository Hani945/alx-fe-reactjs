import { useState } from 'react';
import Search from './components/Search';
import UserCard from './components/UserCard';

export default function App() {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const fetchGitHubUser = async (username) => {
    setError('');
    setUserData(null);
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error('User not found');
      }
      const data = await response.json();
      setUserData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
        GitHub User Search
      </h1>
      <Search onSearch={fetchGitHubUser} />
      {error && (
        <p className="text-red-500 text-center mt-4">{error}</p>
      )}
      {userData && <UserCard user={userData} />}
    </div>
  );
}
