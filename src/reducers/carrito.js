const initialState = {
    pedidos: [],
    total: 0
}

const ADDITEM = 'ADDITEM';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addShop = data => ({
    type: ADDITEM,
    payload: data,
})

export const deleteCart = data => ({
    type: REMOVE_FROM_CART,
    payload: data,
})

const Carrito = (state = initialState, action) => {
    switch (action.type) {
        case ADDITEM:

            const { id, name, price, image } = action.payload;
            if (state.pedidos.length == 0) {
                return {
                    ...state,
                    pedidos: [{ id, name, price, image, cantidad: 1 }],
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
                                price,
                                image,
                                cantidad: cantidad + 1,
                            };
                        }
                    });
                } else {
                    nuevoCarrito.push({
                        id,
                        name,
                        price,
                        image,
                        cantidad: 1,
                    });
                }

                return {
                    ...state,
                    pedidos: nuevoCarrito,
                };
            }

        // return [...state, { pedido: action.payload }]
        case REMOVE_FROM_CART:
            return state.pedidos.filter(cartItem => cartItem.id !== action.payload.id)
        default:
            return state
    }
}
export default Carrito

