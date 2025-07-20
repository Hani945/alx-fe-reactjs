import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0); // 🧠 This keeps track of the number

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '24px' }}>Current Count: {count}</p>
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px' }}>
        Increment
      </button>
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px' }}>
        Decrement
      </button>
      <button onClick={() => setCount(0)} style={{ margin: '5px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
