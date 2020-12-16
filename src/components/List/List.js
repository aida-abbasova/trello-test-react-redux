import React from 'react';
import CardTrello from '../Card/Card';
import Typography from '@material-ui/core/Typography';
import CommonAddButton from '../AddButton/CommonAddButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { deleteList } from '../../store/slice/listsSlice';
import { deleteListCards } from '../../store/slice/cardsSlice';
import { Draggable, Droppable } from 'react-beautiful-dnd';
import {
    createStyles,
    makeStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
    createStyles({
        listContainer: {
            width: 300,
            backgroundColor: '#C0C0C0',
            borderRadius: 4,
            minHeight: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        titleList: {
            alignSelf: 'flex-start',
            marginLeft: 10,
        },
        list: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'space-between',
        },
        icon: {
            color: '#DCDCDC',
        },

    })
);

const List = ({ title, listId, index }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const allCards = useSelector((_) => _.cards);
    const cards = allCards.filter(cards => cards.listId === listId);

    return (
            <div>
                <Droppable droppableId={`list${listId}`}>
                    {provided => (
                        <div className={classes.listContainer}
                            {...provided.droppableProps} ref={provided.innerRef}
                        >
                            <div className={classes.list}>
                                <Typography variant="h6" component="h2" className={classes.titleList}>
                                    {title}
                                </Typography>
                                <DeleteIcon
                                    className={classes.icon}
                                    onClick={() => {
                                        dispatch(deleteList(listId));
                                        dispatch(deleteListCards(listId));
                                    }} />
                            </div>
                            <div className={classes.cardsContainer}>
                                {cards && cards.map(((card, index) => (
                                    <Draggable key={card.id} index={index} draggableId={`card${card.id}`}>
                                        {provided => (
                                            <div {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                                                <CardTrello key={card.id} index={index} title={card.title} cardId={card.id} listId={listId} />
                                            </div>
                                        )}
                                    </Draggable>

                                )))}
                                <CommonAddButton buttonName='card' listId={listId} />
                            </div>
                            {provided.placeholder}
                        </div>
                    )}

                </Droppable>
            </div>
    )
};

export default List;