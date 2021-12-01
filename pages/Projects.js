import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Image from 'next/image';
import projectImg1 from '../public/project1.jpg';
import projectImg2 from '../public/project2.jpg';
import projectImg3 from '../public/project3.jpg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Project = () => {
    return (
        <Box className={styles.projects} id='projects'>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className={styles.circle}></span> My Projects <span className={styles.circle}></span>
            </Typography>
            <Box className={styles.divider}></Box>

            <Grid container sx={{ mt: 8, mb: 0 }}>
                <Grid item xs={12} md={6} lg={4} className={styles.projectCard}>
                    <Card className={styles.zoomAnimationWrapper}>
                        <Link rel="noreferrer" target="_blank" href="https://oronno-opticals.web.app" passHref style={{ cursor: 'pointer' }}><Image
                            height="650"
                            src={projectImg1}
                            alt="Project Thumbnail"
                            className={styles.zoomAnimation}
                        /></Link>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 600 }}>
                                Oronno Opticals
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ fontWeight: 600 }}>Technology: React, Material-UI, React Router, MongoDB, Express, Firebase.</span>
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link href="https://oronno-opticals.web.app" rel="noreferrer" target="_blank" passHref>
                                <Button sx={{ color: '#282C34', fontWeight: 700 }}>
                                    Live Site &nbsp; <ArrowForwardIcon sx={{ fontSize: 16 }} />
                                </Button>
                            </Link>
                            <Link href="/projects/project1" rel="noreferrer" target="_blank" passHref>
                                <Button sx={{ color: '#282C34', fontWeight: 700 }}>
                                    Learn More &nbsp; <ArrowForwardIcon sx={{ fontSize: 16 }} /></Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4} className={styles.projectCard}>
                    <Card className={styles.zoomAnimationWrapper}>
                        <Link rel="noreferrer" target="_blank" href="https://alavia-airlines.web.app" passHref style={{ cursor: 'pointer' }}><Image
                            height="650"
                            src={projectImg2}
                            alt="Project Thumbnail"
                            className={styles.zoomAnimation}
                        /></Link>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 600 }}>
                                Alavian Airlines
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ fontWeight: 600 }}>Technology: React, React Bootstrap, React Router, MongoDB, Express, Firebase.</span>
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link rel="noreferrer" target="_blank" href="https://alavia-airlines.web.app" passHref>
                                <Button sx={{ color: '#282C34', fontWeight: 700 }}>
                                    Live Site &nbsp; <ArrowForwardIcon sx={{ fontSize: 16 }} />
                                </Button>
                            </Link>
                            <Link href="/projects/project2" rel="noreferrer" target="_blank" passHref>
                                <Button sx={{ color: '#282C34', fontWeight: 700 }}>
                                    Learn More &nbsp; <ArrowForwardIcon sx={{ fontSize: 16 }} />
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4} className={styles.projectCard}>
                    <Card className={styles.zoomAnimationWrapper}>
                        <Link rel="noreferrer" target="_blank" href="https://aayat-ambulance-service.netlify.app" passHref style={{ cursor: 'pointer' }}><Image
                            height="650"
                            src={projectImg3}
                            alt="Project Thumbnail"
                            className={styles.zoomAnimation}
                        /></Link>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 600 }}>
                                Aayat Ambulance Service
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ fontWeight: 600 }}>Technology: React, React Bootstrap, React Route, Firebase.</span>
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link rel="noreferrer" target="_blank" href="https://aayat-ambulance-service.netlify.app" passHref>
                                <Button sx={{ color: '#282C34', fontWeight: 700 }}>
                                    Live Site &nbsp; <ArrowForwardIcon sx={{ fontSize: 16 }} />
                                </Button>
                            </Link>
                            <Link href="/projects/project3" rel="noreferrer" target="_blank" passHref>
                                <Button sx={{ color: '#282C34', fontWeight: 700 }}>
                                    Learn More &nbsp; <ArrowForwardIcon sx={{ fontSize: 16 }} />
                                </Button>
                            </Link>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Project;