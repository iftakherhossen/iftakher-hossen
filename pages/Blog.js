import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import projectImg1 from '../public/project1.jpg';
import projectImg2 from '../public/project2.jpg';
import projectImg3 from '../public/project3.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Blog = () => {
    return (
        <Box className={styles.projects} id='projects'>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className={styles.circle}></span> My Blogs <span className={styles.circle}></span>
            </Typography>
            <Box className={styles.divider}></Box>

            <Grid container sx={{ mt: 8, mb: 0 }}>
                <Grid xs={12} md={6} lg={4} className={styles.projectCard}>
                    <Card className={styles.zoomAnimationWrapper}>
                        <Image
                            height="650"
                            src={projectImg1}
                            alt="Project Thumbnail"
                            className={styles.zoomAnimation}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 600 }}>
                                Oronno Opticals
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button sx={{ color: '#282C34', fontWeight: 700 }}>Read the Article &nbsp; <ArrowForwardIcon sx={{ fontSize: 16 }} /></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={4} className={styles.projectCard}>
                    <Card className={styles.zoomAnimationWrapper}>
                        <Image
                            height="650"
                            src={projectImg2}
                            alt="Project Thumbnail"
                            className={styles.zoomAnimation}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 600 }}>
                                Alavian Airlines
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button sx={{ color: '#282C34', fontWeight: 700 }}>Read the Article &nbsp; <ArrowForwardIcon sx={{ fontSize: 16 }} /></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={4} className={styles.projectCard}>
                    <Card className={styles.zoomAnimationWrapper}>
                        <Image
                            height="650"
                            src={projectImg3}
                            alt="Project Thumbnail"
                            className={styles.zoomAnimation}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 600 }}>
                                Aayat Ambulance Service
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Button sx={{ color: '#282C34', fontWeight: 700 }}>Read the Article &nbsp; <ArrowForwardIcon sx={{ fontSize: 16 }} /></Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Blog;