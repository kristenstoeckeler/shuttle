const detailReducer = (state = [], action) => {
    console.log('in detailReducer', action.payload);
    if (action.type === 'DETAIL_REDUCER') {
        return action.payload;
    } else if(action.type === 'DETAIL_RESET'){
        return action.payload
    }
    return state;
};

export default detailReducer;
