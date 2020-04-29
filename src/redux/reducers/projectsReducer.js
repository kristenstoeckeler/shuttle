const projectReducer = (state = [], action) => {
    console.log( 'in projectReducer', action.payload);
    if (action.type === 'SET_PROJECT') {
        return action.payload;
    }
    return state;
};

export default projectReducer;
