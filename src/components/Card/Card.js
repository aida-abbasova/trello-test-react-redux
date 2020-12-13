import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/actions/actions';
import { Draggable } from 'react-beautiful-dnd';

const CardTrello = ({index, title, cardId, listId}) => {
  const dispatch = useDispatch();
    return(
     <Draggable draggableId={cardId} index={index}>
       {provided => (
         <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            <Card style={styles.cardContainer}>
               <CardContent>
                  <Typography  color="textSecondary" gutterBottom>
                    {title}
                  </Typography>
                </CardContent>
              <DeleteIcon onClick={() => {
                dispatch(deleteCard({cardId, listId}));
               }} />
            </Card>
          </div>
       )}             
      </Draggable>
    )
};

const styles = {
  cardContainer: {
     width: 280,
     display: 'flex',
     justifyContent: 'center',
     alignItems: 'center',
     marginBottom: 10,

  }
};

export default CardTrello;