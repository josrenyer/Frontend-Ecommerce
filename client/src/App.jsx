import {Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home"

function App() {


  return (
    <div className="App">
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  )
}

export default App
