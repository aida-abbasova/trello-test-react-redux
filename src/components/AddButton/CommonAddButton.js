import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { addList } from '../../store/slice/listsSlice';
import { addCard } from '../../store/slice/cardsSlice';
import { useDispatch } from 'react-redux';
import {
    createStyles,
    makeStyles,
} from "@material-ui/core/styles";


const useStyles = makeStyles(() =>
    createStyles({
        buttonCard: {
            color: 'white',
            backgroundColor: 'inherit',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-start',
            marginLeft: 10,
        },
        buttonListContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        buttonCardContainer: {
            display: 'flex',
            flexDirection: 'row',
        },
        textArea: {
            resize: 'none',
            width: 275,
            outline: 'none',
            border: 'none',
            borderRadius: 4,
            minHeight: 30,
        },
        button: {
            width: 150,
        },     
        buttonList: {
            color: 'inherit',
            backgroundColor: '#808080',
            opacity: 0.5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 6,
            height: 30,
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'column',
        },
        addButtonContainer: {
            width: 275,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space',
            alignItems: 'center',
        },
    })
);

const CommonAddButton = (props) => {
    const {
        buttonName,
        listId, 
        boardId,
        } = props;
    const [isOpenNewField, setIsOpenNewField] = useState(false);
    const [isNewText, setIsNewText] = useState('');
    const dispatch = useDispatch();
    const classes = useStyles();

    const openInputCommon = () => {
        setIsOpenNewField(true);
    }
    const valueForId = Date.now().toString();
    

    return (
        <div
            className={buttonName !== 'list' ? classes.buttonCard : classes.buttonList}
            onClick={openInputCommon}
        >
            {isOpenNewField ?
                <div 
                    className={buttonName !== 'list' 
                    ? classes.buttonListContainer : classes.buttonCardContainer} >
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Empty"
                        autoFocus
                        onBlur={() => setIsOpenNewField(false)}
                        onChange={(e) => setIsNewText(e.target.value)}
                        className={classes.textArea}
                    />
                    <Button variant="contained"
                        onMouseDown={() => {
                            if (isNewText) {
                                if (buttonName === 'list') {
                                    setIsNewText('');
                                    dispatch(addList({ boardId, id: valueForId, title: isNewText }));
                                } else {
                                    setIsNewText('');
                                    dispatch(addCard({ listId, id: valueForId, title: isNewText }));
                                }
                            }
                        }}
                        size="small"
                        className={classes.button}
                        >
                        Add {buttonName}
                    </Button>
                </div>              
                :
                <div className={classes.addButtonContainer}>
                    <AddIcon />
                    <p> Add new {buttonName}</p>
                </div>
            }
        </div>
    )
};


export default React.memo(CommonAddButton);