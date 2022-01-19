import {
	GET_PRODUCTS,

} from "../actions";

/*GET_IMGS,
EDIT_PRODUCT,	
CREATE_PRODUCT,
ADD_PRODUCTS_OF_CATEGORY,
DELETE_PRODUCTS_CATEGORY,
DELETE_PRODUCT,*/

const initialState={
	products: [],
	allProducts: [],
	/*productId: [],
	productsOfCategory: [],
	imgs: [],*/	
}

export default function reducer (state = initialState, action) {
    
    switch (action.type) {
        case GET_PRODUCTS:
			return {
				...state,
				products: action.payload,
			}


			/*case POST_PRODUCT:
				return {
					...state,
					productsOfCategory:[]
				}
			
			case ADD_PRODUCTS_OF_CATEGORY:
				return action.payload === ''? state : state.productsOfCategory.includes(action.payload)? state : {
					...state,
					productsOfCategory: [ ...state.productsOfCategory, action.payload]
				}
			
			case DELETE_PRODUCTS_CATEGORY:
				return {
					...state,
					productsOfCategory: state.productsOfCategory.filter(el => el.name !== action.payload)
				}
			
			case DELETE_PRODUCT:
            state.allProducts = state.allProducts.filter(el => el.id !== action.payload)
            return{
                ...state,
                products: state.allProducts
            }

			case GET_IMGS:{
				return {
					...state,
					imgs: action.payload
				}
			}*/
			default:
				return state;
			}
}
		