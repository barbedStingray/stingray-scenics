import { combineReducers } from 'redux';
import gallerySlice from './gallerySlice.reducer';
import direction from './direction.reducer';
import galleryView from './galleryView.reducer';
import contactView from './contactView.reducer';
import miniShowcase from './miniShowcase.reducer';
import loadStatus from './loadStatus.reducer';

const rootReducer = combineReducers({
    gallerySlice,
    direction,
    galleryView,
    contactView,
    miniShowcase,
    loadStatus,

});

export default rootReducer;
