import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { addNewCard } from '../../store/actions/actions';

const CommonAddButton = ({buttonName}) => {
    const [isOpenNewField,setIsOpenNewField] = useState(false);
    const [isNewText,setIsNewText] = useState('');

    const addNewCommon = () => {
        setIsOpenNewField(true);
    }

    return(
        <div 
            style={buttonName === 'card'? styles.buttonCard : styles.buttonList}
            onClick={addNewCommon}
            >  
                {isOpenNewField ?   
                <div style={styles.inputContainer}>
                     <TextareaAutosize 
                       aria-label="empty textarea" 
                       placeholder="Empty" 
                       autoFocus
                       onBlur={() => setIsOpenNewField(false)}
                       onChange={(e)=> setIsNewText(e.target.value)}
                       style={{
                           resize: 'none',
                           width: 275,
                           outline: 'none',
                           border: 'none',
                           borderRadius: 4,
                           minHeight: 30,
                       }}
                       />
                    <Button variant="contained" 
                      onMouseDown={() => addNewCard(isNewText)}
                      size="small"
                      style={{
                          width:150,
                      }}>
                          Add {buttonName}
                      </Button>
                    </div>
                    : 
                    <>
                      <AddIcon />
                      <p> Add new {buttonName}</p>
                    </>
                }
        </div>
    )
};

const styles = {
    buttonCard: {
        color: 'white',
        backgroundColor: 'inherit',
        display:'flex',
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'flex-start',
        marginLeft: 10,
    }, 
    buttonList: {
        color: 'inherit',
        backgroundColor: '#808080',
        opacity: 0.5,
        display:'flex',
        flexDirection: 'row', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:6,
        height: 40,
    },
    inputContainer: {
        display:'flex',
        flexDirection:'column',
       // width: 300,
    }
};

export default CommonAddButton;