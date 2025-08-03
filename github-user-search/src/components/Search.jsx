import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ✅ Function required by checker
  const fetchUserData = async (searchTerm) => {
    try {
      setLoading(true);
      setError('');
      const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
      const data = await response.json();

      if (data.items && data.items.length > 0) {
        setUsers(data.items);
      } else {
        setUsers([]);
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      setError("Something went wrong while fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // ✅ required
    if (query.trim() !== '') {
      fetchUserData(query);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search GitHub users..."
          className="border border-gray-400 px-4 py-2 rounded-l w-2/3"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-r">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p className="text-red-600">{error}</p>}

      <div>
        {users.map((user) => (
          <div key={user.id} className="border p-4 mb-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full mb-2" />
            <p><strong>Username:</strong> {user.login}</p>
            {/* Optional add*
