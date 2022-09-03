import React, {useState, useRef,} from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { commentPost } from '../../actions/posts.js'

import useStyles from './styles';

const CommentSection = ({ post }) => { //post = props from PostDetails (parent)
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));
    const [comments, setComments] = useState(post?.comments);
    const [comment, setComment] = useState('');
    const commentsRef = useRef();

    const handleClick = async () => {
        const finalComment = `${user.result.name}: ${comment}`;

        const newComments = await dispatch(commentPost(finalComment, post._id));

        setComments(newComments);
        setComment('');

        commentsRef.current.scrollIntoView({ behavior: 'smooth' });

    };

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography gutterBottom variant="h6">
                    <u style={{fontSize: 18}}>Comments</u></Typography>
                    {comments && comments.map((c, i) => (
                        <Typography key={i} gutterBottom variant="subtitle1">
                            <strong>{c.split(': ')[0]}</strong>
                            {c.split(':')[1]}
                        </Typography>
                    ))}
                    {/* goes down to this specific ref cuz its our anchor point */}
                    <div ref={commentsRef} /> 
                </div>
                {user?.result?.name && (
                    <div style={{ width: '70%'}}>
                        <Typography gutterBottom variant="h6" style={{fontSize: 14}}>Write a Comment</Typography>
                        <TextField 
                            fullWidth
                            minRows={4}
                            variant="outlined"
                            label="Comment"
                            multiline
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            />
                        <Button style={{marginTop: '10px'}} fullWidth disabled={!comment} variant="contained" color="primary" onClick={handleClick}>
                            Comment
                        </Button>
                    </div>
                 )}
            </div>
        </div>
    )
}

export default CommentSection;