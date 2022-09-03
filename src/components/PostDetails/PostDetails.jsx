import React, { useEffect } from 'react'
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom'
import useStyles from './styles';
import {getPost, getPostsBySearch} from '../../actions/posts.js'
import CommentSection from './CommentSection';

const PostDetails = () => {
    const { post, posts, isLoading } = useSelector((state) => state.posts); //state.posts REDUCER
    const dispatch = useDispatch();
    const history = useHistory();
    const classes = useStyles();
    const { id } = useParams();

    //  const post = {
    //     title: '',
    //     tags: [],
    //     name: '',
    //     createdAt: '',
    //     selectedFile: '',
    //  };
  
    useEffect(() => {
        dispatch(getPost(id));
    }, [id]);

    useEffect(() => {
      if (post) {
        dispatch(getPostsBySearch({ search: 'none', tags: post?.tags?.join(',') }));
      }
    }, [post])

    if (!post) return null;

    if (isLoading) {
        return <Paper elevation={6} className={classes.loadingPaper}>
          <CircularProgress size="7em" />
        </Paper>
    }

    const openPost = (_id) => {
      history.push(`/posts/${_id}`);
    }

   const recommendedPosts = posts.filter(({ _id}) => _id !== post._id); //JUST filters out our current post

  return (
    <Paper style={ {padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h4" style={{fontSize: 25,fontWeight: 'bold', paddingBottom: '5px'}} component="h2">{post.title}</Typography>
          {post.tags && (
          <Typography gutterBottom variant="h6" style={{fontStyle: 'italic', fontSize: 15, paddingBottom: '7px'}} color="textSecondary" component="h2">{post.tags.map((tag) => `#${tag} `)}</Typography>
          )}
          <Typography gutterBottom variant="body1" style={{paddingBottom: '15px', paddingTop: '8px', paddingLeft: '12px', fontSize: 22}} component="p">{post.message}</Typography>
          <Typography variant="h6" style={{fontSize: 15.5}}>Creator: <strong>{post.name}</strong></Typography>
          <Typography variant="body1" style={{paddingLeft: '5px', fontStyle: 'italic', fontSize: 13.5}}>{moment(post.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          {/* <Divider style={{ margin: '20px 0' }} />
            <CommentSection post={post} />
          <Divider style={{ margin: '20px 0' }} /> */}
        <div className={classes.commentsAbove}>
        <Divider style={{ margin: '20px 0' }} />
            <CommentSection post={post} />
          <Divider style={{ margin: '20px 0' }} />
        </div>
        </div>


        <div className={classes.imageSection}>
          <img className={classes.media} src={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>
      
      <div className={classes.commentsBelow}>
      <Divider style={{ margin: '20px 0' }} />
            <CommentSection post={post} />
          <Divider style={{ margin: '20px 0' }} />
          </div>

      {recommendedPosts.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider/>
          <div className={classes.recommendedPosts}>
            {recommendedPosts.map(({title, message, name, likes, selectedFile, _id}) => (
              <div style={{margin: '20px', cursor: 'pointer'}} onClick={() => openPost(_id)} key={_id}>
                <Typography gutterBottom variant="h6" style={{fontWeight: 'bold'}}>{title}</Typography>
                <Typography gutterBottom variant="subtitle2" style={{fontStyle: 'italic'}}>{name}</Typography>
                <Typography gutterBottom variant="subtitle2" style={{fontSize: 17}}>{message}</Typography>
                {/* <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography> */}
                <img src={selectedFile} width="200px" />
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  )
}

export default PostDetails
