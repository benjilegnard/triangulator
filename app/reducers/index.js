import {combineReducers} from 'redux';
import pointReducer from './pointReducer';
import documentReducer from './documentReducer';
import triangleReducer from './triangleReducer';

const rootReducer = combineReducers({
    points:pointReducer,
    documents:documentReducer,
    triangles:triangleReducer
});

export default rootReducer;