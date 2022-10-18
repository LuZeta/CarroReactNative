const initialState = {
    pedidos: [],
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
            console.log('action.payload ', action.payload)
            const { id, name, price } = action.payload;
            if (state.pedidos.length == 0) {
                return {
                    ...state,
                    pedidos: [{ id, name, price, cantidad: 1 }],
                };
            } else {
                const nuevoCarrito = [...state.pedidos];
                const exist = nuevoCarrito.filter((productoC) => {
                    return productoC.id === id;
                }).length > 0;

                if (exist) {
                    nuevoCarrito.forEach((productoC, index) => {
                        if (productoC.id == id) {
                            const cantidad = nuevoCarrito[index].cantidad;
                            nuevoCarrito[index] = {
                                id,
                                name,
                                cantidad: cantidad + 1,
                            };
                        }
                    });
                } else {
                    nuevoCarrito.push({
                        id,
                        name,
                        cantidad: 1,
                    });
                }

                return {
                    ...state,
                    pedidos: nuevoCarrito,
                };
            }

        // return [...state, { pedido: action.payload }]
        // case 'REMOVE_FROM_CART':
        //     return state.filter(cartItem => cartItem.id !== action.payload.id)
        default:
            return state
    }
}
export default Carrito

