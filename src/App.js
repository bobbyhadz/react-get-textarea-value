import './App.css';

import {useState} from 'react';

const App = () => {
  const [message, setMessage] = useState('');

  const handleMessageChange = event => {
    // 👇️ access textarea value
    setMessage(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <label htmlFor="message">My Textarea</label>
      <textarea
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
      />

      <hr />

      <button disabled={!message}>Submit</button>
    </div>
  );
};

export default App;
