import { call, put, takeLatest } from 'redux-saga/effects';
import { GET_SUGGESTIONS } from './constants';
import { getSuggestionsSucceeded, getSuggestionsFailed } from './actions';
import { getAutoCompleteSuggestion } from './API';

function* getSuggestions(action) {
    const { payload } = action;
    try {
        const { status, data } = yield call(getAutoCompleteSuggestion, payload.query);
        if (status !== 200) {
            throw Error(`HTTP error with ${status}`)
        }

        yield put(getSuggestionsSucceeded({ result: data.bestMatches}))
    } catch(e) {
        yield put(getSuggestionsFailed(e.message))
    }
}

function* mySaga() {
    yield takeLatest(GET_SUGGESTIONS, getSuggestions)
}

export default mySaga;