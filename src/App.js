import './App.css';
import React, {useState} from 'react';

function App() {
  const [cookieClicks, setCookieClicks] = useState(0);

  const addCount = () => {
    setCookieClicks(cookieClicks + 1)
  }

  return (
    <main>
      <section className="cookieDisplay">
        <h3>{cookieClicks} cookies collected</h3>
        <button 
          onClick={() => addCount()}
        >Not A Cookie</button>
      </section>
    </main>
  );
}

export default App;
