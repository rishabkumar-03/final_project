import { ACTIONS } from '../Actions';

export const addCard = ( listId,text ) => {
    return{
        type: ACTIONS.ADD_CARD ,
        payload: { listId,text }
    };
};