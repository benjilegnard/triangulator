import {POINT_CREATE,POINT_DELETE,POINT_MOVE,POINT_SELECT} from '../constants/ActionTypes'

export default function pointReducer (state = [], action){


    switch (action.type) {
        case POINT_CREATE:
            return state.concat([ action.text ]);
        case POINT_DELETE:
            return state.concat([ action.text ]);
        case POINT_SELECT:
            return state.concat([ action.text ]);
        case POINT_MOVE:
            return state.concat([ action.text ]);
        default:
            return state
    }
};