import React from 'react';
import CardTrello from '../Card/Card';
import Typography from '@material-ui/core/Typography';
import CommonAddButton from '../common  component/CommonAddButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../store/actions/actions';
import { Draggable, Droppable } from 'react-beautiful-dnd';

const List = ({title, cards, listId, index }) => {
    const dispatch = useDispatch();
    return(
        <Draggable draggableId={listId} index={index}>
            {provided => (
                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                 <Droppable droppableId={listId}>
                    {provided => (
                        <div style={styles.listContainer}  {...provided.droppableProps} ref={provided.innerRef}>
                            <Typography variant="h6" component="h2" style={styles.titleList}>
                                {title}
                            </Typography>
                            <DeleteIcon onClick={() => {
                                dispatch(deleteList(listId));
                                }} />
                            <div style={styles.cardsContainer}>
                            {cards && cards.map(((card, index) => {
                                return(
                                <CardTrello key={card.id} index={index} title={card.title} cardId={card.id} listId={listId}/>
                                )
                            }))}
                            <CommonAddButton buttonName='card' listId={listId}/>
                            </div>
                        {provided.placeholder}
                        </div>
                    )}

                </Droppable> 
                </div>
            )}
        </Draggable>
    )
};

const styles = {
    listContainer: {
        width: 300,
        backgroundColor: '#C0C0C0',
        borderRadius: 4,
        minHeight: 20,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       //gap:10,
    },
    titleList: {
        alignSelf: 'flex-start',
        marginLeft: 10,
    }
};

export default List;