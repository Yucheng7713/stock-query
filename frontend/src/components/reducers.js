import { GET_SUGGESTIONS, GET_SUGGESTIONS_SUCCEEDED, GET_SUGGESTIONS_FAILED } from './constants';


const homeReducer = (state = {}, action) => {
    const { type, payload } = action;
    switch(type) {
        case GET_SUGGESTIONS:
            return {
                ...state,
                queryString: payload.query
            }
        case GET_SUGGESTIONS_SUCCEEDED:
            return {
                ...state,
                suggestions: { ...payload }
            }
        case GET_SUGGESTIONS_FAILED:
            console.log(`ERROR : failed at action GET_SUGGESTIONS_FAILED > ${payload.message}`)
            return state;
        default:
            return state;
    }
};

export default homeReducer;