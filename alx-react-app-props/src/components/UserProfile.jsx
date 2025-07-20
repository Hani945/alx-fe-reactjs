import React, { useContext } from 'react';
import UserContext from '../UserContext';  // adjust path if UserContext.js is in src/

const UserProfile = () => {
  const user = useContext(UserContext);  // consume context instead of props

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      {/* Add age and bio if needed and available */}
    </div>
  );
};

export default UserProfile;
