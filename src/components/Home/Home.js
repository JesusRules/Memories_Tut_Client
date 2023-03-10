import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid, Paper, AppBar, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import Posts from '../Posts/Posts.js'
import Form from '../Form/Form.js'
import { getPosts } from '../../actions/posts.js'
import Pagination from '../Pagination';
import App from '../../App.js';
import useStyles from './styles';
import { getPostsBySearch } from '../../actions/posts.js'

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Home = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    const query = useQuery();
    const history = useHistory();
    const page = query.get('page') || 1;
    const searchQuery = query.get('searchQuery');
    const [search, setSearch] = useState('');
    const [tags, setTags] = useState([]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         dispatch(getPosts());
    //       }, "1000")
    // }, [dispatch, currentId])

    const searchPost = () => {
        if (search.trim() || tags) {
            dispatch(getPostsBySearch({ search, tags: tags.join(',') })); //Jerusalem,usa,canada,egypt,france
            history.push(`/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
        } else {
            history.push('/');
        }
    }

    const handleKeyPress = (e) => {
        if (e.keyCode === 13) { //enterkey
            searchPost();
        }
    }

    const handleAdd = (tag) => setTags([...tags, tag]);

    const handleDelete = (tagToDelete) => setTags(tags.filter((tag) => tag !== tagToDelete));

  return (
    // cool effect
    <Grow in>
    <Container maxWidth="xl">
        <Grid container justifyContent="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={6} md={9}>
                <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
                <TextField 
                name="search" 
                variant="outlined" 
                label="Search Memories" 
                onKeyPress={handleKeyPress}
                fullWidth
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                />
                <ChipInput 
                    style={{margin: '10px 0'}}
                    value={tags}
                    onAdd={handleAdd}
                    onDelete={handleDelete}
                    label="Search Tags"
                    variant="outlined"
                />
                <Button onClick={searchPost} className={classes.searchButton} variant="contained" color="primary">Search</Button>
            </AppBar>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
                {(!searchQuery && !tags.length) && (
                    <Paper className={classes.pagination} elevation={6}>
                        <Pagination page={page} />
                    </Paper>
                )}
            </Grid>
        </Grid>
        {(!searchQuery && !tags.length) && (
            <Paper className={classes.pagination2} elevation={6}>
                <Pagination page={page} />
            </Paper>
        )}
    </Container>
</Grow>
  )
}

export default Home
