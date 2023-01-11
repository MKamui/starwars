import { Routes, Route } from "react-router-dom";
import Characters from "./components/Characters";
import Favorites from "./components/Favorites";

function App() {

  return (
    <div className="font-distant bg-[url('https://i.pinimg.com/originals/99/dc/06/99dc0621d670339646093484b27bdc5a.jpg')] min-h-screen bg-cover">
      <Routes>
        <Route exact path="/" element={<Characters />} />
        <Route exact path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
