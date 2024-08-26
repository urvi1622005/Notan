import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/Nota.jsx';
import contact from './components/Cards.jsx';

function App() {
  return (
    <Router>
      <div>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<contact />} ></Route>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;