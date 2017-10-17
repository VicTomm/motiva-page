export default (state = [], action) => {
    switch (action.type) {
        case 'SET_SECRETARIAS':
            return action.secretarias;
        case 'GET_SECRETARIA':
            return action.secretaria;
        default:
            return state;
    }
};