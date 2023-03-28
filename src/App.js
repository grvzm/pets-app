import React from 'react';
import './App.css';

function App() {
  const topic ="Node";
  const age = 6;
  const likes = ["React","Express","Mongo","Node"];
  return (
    <div id="someId">
      {/* string */}
      <h1 id="header-id">{topic} is awesome!!</h1>
      {/* number */}
      <h2>{age}</h2>
      {/* array */}
      <h2>{likes[3]}</h2>
      {/* booleans */}
      <h2>{String(true)}</h2>
      {/* conditional */}
      {
        false ? <h3>Test</h3>: <h3>Passed</h3>
      }
      {/* loop using map */}
      {
        likes.map(like => <h3 key={like}>{like}</h3>)
      }
    </div>
  );
}

export default App;
