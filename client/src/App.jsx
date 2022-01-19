import {Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound"
import { BrowserRouter } from "react-router-dom";
import styles from "./App.jsx"

function App() {


  return (
    <BrowserRouter>
      <div className={styles.App}>
        <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="*" element={<NotFound/>}/>
      </Routes>
      
      </div>
      
    </BrowserRouter>
  )
}

export default App
