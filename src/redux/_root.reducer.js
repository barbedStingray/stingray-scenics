import { combineReducers } from 'redux';
import gallerySection from './gallerySection.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga


const rootReducer = combineReducers({  
//   newReducerNameHere, // sets newly bought dToons
gallerySection,
  
});

export default rootReducer;
