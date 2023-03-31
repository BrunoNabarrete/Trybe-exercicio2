import { useState } from 'react';
import './App.css';
import messagesList from './data/messagesList';
import Email from './components/Email';

function App() {
  const [messages, setMessages] = useState(messagesList)
  return (
    <div className="App">
      <Email messages={ messages } />
    </div>
  );
}

export default App;
