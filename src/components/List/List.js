import React, { useEffect, } from 'react';
import CardTrello from '../Card/Card';
import Typography from '@material-ui/core/Typography';
import CommonAddButton from '../common  component/CommonAddButton';

const List = ({title, cards}) => {
    return(
        <div style={styles.listContainer}>
            <Typography variant="h6" component="h2" style={styles.titleList}>
                    {title}
            </Typography>
            {/* <div style={styles.cardsContainer}> */}
            {cards.map((card => {
                return(
                    <CardTrello key={card.id} title={card.title}/>
                )
            }))}
            <CommonAddButton buttonName='card'/>
            {/* </div> */}
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
        justifyContent: 'center',
        alignItems: 'center',
       //gap:10,
    },
    titleList: {
        alignSelf: 'flex-start',
        marginLeft: 10,
    }
};

export default List;