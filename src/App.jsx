import './App.css'
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from '../Pages/Home';

function App() {
  return (
      <>
        <HashRouter>
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
        </HashRouter>
      </>
  )
}

export default App
