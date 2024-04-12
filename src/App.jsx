import Home from "./pages/Home"
import ChampInfo from "./pages/ChampInfo";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/champions" element={<Home />} />
          <Route path="/champions/:id" element={<ChampInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
