import { ACTIONS } from '../Actions';

let listId = 2;
let cardId = 16;

const initialState = {
    boardTitle: 'App planing',
    listArray: [
        {
        id: 0,
        title: 'To-Do',
        cards: [
            {
                text: 'Components',
                id: 10
            },
            {
                text: 'Actions',
                id: 11
            },
            {
                text: 'Store',
                id: 12
            },
            {
                text: 'Reducers',
                id: 13
            }
        ]
    },
    {
        id: 1,
        title: 'Doing',
        cards: [
            {
                text: 'Breaking into Components',
                id: 14
            },
            {
                text: 'Creating',
                id: 15
            }
        ]
    }
] 
} 



const ListsReducer = (state= initialState, action) => {
    switch(action.type){

        case ACTIONS.ADD_LIST:
            const newList = {
                title: action.payload,
                cards: [],
                id: listId
            }
            listId = listId + 1;
            let newListArray = state.listArray.slice(0);
            newListArray.push(newList);
            return {...state, listArray: newListArray};
        case ACTIONS.ADD_CARD:
            const newCard = {
                text: action.payload.text,
                id: cardId
            }
            cardId += 1;

            let listIndex = action.payload.listId;
            let newListArray1 = [...state.listArray];
            newListArray1[listIndex].cards.push(newCard);
            return { ...state,listArray: newListArray1};
           /* const newStte=state.listArray.map( list => {
                if(list.id === action.payload.listId){
                    //return  { ...list, cards: [...list.cards,newCard]};
                    return  [...list.cards, newCard ];              
                }
                else{
                    return [list];
                }
            });
            return newStte; */

        case ACTIONS.AFTER_DRAG:
            const { droppableIdStart,
                droppableIdEnd,
                droppableIndexEnd,
                droppableIndexStart,
                draggableId } = action.payload;
            const newState = {...state};
            if(droppableIdStart === droppableIdEnd) {
                let dropList = state.listArray.find( list => droppableIndexStart === list.id );
                const card = dropList.cards.splice(droppableIndexStart, 1);
                dropList.cards.splice(droppableIndexEnd, 0, ...card);
                
            }

            return newState;

        default: 
            return state;
    }
};

export default  ListsReducer;