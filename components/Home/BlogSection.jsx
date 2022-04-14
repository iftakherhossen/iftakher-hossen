import React, {useState, useEffect} from 'react';
import { Box } from '@mui/system';
import { Button, Container, Grid, Typography } from '@mui/material';
import styles from '../../styles/Home.module.css';
import SingleBlogCard from './SingleBlogCard';
import LogoDevIcon from '@mui/icons-material/LogoDev';

const Blogs = ({ blogsData }) => {
    const [blogData, setBlogData] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setBlogData(blogsData);
    }, [blogsData]);

    const sortedBlogs = blogData.slice(0, 3);

    const handleShow = () => {
        setShow(true);
    }
    const handleHide = () => {
        setShow(false);
    }

    return (
        <div className={styles.projects} id='projects'>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                My Blogs
            </Typography>

            <Container>
                <Grid container sx={{ mt: 6, mb: 0 }}>
                    {
                        show === true && blogData.map(blog => (
                            <SingleBlogCard
                                key={blog.id}
                                blog={blog}
                            />
                        ))
                    }
                    {
                        show === false && sortedBlogs.map(blog => (
                            <SingleBlogCard
                                key={blog.id}
                                blog={blog}
                            />
                        ))
                    }
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    {
                        show === false && <Button variant="outlined" sx={{ m: 1, color: '#aaa', borderColor: '#aaa' }} size="large" onClick={handleShow}>
                            Show More
                        </Button>
                    }
                    {
                        show === true &&<Button variant="outlined" sx={{ m: 1, color: '#aaa', borderColor: '#aaa' }} size="large" onClick={handleHide}>
                            Hide More
                        </Button>
                    }
                    <Button variant="outlined" href="https://dev.to/iftakher_hossen" sx={{ m: 1, color: '#aaa', borderColor: '#aaa' }} style={{ color: '#aaa' }} size="large">
                        Browse &nbsp; <LogoDevIcon sx={{color: '#aaa'}} />
                    </Button>
                </Box>
            </Container>
        </div>
    );
};

export default Blogs;