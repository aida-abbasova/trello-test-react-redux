import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/slice/cardsSlice';
import {
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";


const useStyles = makeStyles(() =>
  createStyles({
    cardContainer: {
      width: 280,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
      paddingRight: 10,
    },
    icon: {
      color: '#DCDCDC',
    },
  })
);

const CardTrello = ({ title, cardId, }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <>
      <Card className={classes.cardContainer}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {title}
          </Typography>
        </CardContent>
        <DeleteIcon
          onClick={() => {
            dispatch(deleteCard(cardId));
          }}
          className={classes.icon}
        />
      </Card>
    </>
  )
};

export default CardTrello;