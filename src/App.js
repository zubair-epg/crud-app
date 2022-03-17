import logo from './logo.svg';
import AppBar from './components/read'
import Create from './components/create'
import Read from './components/read'
import Update from './components/update'
import './App.css';
import { BrowserRouter as Router,
   Routes, Route  } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
       <Routes>

         <Route exact path="/create" element={<Create/>} />
         <Route exact path="/update" element={<Update/>} />
         <Route exact path="/" element={<Read/>} />

       </Routes>
      </div>
      </Router>
    </div>
  );
}

export default App;
