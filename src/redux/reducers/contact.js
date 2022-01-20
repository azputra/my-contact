const initialState = {
    allContact: [],
    detailContact: [],
    categoryContact: []
}

const contactReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ALL_CONTACTS":
            return {...state, allContact:action.payload}
        case "DETAIL_CONTACTS":
            return {...state, detailContact:action.payload}
        case "CATEGORY_CONTACTS":
            return {...state, categoryContact:action.payload}
        default:
            return state;
    }
}

export default contactReducer