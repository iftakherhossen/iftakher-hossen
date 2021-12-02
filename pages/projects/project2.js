import { Button, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import projectImg1 from '../../public/project2.jpg';
import projectImg2 from '../../public/project2.2.jpg';
import projectImg3 from '../../public/project2.3.jpg';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import styles from '../../styles/Home.module.css';

const project1 = () => {
    return (
        <Box sx={{ color: 'white' }}>
            <Box sx={{ px: 10, pt: 3 }}>
                <Link href="/" passHref>
                    <Button sx={{ color: 'white', fontWeight: 600, fontSize: 15.2 }} className={styles.goBackBtn}>
                        <KeyboardBackspaceIcon /> &nbsp; Go Back
                    </Button>
                </Link>
            </Box>

            <Box sx={{ px: 8, py: 1 }} className={styles.projectHolder}>
                <Grid container>
                    <Grid item xs={12} sm={6} md={5} sx={{ p: 2 }}>
                        <Image src={projectImg1} alt="projectImg" style={{ mb: 3 }} />
                        <Image src={projectImg2} alt="projectImg" style={{ mb: 3 }} />
                        <Image src={projectImg3} alt="projectImg" style={{ mb: 3 }} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={7} sx={{ px: 4, pt: 2 }} className={styles.projectContent}>
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
                            <Button color="inherit" sx={{ mr: 1, fontSize: 15 }} className={styles.projectBtn}>
                                <LanguageIcon /> &nbsp; Live Site
                            </Button>
                            <Button color="inherit" sx={{ mx: 1, fontSize: 15 }} className={styles.projectBtn}>
                                <GitHubIcon /> &nbsp; Client Side Code
                            </Button>
                            <Button color="inherit" sx={{ ms: 1, fontSize: 15 }} className={styles.projectBtn}>
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