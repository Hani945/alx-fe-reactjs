import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#333',
        padding: '10px',
        color: 'white'
      }}
    >
      <h1>My Website</h1>
      <ul style={{ display: 'flex', gap: '15px', listStyle: 'none' }}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}