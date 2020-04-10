import React from 'react';
import TrelloCard  from './trello-card.js';
import TrelloAddButton from './trelloActionButton';
import { Droppable } from 'react-beautiful-dnd';

const TrelloList = ({ title, cards, listId }) => {
    return(
        <Droppable droppableId={String(listId)}>
            { provided => (
                    <div {...provided.droppableProps} ref={provided.innerRef} className="list-conatiner">
                    <h4>{ title }</h4>
                    <div className="card-container">
                        { cards.map( (card,index) => <TrelloCard  key={ card.id } index={index} text={ card.text } id={card.id} />)}
                    </div>
                    <TrelloAddButton  listId = { listId }/>
                    {provided.placeholder}
                </div>
            )}  
        </Droppable>
        
    );
}

export default TrelloList;