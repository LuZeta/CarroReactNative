const initialState = {
    pedido: [],
    total: 0
}

const ADDITEM = 'ADDITEM';

export const addShop = data => ({
    type: ADDITEM,
    payload: data,
})

const Carrito = (state = initialState, action) => {
    switch (action.type) {
        case ADDITEM:
            return console.log('action: ', action)
        // return [...state, action.payload]
        // case 'REMOVE_FROM_CART':
        //     return state.filter(cartItem => cartItem.id !== action.payload.id)
        default:
            return state
    }
}
export default Carrito

