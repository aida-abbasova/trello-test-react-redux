import React, { useEffect, } from 'react';
import CardTrello from '../Card/Card';
import Typography from '@material-ui/core/Typography';
import CommonAddButton from '../common  component/CommonAddButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from 'react-redux';
import { deleteList } from '../../store/actions/actions';

const List = ({title, cards, listId}) => {
    const dispatch = useDispatch();
    return(
        <div>
            <div style={styles.listContainer}>
            <Typography variant="h6" component="h2" style={styles.titleList}>
                    {title}
            </Typography>
            <DeleteIcon onClick={() => {
                dispatch(deleteList(listId));
                      
            }} />
            <div style={styles.cardsContainer}>
            {cards && cards.map((card => {
                return(
                    <CardTrello key={card.id} title={card.title} cardId={card.id} listId={listId}/>
                )
            }))}
            <CommonAddButton buttonName='card' listId={listId}/>
            </div>
            </div>
        </div>
      
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