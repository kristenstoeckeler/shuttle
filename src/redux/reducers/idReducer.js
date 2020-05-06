const idReducer = (state = {}, action) => {
    console.log('in idReducer', action.payload);
    if (action.type === 'ID') {
        return action.payload;
    }
    return state;
};

export default idReducer;