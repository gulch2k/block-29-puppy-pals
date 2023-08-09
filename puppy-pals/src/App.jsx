import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import SinglePlayer from "./components/SinglePlayer"
import AllPlayers from "./components/AllPlayers"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<AllPlayers/>} />
        <Route path='/players/:playerId' element={<SinglePlayer />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
