import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { moviereducer, details } from '../reducers/moviereducer'; // Import both reducers
import { composeWithDevTools } from 'redux-devtools-extension';
import {thunk} from 'redux-thunk';

// Combine reducers
const rootReducer = combineReducers({
    movies: moviereducer, // Handles the list of movies
    details: details // Handles the movie details
});

// Create the store with the combined reducers
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
