import { GET_SUGGESTIONS, GET_SUGGESTIONS_SUCCEEDED, GET_SUGGESTIONS_FAILED } from './constants';

function getSuggestions(query) {
    return {
        type: GET_SUGGESTIONS,
        payload: { query }
    };
}

function getSuggestionsSucceeded(result) {
    return {
        type: GET_SUGGESTIONS_SUCCEEDED,
        payload: result
    }
}

function getSuggestionsFailed(message) {
    return {
        type: GET_SUGGESTIONS_FAILED,
        payload: { message }
    }
}


export {
    getSuggestions,
    getSuggestionsSucceeded,
    getSuggestionsFailed
};