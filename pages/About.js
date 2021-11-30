import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import iftakherImg from '../public/iftakher4.jpg';

const About = () => {
    return (
        <Box className={styles.contact} id="about">
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className={styles.circle}></span> About Myself <span className={styles.circle}></span>
            </Typography>
            <Box className={styles.divider}></Box>
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid xs={12} sm={12} md={7}>
                    <Box sx={{ pt: 8, px: 4, textAlign: 'left' }}>
                        <Typography sx={{ fontSize: 38, mb: 5 }}>I am a Full-stack Web Developer</Typography>
                        <Typography sx={{ fontSize: 17 }}>I am a dedicated and hardworking person. I love to learn new technologies every day. I am familiar with React, Node.js, MongoDB, Material UI, Javascript, Data Structures, Bootstrap, Tailwind, Next.js, VS Code, Git. And learning more new technologies.</Typography>
                        <Box sx={{ mt: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <FmdGoodIcon />
                                <Typography sx={{ ml: 2, fontSize: 18 }}>Mirpur, Dhaka, Bangladesh</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                                <EmailIcon />
                                <Typography sx={{ ml: 2, fontSize: 18 }}><a href="mailto:iftakher.one@gmail.com">iftakher.one@gmail.com</a></Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CallIcon />
                                <Typography sx={{ ml: 2, fontSize: 18 }}><a href="tel:+8801644985364">+8801644985364</a></Typography>
                            </Box>
                            <Box className={styles.smHolder}>
                                <Box sx={{ mr: 1 }}>
                                    <a href="https://www.facebook.com/hosseniftakher" rel="noreferrer" target="_blank">
                                        <FacebookIcon />
                                    </a>
                                </Box>
                                <Box sx={{ mx: 1 }}>
                                    <a href="https://www.instagram.com/hossen_iftakher/" rel="noreferrer" target="_blank">
                                        <InstagramIcon />
                                    </a>
                                </Box>
                                <Box sx={{ mx: 1 }}>
                                    <a href="https://www.linkedin.com/in/iftakher-hossen/" rel="noreferrer" target="_blank">
                                        <LinkedInIcon />
                                    </a>
                                </Box>
                                <Box sx={{ mx: 1 }}>
                                    <a href="https://github.com/iftakherhossen" rel="noreferrer" target="_blank">
                                        <GitHubIcon sx={{ fontSize: 20 }} />
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={5}>
                    <Box sx={{ pt: 8, px: 4 }}>
                        <Image src={iftakherImg} alt="Profile" className={styles["marginBottomInMobile"] + " " + styles["aboutMeImg"]} />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default About;