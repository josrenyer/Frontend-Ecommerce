import React from "react";


export default function ProductsAdmin(){

	return(<>

		<h1> hola soy ProductsAdmin</h1>

	</>
	)
}




/*import React from 'react';
import { useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
//import '../../css/ProductsAdmin.css' 
import swal from 'sweetalert'
import { deleteProduct } from '../../actions'


export default function ProductsAdmin ({name , id, price , stock , image , color , storage , connectivity , model , RAM }) {

const dispatch = useDispatch()
const history = useHistory()
const handleClickDelete = () => {
    swal(Do you want to delete ${name}?,{
        buttons: {
            catch: {
                text: "Confirm",
                value: "confirm",
              },
            cancel: "cancel",
          },
    })
    .then((value) => {
        switch (value) {

          case "confirm":
            swal(${name} elimined);
            dispatch(deleteProduct(id))
            break;
          default:
            swal("Deletion canceled!");
        }
      });
}
const handleClickEdit = (id) => {
    history.push(/admin/editProduct/${id})
}
    return (
        <div className="box">
            <div class="product">
                <div onClick={() => handleClickDelete(id)} className='iconDelete'></div>
                <div onClick={() => handleClickEdit(id)} className='iconPencil'></div>
                <div onClick={() => history.push(/product/${id})} class="iconEye"></div>
                <img class='imgproduct'src={image} alt=" " />
            </div>
            <div className='info'>
                <h4>{name}</h4>
                <span className='description'> 
                    model: {model} <br/>
                    color: {color} <br/>
                </span>
                <span className='price'>US${price}</span>
            </div>
            <div className='details'>
                <span className='stock'>
                    Stock: {stock} <br/>
                </span>
            </div>
        </div>
    )
}*/