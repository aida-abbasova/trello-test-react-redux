import React from 'react';
import List from '../../components/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CommonAddButton from '../../components/AddButton/CommonAddButton';
import { sortAfterDragAndDrop } from '../../store/slice/listsSlice';
import { sortAfterDragAndDropCard } from '../../store/slice/cardsSlice';
import { Typography } from '@material-ui/core';

import {
    createStyles,
    makeStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        container: {
            marginLeft: '20%',
        }, 
        listsContainer: {
            marginLeft: '-10%',
            marginTop: '5%',
            display: 'flex',
            flexDirection: 'row',
            gap:10,
        },
    })
);


const BoardTrello = (props) => { 
const { boardId } = props.match.params;  
const dispatch = useDispatch();
const classes = useStyles();
const allLists = useSelector((_) => _.lists);
const lists = allLists.filter(lists => lists.boardId === boardId);


const onDragEnd=(result) => {
    const { destination, source,draggableId, type, } = result;
    console.log(destination, source,draggableId, type,'destination, source,draggableId, type,')
    if(!destination) {
        return null;
    }
    if (type === 'list') {
        dispatch(sortAfterDragAndDrop({
            droppableIdStart: source.droppableId, 
            droppableIdEnd: destination.droppableId, 
            droppableIndexStart: source.index, 
            droppableIndexEnd:destination.index, 
            draggableId,
            type,
        }));
    } else {
        dispatch(sortAfterDragAndDropCard({
            droppableIdStart: source.droppableId, 
            droppableIdEnd: destination.droppableId, 
            droppableIndexStart: source.index, 
            droppableIndexEnd:destination.index, 
            draggableId,
            type,
        }));
    }

}

    return(
        <DragDropContext onDragEnd={onDragEnd}>
        <div className={classes.container}>
        <Typography>
            Your personal board
        </Typography>
        <Droppable droppableId='droppableIdList' direction="horizontal" type='list'>
            {provided => {
                console.log(provided,'providedprovidedprovided')
                return (
                <div className={classes.listsContainer} {...provided.droppableProps} ref={provided.innerRef}>
                {lists && lists instanceof Array && lists.map((list, index) => (
                    <Draggable key={list.id} index={index} draggableId={`list${list.id}`}>
                     {provided => (
                         <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                        <List title={list.title} cards={list.cards} listId={list.id} index={index}/>
                        </div>
                     )}
                    </Draggable>
                    )
                )}
                {provided.placeholder}
                <CommonAddButton buttonName='list' boardId={boardId}/>
                </div>
            )}}
        </Droppable>
        </div>
        </DragDropContext>
    )
};

export default BoardTrello;