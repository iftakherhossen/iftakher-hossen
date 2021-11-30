import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/Image'
import Link from 'next/Link'
import Navigation from '../Navigation';
import projectImg from '../../public/project1.jpg';
import styles from '../../styles/Home.module.css';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';

const project1 = () => {
    return (
        <Box sx={{ color: 'white' }}>
            <Navigation />

            <Box className={styles.projects}>
                <Grid container>
                    <Grid xs={12} sm={6} md={5} sx={{ px: 2 }}>
                        <Image src={projectImg} alt="projectImg" />
                    </Grid>
                    <Grid xs={12} sm={6} md={7} sx={{ px: 4 }}>
                        <Typography variant="h4">Oronno Opticals</Typography>
                        <Typography variant="h6">Project Details</Typography>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <Box>
                            <Button color="inherit" sx={{ mx: 1, fontSize: 15 }}>
                                <LanguageIcon /> Live Site
                            </Button>
                            <Button color="inherit" sx={{ mx: 1, fontSize: 15 }}>
                                <GitHubIcon />Client Side Code
                            </Button>
                            <Button color="inherit" sx={{ mx: 1, fontSize: 15 }}>
                                <GitHubIcon />Server Side Code
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box >
    );
};

export default project1;