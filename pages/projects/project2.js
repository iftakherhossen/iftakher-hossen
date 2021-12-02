import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import Navigation from '../Navigation';
import projectImg1 from '../../public/project1.jpg';
import projectImg2 from '../../public/project1.2.jpg';
import projectImg3 from '../../public/project1.3.jpg';
import styles from '../../styles/Home.module.css';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

const project1 = () => {
    return (
        <Box sx={{ color: 'white' }}>
            <Navigation />

            <Box className={styles.projectChild}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={5} sx={{ p: 2 }}>
                        <Image src={projectImg1} alt="projectImg" style={{ mb: 3 }} />
                        <Image src={projectImg2} alt="projectImg" style={{ mb: 3 }} />
                        <Image src={projectImg3} alt="projectImg" style={{ mb: 3 }} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={7} sx={{ px: 4 }}>
                        <Typography variant="h4">Alavian Airlines</Typography>
                        <Typography variant="h6">Project Details - </Typography>
                        <ul>
                            <li>React Application.</li>
                            <li>Maintained express database.</li>
                            <li>Using React Bootstrap.</li>
                            <li>Firebase Authentication.</li>
                        </ul>
                        <Typography variant="body1" sx={{color: '#aaa', mb:2}}>
                            <span style={{ fontWeight: 600 }}>Technology: React, Material-UI, React Router, MongoDB, Express, Firebase.</span>
                        </Typography>
                        <Box>
                            <Button color="inherit" sx={{ mr: 1, fontSize: 15 }}>
                                <LanguageIcon /> &nbsp; Live Site
                            </Button>
                            <Button color="inherit" sx={{ mx: 1, fontSize: 15 }}>
                                <GitHubIcon /> &nbsp; Client Side Code
                            </Button>
                            <Button color="inherit" sx={{ ms: 1, fontSize: 15 }}>
                                <GitHubIcon /> &nbsp; Server Side Code
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};

export default project1;