import React, { useEffect, } from 'react';
import List from '../../components/List/List';
import { useDispatch, useSelector } from 'react-redux';

import { getList } from '../../store/actions/actions';
import CommonAddButton from '../../components/common  component/CommonAddButton';



const BoardTrello = () => {
    
const dispatch = useDispatch();
const lists = useSelector((_) => _.list);

    return(
        <>
        HERE
        <div style={styles.container}>
        
        {lists && lists instanceof Array && lists.map(list => {
            return(
            <List key={list.id} title={list.title} cards={list.cards} listId={list.id}/>
            )
        })}
        <CommonAddButton buttonName='list' />
        </div>
        
        </>
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