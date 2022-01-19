import {Route, Routes} from "react-router-dom";
import Landing from "./pages/Landing";
import NotFound from "./pages/NotFound"
import CreateCategory from "./components/Admin/CreateCategory";
import CreateProduct from "./components/Admin/CreateProduct";
import EditProduct from "./components/Admin/EditProduct";
import AdminGral from "./components/Admin/AdminGral";

function App() {


  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path = '/admin' element = {<AdminGral/>}></Route>
        <Route exact path = '/admin/createCa' element = {<CreateCategory/>}></Route>
        <Route exact path = '/admin/createProduct' element = {<CreateProduct/>}></Route>
        <Route exact path = '/admin/editProduct/:id' element= {<EditProduct />}></Route>                   
      <Route exact path="*" element={<NotFound/>}/>
    </Routes>
    </div>
  )
}

export default App
