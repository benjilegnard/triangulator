import * as types from '../constants/ActionTypes'


export function selectTool(tool){

}

export function loadImage(image){
    return {
        type: types.IMAGE_LOAD
    }
}
export function deleteImage(image){
    return {
        type: types.IMAGE_LOAD
    }
}
export function blurImage(image){
    return {
        type: types.IMAGE_BLUR
    }
}

export function createPoint(point){
    return {
        type : types.POINT_CREATE,
        point
    }
}
export function deletePoint(point){
    return {
        type : types.POINT_DELETE,
        point
    }
}
export function selectPoint(point){
    return {
        type : types.POINT_SELECT,
        point
    }
}

export function movePoint(point){
    return {
        type : types.POINT_MOVE,
        point
    }
}

export function openPanel(id){
    return {
        type: types.PANEL_OPEN,
        id
    }
}

export function closePanel(id){
    return {
        type: types.PANEL_CLOSE,
        id

    }
}