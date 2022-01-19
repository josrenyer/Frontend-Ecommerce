import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions'


export default function AdminGral(){

    const dispatch = useDispatch()
    const { products } = useSelector(state => state)


    useEffect(() => {
        dispatch(getProducts())
        //dispatch(getImgs())
    }, [dispatch]);


    if(products ){
	return(<>

        <h1>hola soy el AdminGral</h1>

	</>
	)
    }else{
        return(<>

            <h1> no te traiste nada</h1>
    
        </>
        )
    }
}









/*import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router'
import { getProducts, getImgs } from '../../actions'
import ProductsAdmin from './ProductsAdmin'
//import styles from '../../css/Admin.module.css'
import NavBar from '../NavBar'

const AdminGral = () => {
   const dispatch = useDispatch()
    // const history = useHistory()
    const { products } = useSelector(state => state)
    console.log('products en AdminGral', products)

useEffect(() => {
    dispatch(getProducts())
    //dispatch(getImgs())
    }, [dispatch]);
    return (
        <div>
        <NavBar/>
            <Link to="/admin/createCa">
          <button>Admin Panel Category</button>
            </Link>
            <Link to="/admin/createProducts">
          <button>Admin Panel Products</button>
            </Link>
                <section className={styles.section}>
                    <h3>Results:</h3>
                    <div className={styles.containerProducts}>
                    {products.map( el => 
                        <ProductsAdmin
                        id = {el.id}
                        name = {el.name}
                        color = {el.color}
                        storage={el.storage}
                        image = {el.image}
                        price = {el.price}
                        stock = {el.stock}
                        connectivity= {el.connectivity}
                        RAM = {el.RAM}
                        model = {el.model}
                        />)}
                    </div>
                </section>
        </div>
    )
}

export default AdminGral*/