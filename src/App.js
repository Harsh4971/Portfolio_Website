import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
