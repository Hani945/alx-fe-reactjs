import React, { useState } from 'react';

const Search = () => {
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUserData = async (searchTerm) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${searchTerm}`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        // Fetch details for each user (to get location, html_url, etc.)
        const detailedUsers = await Promise.all(
          data.items.map(async (user) => {
            const res = await fetch(user.url); // user.url gives full user profile
            return await res.json();
          })
        );
        setUsers(detailedUsers);
      } else {
        setUsers([]);
        setError("Looks like we cant find the user");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchUserData(query.trim());
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search GitHub users..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Search
        </button>
      </form>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-600 text-center">{error}</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id} className="p-4 border rounded shadow bg-white">
            <div className="flex items-center gap-4">
              <img src={user.avatar_url} alt={user.login} className="w-16 h-16 rounded-full" />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <p className="text-sm text-gray-600">Location: {user.location || 'Not available'}</p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
