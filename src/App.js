import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Dash from './components/dash';
import NavBar from './components/navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/login" element={ < Login />} />
          <Route path="/dash" element={ < Dash />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
