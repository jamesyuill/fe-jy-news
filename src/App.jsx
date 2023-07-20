import './App.css';
import { Header } from './components/Header';
import { Nav } from './components/Nav';
import { Content } from './components/Content';
import { useState } from 'react';

function App() {
  const [topics, setTopics] = useState([]);

  return (
    <div className="App">
      <Header />
      <Nav topics={topics} setTopics={setTopics} />
      <Content />
    </div>
  );
}

export default App;
