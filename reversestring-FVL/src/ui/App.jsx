// <- React component (UI)
import React, { useState, useEffect } from 'react';
import { handleReverse } from '../adapters/reverseAdapter.js';

export default function App() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  useEffect(() => {
    if (input.length > 3) {
      try {
        setOutput(handleReverse(input));
      } catch (err) {
        setOutput('Error: ' + err.message);
      }
    } else {
      setOutput('');
    }
  }, [input]);

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '2rem' }}>
      <h2>Reverse String</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text"
        style={{ padding: '0.5rem', width: '300px', marginRight: '1rem' }}
      />
      {input.length > 3 && (
        <p style={{ marginTop: '1rem' }}><strong>Reversed:</strong> {output}</p>
      )}
    </div>
  );
}