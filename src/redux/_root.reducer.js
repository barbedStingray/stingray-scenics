import { combineReducers } from 'redux';
import gallerySlice from './gallerySlice.reducer';
import direction from './direction.reducer';



const rootReducer = combineReducers({
    //   newReducerNameHere, // sets newly bought dToons
    gallerySlice,
    direction,

});

export default rootReducer;
