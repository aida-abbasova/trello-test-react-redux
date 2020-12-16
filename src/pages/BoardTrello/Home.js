import React, { useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { addBoards } from '../../store/slice/boardsSlice';
import Input from '@material-ui/core/Input';
import { Link } from "react-router-dom";
import {
    createStyles,
    makeStyles,
} from "@material-ui/core/styles";


const useStyles = makeStyles(() =>
    createStyles({
        container: {
            display: 'flex',
            alignItems: 'flex-start',
            flexDirection: 'column',
            marginLeft: '10%',

        },
        containerCard: {
            display: 'flex',
            flexDirection: 'column',
            width: 300,
            height: 70,
            backgroundColor: '#B0C4DE',
            marginBottom: 20,
            alignItems: 'center',
        },
        inputContainer: {
            display: 'flex',
            flexDirection: 'row',
            width: 300,
        },
        button: {
            backgroundColor: '#B0C4DE',
        },
        buttonNewBoard: {
            backgroundColor: '#808080',
            width: 300,
            opacity: 0.5,
        },
        link: {
            textDecoration: 'none',
        }
    })
);

const Home = () => {
    const classes = useStyles();
    const [isInputShown, setIsInputShown] = useState(false);
    const [isBoardTitle, setIsBoardTitle] = useState('');
    const dispatch = useDispatch();
    const boards = useSelector((_) => _.boards);
    const valueForId = Date.now().toString();
    console.log(typeof valueForId)


    return (
        <div className={classes.container}>
            <Typography variant="h6" component="h2">
                Персональные доски
        </Typography>
            {boards && boards.map(board => (
                <Link
                    key={board.id}
                    className={classes.link}
                    to={{
                        pathname: `/${board.id}`,
                        propsBoard: { boardId: board.id, lists: board.lists }
                    }}
                    lists={boards.lists}
                >
                    <Card className={classes.containerCard}>
                        <CardContent>
                            <Typography>
                                {board.title}
                            </Typography>
                        </CardContent>
                    </Card>
                </Link>
            ))}
            {isInputShown ? (
                <div className={classes.inputContainer}>
                    <Input
                        autoFocus
                        value={isBoardTitle}
                        onChange={(e) => {
                            setIsBoardTitle(e.target.value);
                        }}
                    />
                    <Button
                        className={classes.button}
                        onMouseDown={() => {
                            setIsInputShown(false);
                            setIsBoardTitle('');
                            dispatch(addBoards({ id: valueForId, title: isBoardTitle }));
                        }}>
                        Add
                     </Button>
                </div>
            ) : (
                    <Button
                        className={classes.buttonNewBoard}
                        onMouseDown={() => {
                            setIsInputShown(true);
                        }}>
                        Add new Board
                    </Button>

                )}
        </div>
    )
}

export default Home;