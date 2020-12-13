import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/actions/actions';


const CardTrello = ({title, cardId, listId}) => {
  const dispatch = useDispatch();
    return(
        <Card style={styles.cardContainer}>
        <CardContent>
          <Typography  color="textSecondary" gutterBottom>
          {title}
          </Typography>
        </CardContent>
        <DeleteIcon onClick={() => {
                console.log(1)
                dispatch(deleteCard({cardId, listId}));
                      
            }} />
      </Card>
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