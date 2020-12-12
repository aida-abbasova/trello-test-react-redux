import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';


const CardTrello = ({title}) => {
    return(
        <Card style={styles.cardContainer}>
        <CardContent>
          <Typography  color="textSecondary" gutterBottom>
          {title}
          </Typography>
        </CardContent>
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