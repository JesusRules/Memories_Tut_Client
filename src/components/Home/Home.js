import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from '../Posts/Posts.js'
import Form from '../Form/Form.js'
import useStyles from './styles';
import { getPosts } from '../../actions/posts.js'

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch, currentId])

  return (
    <Grow in>
    <Container>
        <Grid container className={classes.mainContainer} justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
        </Grid>
    </Container>
</Grow>
  )
}

export default Home
