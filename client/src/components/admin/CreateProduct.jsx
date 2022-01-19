import React from "react";




export default function CreateProduct(){

	return(<>

		<h1>hola soy CreateProduct</h1>

	</>
	)
}

/*const CreateProduct = () => {
    const dispatch = useDispatch();
  
    const [values, setInput] = useState({
        name: "", 
        price: "", 
        stock: "", 
        image: "", 
        color: "", 
        storage: "", 
        connectivity: "", 
        model: "",
        RAM: "",
      
    });
  
    const handleChange = ({target: {name, value }}) => {
      setInput({
          ...values,
          [name]: value,
      });
      console.log('Estado:', values)
  }; 
  
    function handleSubmit(e) {
      e.preventDefault();
      if (values.name !== "" && values.model !== "") {
        dispatch(postProduct(values));
        alert("Successfully added Products!!!");
        setInput({ 
          name: "",
          model: '',
        });
      } else {
        alert(
          "You must complete all the fields to add the Products !!!"
        );
      }
    }
    useEffect(() => {
      dispatch(getProducts());
    }, [dispatch]);
  
    return (
      <div>
          <NavBar/>
  <div class="body-background">
      <div class="container-fluid d-flex justify-content-center align-items-center h-100">
          <div class="card p-3 text-center py-4">
              <h4>Charge a new Products</h4>
              <form onSubmit={handleSubmit}>
              <div class="mt-3 px-3"> <input class="form-control" name='name' placeholder="Name" onChange={handleChange} autoComplete='off' type='text' value={values.name}/> </div>
              <div class="mt-3 px-3"> <input class="form-control" name='image' placeholder="Image" onChange={handleChange} autoComplete='off' type='text' value={values.image}/> </div>
              <div class="mt-3 px-3"> <input class="form-control" name='connectivity' placeholder="Connectivity" onChange={handleChange} autoComplete='off' type='text' value={values.connectivity}/> </div>
              <div class="input-group px-3 mt-3"> 
                <input type="text" class="form-control" name='color' placeholder="color" aria-label="color" onChange={handleChange} autoComplete='off' value={values.color}/> <span></span> 
                <input type="text" class="form-control" name='storage' placeholder="storage" aria-label="storage" onChange={handleChange} autoComplete='off' value={values.storage}/> 
              </div>
              <div class="input-group px-3 mt-3"> 
                <input type="text" class="form-control" name='price' placeholder="Price" aria-label="Price" onChange={handleChange} autoComplete='off' value={values.price}/> <span></span> 
                <input type="text" class="form-control" name='stock' placeholder="Stock" aria-label="Stock" onChange={handleChange} autoComplete='off' value={values.stock}/> 
              </div>
              <label class="mt-1 mb-1">model</label>
              <textarea class="form-control mt-1 mb-3" name='model' id="exampleFormControlTextarea1" rows="2" onChange={handleChange} autoComplete='off' type='text' value={values.model}></textarea>
              <label class="mt-1 mb-1">RAM</label>
              <textarea class="form-control mt-1 mb-3" name='RAM' id="exampleFormControlTextarea1" rows="2" onChange={handleChange} autoComplete='off' type='text' value={values.RAM}></textarea>
              <div class="mt-3 d-grid px-3"> <button class="btn btn-primary btn-block btn-signup text-uppercase"> <span>charge product</span> </button> </div>
              </form>
          </div>
      </div>
  </div>
      </div>
    );
  }

export default CreateProduct */