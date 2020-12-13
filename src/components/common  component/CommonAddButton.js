import React, { useEffect, useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Button from '@material-ui/core/Button';
import { addNewCard, addNewList, deleteList } from '../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';
import { nanoid } from 'nanoid';

const CommonAddButton = ({ buttonName, listId }) => {
    const [isOpenNewField, setIsOpenNewField] = useState(false);
    const [isNewText, setIsNewText] = useState('');
    const dispatch = useDispatch();
    console.log(buttonName, 'buttonName')

    const openInputCommon = () => {
        setIsOpenNewField(true);
    }

    const widthButton = (buttonName === 'list' ? 150 : 275);

    return (
        <div
            style={buttonName !== 'list' ? styles.buttonCard : styles.buttonList}
            onClick={openInputCommon}
        >
            {isOpenNewField ?
                <div style={buttonName !== 'list' ? {
                    display: 'flex',
                    flexDirection: 'column',
                } : {
                    display: 'flex',
                        flexDirection: 'row',
                    }} >
                    <TextareaAutosize
                        aria-label="empty textarea"
                        placeholder="Empty"
                        autoFocus
                        onBlur={() => setIsOpenNewField(false)}
                        onChange={(e) => setIsNewText(e.target.value)}
                        style={{
                            resize: 'none',
                            width: widthButton,
                            outline: 'none',
                            border: 'none',
                            borderRadius: 4,
                            minHeight: 30,
                        }}
                    />
                    <Button variant="contained"
                        onMouseDown={() => {
                            if (isNewText) {
                                if (buttonName === 'list') {
                                    setIsNewText('');
                                    dispatch(addNewList({ id: `list.${nanoid(8)}`, isNewText }));
                                } else {
                                    setIsNewText('');
                                    dispatch(addNewCard({ id: nanoid(8), title: isNewText, listId }));
                                }
                            }
                        }}
                        size="small"
                        style={{
                            width: 150,
                        }}>
                        Add {buttonName}
                    </Button>
                </div>              
                :
                <div style={styles.addStyles}>
                    <AddIcon />
                    <p> Add new {buttonName}</p>
                </div>
            }
        </div>
    )
};

const styles = {
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
    addStyles: {
        width: 275,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
};

export default React.memo(CommonAddButton);