import { useState } from "react";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (res.status === 404) {
        setNotFound(true);
        setUserData(null);
      } else {
        const data = await res.json();
        setUserData(data);
        setNotFound(false);
      }
    } catch (error) {
      console.error("Error fetching user:", error);
      setNotFound(true);
      setUserData(null);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {notFound && <p>Looks like we cant find the user</p>}

      {userData && (
        <div>
          <p>{userData.name}</p>
          <img src={userData.avatar_url} alt="avatar" width={100} />
          <p>{userData.bio}</p>
        </div>
      )}
    </div>
  );
}

export default Search;
