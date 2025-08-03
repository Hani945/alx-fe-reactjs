import { useState } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      setUsers(data.items);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch users.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="flex items-center gap-2 mb-4">
        <input
          type="text"
          placeholder="Search GitHub users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.login} className="flex items-center gap-4 p-4 border rounded shadow bg-white">
            <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
            <div>
              <p className="font-bold">{user.login}</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
