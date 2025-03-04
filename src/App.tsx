
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import Home from "./pages/Home";
import WhiteBoard from "./pages/WhiteBoard";


const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<WhiteBoard />} />
    </Routes>
  </Router>
  )
}

export default App