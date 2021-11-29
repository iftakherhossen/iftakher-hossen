import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link'

const Project = () => {
    return (
        <Box className={styles.projects} id='projects'>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className={styles.circle}></span> My Projects <span className={styles.circle}></span>
            </Typography>
            <Box className={styles.divider}></Box>

            <Grid container sx={{ mt: 8, mb: 0 }}>
                <Grid xs={12} md={6} lg={4} sx={{px: 2}}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="Project Thumbnail"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 600 }}>
                                Oronno Opticals
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ fontWeight: 600 }}>Technology: React, Material-UI, React Router, MongoDB, Express, Firebase.</span>
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link href="https://oronno-opticals.web.app/" passHref>
                                <Button sx={{ color: '#282C34', fontWeight: 700 }}>
                                    Live Site
                                </Button>
                            </Link>
                            <Button sx={{ color: '#282C34', fontWeight: 700 }}>Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={4} sx={{ px: 2 }}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="Project Thumbnail"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 600 }}>
                                Alavian Airlines
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ fontWeight: 600 }}>Technology: React, React Bootstrap, React Router, MongoDB, Express, Firebase.</span>
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link href="https://alavia-airlines.web.app/" passHref><Button sx={{ color: '#282C34', fontWeight: 700 }}>Live Site</Button></Link>
                            <Button sx={{ color: '#282C34', fontWeight: 700 }}>Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid xs={12} md={6} lg={4} sx={{ px: 2 }}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/static/images/cards/contemplative-reptile.jpg"
                            alt="Project Thumbnail"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div" style={{ fontWeight: 600 }}>
                                Aayat Ambulance Service
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                <span style={{ fontWeight: 600 }}>Technology: React, React Bootstrap, React Route, Firebase.</span>
                            </Typography>
                        </CardContent>
                        <CardActions sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Link href="https://aayat-ambulance-service.netlify.app/" passHref><Button sx={{ color: '#282C34', fontWeight: 700 }}>Live Site</Button></Link>
                            <Button sx={{ color: '#282C34', fontWeight: 700 }}>Learn More</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Project;