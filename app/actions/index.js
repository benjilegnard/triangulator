import * as types from '../constants/ActionTypes'

export const IMAGE_LOAD = 'IMAGE_LOAD';
export const IMAGE_DELETE = 'IMAGE_DELETE';
export const IMAGE_BLUR = 'IMAGE_BLUR';
export const POINT_CREATE = 'POINT_CREATE';
export const POINT_DELETE = 'POINT_DELETE';
export const PANEL_CLOSE = 'PANEL_CLOSE';
export const PANEL_OPEN = 'PANEL_OPEN';

export const POINT_SELECT = 'POINT_SELECT';
export const POINT_MOVE = 'POINT_MOVE';
export const POLYGON_SELECT = 'POLYGON_SELECT';

export const DOCUMENT_PAN = 'DOCUMENT_PAN';
export const DOCUMENT_ZOOM = 'CANVAS_ZOOM';
export const DOCUMENT_SELECT = 'CANVAS_ZOOM';

//Toolbar actions.
export const TOOL_SELECT = 'TOOL_SELECT';

export function selectTool(tool){

}

export function loadImage(image){
    return {
        type: types.IMAGE_LOAD
    }
}
export function createPoint(point){
    return {
        type : types.POINT_CREATE,
        point
    }
}

export function openPanel(id){
    return {
        type: types.PANEL_OPEN

    }
}

export function closePanel(id){
    return {
        type: types.PANEL_CLOSE

    }
}
export function deletePoint(point){
    return {
        type : types.POINT_DELETE,
        point
    }
}