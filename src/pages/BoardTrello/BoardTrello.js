import React, { useEffect, } from 'react';
import List from '../../components/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import CommonAddButton from '../../components/common  component/CommonAddButton';
import { sortAfterDragAndDrop } from '../../store/actions/actions';


const BoardTrello = () => {
    
const dispatch = useDispatch();
const lists = useSelector((_) => _.list);

const onDragEnd=(result) => {
    const { destination, source,draggableId, type, } = result;
    if(!destination) {
        return null;
    }
    dispatch(sortAfterDragAndDrop({
        droppableIdStart: source.droppableId, 
        droppableIdEnd: destination.droppableId, 
        droppableIndexStart: source.index, 
        droppableIndexEnd:destination.index, 
        draggableId,
        type,
    }));
}


    return(
        <DragDropContext onDragEnd={onDragEnd}>
        <>
        HERE
        <Droppable droppableId='droppableId' direction="horizontal" type='list'>
            {provided => (
                <div style={styles.container} {...provided.droppableProps} ref={provided.innerRef}>
                {lists && lists instanceof Array && lists.map((list, index) => (
                     <List key={list.id} title={list.title} cards={list.cards} listId={list.id} index={index}/>
                    )
                )}
                {provided.placeholder}
                <CommonAddButton buttonName='list' />
                </div>
            )}
        </Droppable>
        </>
        </DragDropContext>
    )
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        gap:10,   
    }
};

export default BoardTrello;