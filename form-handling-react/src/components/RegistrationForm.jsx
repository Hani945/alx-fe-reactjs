import React, { useState } from "react";

const RegistrationForm = () => {
  // ✅ Controlled state variables
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit} data-testid="formikForm">
      {/* Username */}
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}   {/* ✅ value={username} */}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}   {/* ✅ value={email} */}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Password */}
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}   {/* ✅ value={password} */}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
