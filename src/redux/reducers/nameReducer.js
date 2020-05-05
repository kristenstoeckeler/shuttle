const nameReducer = (state = {}, action) => {
    console.log('in nameReducer', action.payload);
    if (action.type === 'NAME') {
        return action.payload;
    }
    return state;
};

export default nameReducer;