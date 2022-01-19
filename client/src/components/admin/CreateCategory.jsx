import React from "react";


export default function CreateCategory(){

	return(<>

		<h1> hola soy CreateCategory</h1>

	</>
	)
}





/*import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, postProduct,  deleteProductsCategory } from "../../actions";
//import style from "../../css/CreateCa.module.css";
import NavBar from "../NavBar";


export default function AdminGral() {
  const dispatch = useDispatch();
  
  const {products, productsOfCategory} = useSelector((state) => state);

  const [input, setInput] = useState({
    name: "",
    product: '',
  });

  const handleChange = ({target: {name, value }}) => {
    setInput({
        ...input,
        [name]: value,
    });
    console.log('Estado:', input)
}; 

  function handleSubmit(e) {
    e.preventDefault();
    if (input.name !== "" && input.product !== "") {
      dispatch(postProduct({...input, productsOfCategory}));
      alert("Successfully added Products!!!");
      setInput({ 
        name: "",
        product: '',
      });
    } else {
      alert(
        "You must complete all the fields to add the product !!!"
      );
    }
  }
  function handleAddProduct(e){
    e.preventDefault()
    // console.log(input.product)
    dispatch(addProductsOfCategory(input.product))
  }
  function elimProduct(e){
    dispatch(deleteProductsCategory(e.target.value))
  }
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div>
    <NavBar/>

    <form onSubmit={handleSubmit}>
    <div class="body-background">
  <div class="container-fluid d-flex justify-content-center align-items-center h-100">
      <div class="card p-3 text-center py-4">
          <h4>Create Product's Category</h4>
          <div class="mt-3 px-3"> <input class="form-control" placeholder="Name" value={input.name} name="name" autoComplete='off' onChange={handleChange}/> </div><br />

          <select name='product' onChange={handleChange} class="form-select" aria-label="Default select example">
            <option selected >Select Products</option>
            {products.map((product) => ( <option key={product.name} value={product.name}>{product.name}</option>))}
          </select>
          <div class="mt-3 d-grid px-3"> <button class="btn btn-primary btn-block text-uppercase" onClick={handleAddProduct}> <span>+</span> </button> </div>
          <div className={style.remove}>
          {productsOfCategory.map((product) => <li key={product} value={product} onClick={() => elimProduct(product.name)} >{product}  </li>)}
        </div>

          <div class="mt-3 d-grid px-3"> <button class="btn btn-primary btn-block btn-signup text-uppercase" type="submit"> <span>Create Category</span> </button> </div>
      </div>
  </div>
</div>
  </form>

  </div>
  );*/