import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import Navigation from '../Navigation';
import projectImg from '../../public/project3.jpg';
import styles from '../../styles/Home.module.css';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

const project3 = () => {
    return (
        <Box sx={{ color: 'white' }}>
            <Navigation />

            <Box sx={{px: 'auto', py: 3}}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={5} sx={{ p: 2 }}>
                        <Image src={projectImg} alt="projectImg" style={{mb: 3}} />
                        <Image src={projectImg} alt="projectImg" style={{mb: 3}} />
                        <Image src={projectImg} alt="projectImg" style={{mb: 3}} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={7} sx={{ px: 4 }}>
                        <Typography variant="h4">Aayat Ambulance Service</Typography>
                        <Typography variant="h6">Project Details - </Typography>
                        <ul>
                            <li>React Application.</li>
                            <li>Using JSON Database.</li>
                            <li>Using React Bootstrap.</li>
                            <li>Firebase Authentication.</li>
                        </ul>
                        <Typography variant="body1" sx={{color: '#aaa', mb:2}}>
                            <span style={{ fontWeight: 600 }}>Technology: React, React Router, React Bootstrap, Firebase.</span>
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

export default project3;