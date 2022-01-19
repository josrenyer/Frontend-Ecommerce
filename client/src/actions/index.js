import axios from "axios";

export const GET_PRODUCTS = 'GET_PRODUCTS'
/*export const GET_IMGS = 'GET_IMGS'
export const CREATE_PRODUCT = 'CREATE_PRODUCT'
export const ADD_PRODUCTS_OF_CATEGORY = 'ADD_PRODUCTS_OF_CATEGORY'
export const DELETE_PRODUCTS_CATEGORY = 'DELETE_PRODUCTS_CATEGORY'
export const EDIT_PRODUCT = 'EDIT_PRODUCT'
export const DELETE_PRODUCT = 'DELETE_PRODUCT'*/


export function getProducts () {
    return async function (dispatch) {
        try {
            let products = await axios.get("http://localhost:4000/apple")
            console.log(products.data);
            return dispatch({
                type: GET_PRODUCTS,
                payload: products.data
            })
        }
        catch (err) {
            console.log(err);
        }
    }
};

/*
export function getImgs(){
    return async function(dispatch) {
        try {
            const {data} = await axios.get(`http://localhost:3001/products/images`)
            return dispatch({type: GET_IMGS, payload: data})
        } catch (error) {
            console.log(error)
        }
    }
};

export function postProduct(payload){
    return async function(dispatch){
        try{
            const { data } = await axios.post('http://localhost:3001/products/create', {...payload})
            return dispatch({type: CREATE_PRODUCT, payload: data})
        }
        catch(err){
            console.log(err)
        }
    }
};

export function editproduct (payload){
    return async function(dispatch){
        try{
            const { data } = await axios.put(`http://localhost:3001/products/edit/${payload.id}`, {...payload})
            alert(data)
            return dispatch({type: EDIT_PRODUCT, payload: data})
        }
        catch(err){
            console.log(err)
        }
    }
};

export function deleteProduct (id) {
    return async function (dispatch) {
        try {   
            await axios.delete(`http://localhost:3001/products/${id}`)
            return dispatch({type: DELETE_PRODUCT, payload: id})
        }
        catch (err) {
            console.log(err);
        }
    }
};

export function addProductsOfCategory (payload){
    return async function (dispatch) {
        try {
            const { data } = await axios.post(`http://localhost:3001/products/category`, {...payload})
            return dispatch({type: ADD_PRODUCTS_OF_CATEGORY, payload: data})
        }
        catch (err) {
            console.log(err);
        }
    }
}

export function deleteProdutsCategory (payload){
    return async function (dispatch) {
        try {
            const { data } = await axios.delete(`http://localhost:3001/products/category/${payload.id}`)
            return dispatch({type: DELETE_PRODUCTS_CATEGORY, payload: data})
        }
        catch (err) {
            console.log(err);
        }
    }
};


*/


