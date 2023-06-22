import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getSuggestions } from './actions';

const SearchBar = ({suggestions, dispatchGetSuggestion}) => {
    let queryString = "";

    const updateQueryString = (event) => {
        queryString = event.target.value;
    };

    const generateAutoCompleteSuggestions = (suggestions) => {
        if(!suggestions?.result) {
            return null;
        }
        const { result } = suggestions;

        return (
            result.map((items) => {
                return (
                    <tr>{ JSON.stringify(items) }</tr>
                )
            })
        );
    };

    return (
        <>
        <div>
            <input placeholder="Enter Stock Ticker" onChange={ updateQueryString }/>
            <button onClick={ () => {
                dispatchGetSuggestion(queryString);
            } }>Search</button>
        </div>
        <div>
            <table>
                <tbody>
                    { generateAutoCompleteSuggestions(suggestions) }
                </tbody>
            </table>
        </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        suggestions: state.homeReducer.suggestions
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchGetSuggestion: (query) => dispatch(getSuggestions(query))
    }
}

SearchBar.propTypes = {
    suggestions: PropTypes.object,
    dispatchGetSuggestion: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);