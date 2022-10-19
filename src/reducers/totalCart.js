
const totalCart = {
    total: 0
}

const SET_TOTAL_CART = 'SET_TOTAL_CART';

export const setTotalCart = data => ({
    type: SET_TOTAL_CART,
    payload: data,
})

const reducerTotal = (state = totalCart, action) => {
    switch (action.type) {
        case SET_TOTAL_CART:

            return state.total = action.payload

        default:
            return state
    }
}
export default reducerTotal