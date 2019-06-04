import {combineReducers} from 'redux';
import imageReducer from './images';

export default combineReducers({
  images: imageReducer
})