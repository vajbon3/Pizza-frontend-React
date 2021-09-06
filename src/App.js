import './App.css';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Popular from './components/Popular/Popular';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Popular/>
    </div>
  );
}

export default App;
