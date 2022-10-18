const initialState = [{
    pedido: [],
    total: 0
}]

const ADDITEM = 'ADDITEM';

export const addShop = id => ({
    type: 'ADDITEM',
    payload: id,
})

const Carrito = (state = initialState, action) => {
    // console.log('action ', action)
    switch (action.type) {
        case 'ADDITEM':
            return [...state, action.payload]
        // case 'REMOVE_FROM_CART':
        //     return state.filter(cartItem => cartItem.id !== action.payload.id)
        default:
            return state
    }
}
export default Carrito;


