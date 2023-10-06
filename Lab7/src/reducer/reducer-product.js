function reducer(state, action) {
    if (action.type === 'ADD_PRODUCT') {
        if (state.value !== '') {
            return {
                id: state.id + 1,
                value: '',
                products: [{
                    id: state.id,
                    name: state.value
                }, ...state.products],
                showMessage: true,
                text: 'Додано',
                typeMessage: 'success'
            }
        } else {
            return {
                id: state.id,
                value: '',
                products: state.products,
                showMessage: false,
                text: 'Додано',
                typeMessage: 'success'
            }
        }
    }
    if (action.type === 'SET_VALUE') {
        return {
            id: state.id,
            value: action.nextValue,
            products: state.products,
            showMessage: false,
            text: 'Додано',
            typeMessage: 'success'
        };
    }
    if (action.type === 'DELETE_PRODUCT') {
        const products = state.products.filter(el => el.id !== parseInt(action.id));
        return {
            id: state.id,
            value: '',
            products: [...products],
            showMessage: true,
            text: `Видалено `,
            typeMessage: 'danger'
        };
    }
    if (action.type === 'HIDE_MESSAGE') {
        return {
            id: state.id,
            value: '',
            products: state.products,
            showMessage: false,
            text: 'Додано',
            typeMessage: 'success'
        };
    }
    return new Error("Невідома дія")
}

export default reducer;