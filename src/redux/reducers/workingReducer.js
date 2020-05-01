const workingReducer = (state = {}, action) => {
    console.log('in workingReducer', action.payload);
    if (action.type === 'WORKING_REDUCER') {
        return action.payload;
    }
    return state;
};

export default workingReducer;
