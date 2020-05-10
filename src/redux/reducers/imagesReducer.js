const imagesReducer = (state = [], action) => {
    console.log('in imagesReducer', action.payload);
    if (action.type === 'IMAGES') {
        return action.payload;
    }
    return state;
};

export default imagesReducer;