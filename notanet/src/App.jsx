import {BrowserRouter as Router,  Route, Routes } from 'react-router-dom';
import Home from './components/Nota.jsx';
import Contact from './components/Cards.jsx';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />}/> <Route/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
