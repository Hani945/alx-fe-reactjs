import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrors("Username required");
      return;
    }
    if (!email) {
      setErrors("Email required");
      return;
    }
    if (!password) {
      setErrors("Password required");
      return;
    }

    setErrors("");
    alert(`User Registered: ${username}, ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Controlled Registration Form</h2>
      {errors && <p style={{ color: "red" }}>{errors}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Register</button>
    </form>
  );
}
