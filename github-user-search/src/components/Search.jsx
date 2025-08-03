import { useState } from "react";

export default function Search() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUser(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        if (res.status === 404) {
          setError("Looks like we cant find the user");
        } else {
          setError("Something went wrong");
        }
      } else {
        const data = await res.json();
        setUser(data);
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
          className="flex-1 border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {user && (
        <div className="border p-4 rounded shadow">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-20 h-20 rounded-full"
          />
          <h2 className="text-xl font-bold">{user.login}</h2>
          {user.name && <p>Name: {user.name}</p>}
          {user.location && <p>Location: {user.location}</p>}
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
