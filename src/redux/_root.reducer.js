import { combineReducers } from 'redux';
import gallerySlice from './gallerySlice.reducer';
import direction from './direction.reducer';
import galleryView from './galleryDisplay.reducer';
import contactView from './contactView.reducer';
import miniShowcase from './miniShowcase.reducer';

const rootReducer = combineReducers({
    //   newReducerNameHere, // sets newly bought dToons
    gallerySlice,
    direction,
    galleryView,
    contactView,
    miniShowcase,

});

export default rootReducer;
