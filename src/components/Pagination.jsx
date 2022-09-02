import React, { useEffect } from 'react';
import { Pagination, PaginationItem } from '@material-ui/lab';
import {Link, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getPosts} from '../actions/posts.js'

import useStyles from './styles';

const Paginate = ({ page }) => {
    const classes = useStyles();
    const location = useLocation();
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts);
    // const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);

    useEffect(() => {
        if (page) {
            dispatch(getPosts());
        }
    }, [page]);

    return (
        <Pagination
            classes={{ ul: classes.ul}}
            count={5}
            page={1}
            variant="outlined"
            color="primary"
            renderItem={(item) => (
                <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
            )}
        />
    )
}

export default Paginate;