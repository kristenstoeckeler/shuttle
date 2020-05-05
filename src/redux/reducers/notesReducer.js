const notesReducer = (state = {}, action) => {
    // console.log('in notesReducer', action.payload);
    if (action.type === 'NOTES') {
        return [action.payload];
    }
    return state;
};

export default notesReducer;
