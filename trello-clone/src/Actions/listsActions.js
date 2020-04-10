import { ACTIONS } from '../Actions';

export const addList = title => {
    return{
        type: ACTIONS.ADD_LIST ,
        payload: title
    };
};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId
    ) => {
    return{
        type: ACTIONS.AFTER_DRAG ,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId
        }
    };
};