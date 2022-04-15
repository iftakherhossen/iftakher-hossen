import { Grid, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../../styles/Home.module.css';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Image from 'next/image';
import TwitterIcon from '@mui/icons-material/Twitter';

const About = ({ aboutMyself }) => {
    console.log(aboutMyself);
    const { aboutText, location, email, phone, socialMedia } = aboutMyself;

    return (
        <div className={styles.contact} id="about">
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ pl: 20, textAlign: 'left' }}>
                        <Typography sx={{ fontSize: 36, mb: 1.5, fontWeight: 500 }}>
                            About Myself
                        </Typography>

                        <Typography sx={{ fontSize: 17 }}>
                            {aboutText}
                        </Typography>

                        <Box sx={{ mt: 4 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <FmdGoodIcon />
                                <Typography sx={{ ml: 2, fontSize: 18 }}>{location}</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                                <EmailIcon />
                                <Typography sx={{ ml: 2, fontSize: 18 }}>
                                    <a href={`mailto:${email}`} style={{ color: 'white' }}>
                                        {email}
                                    </a>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CallIcon />
                                <Typography sx={{ ml: 2, fontSize: 18 }}>
                                    <a href={`tel:${phone}`} style={{ color: 'white' }}>
                                        {phone}
                                    </a>
                                </Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <hr style={{ width: '100%', marginTop: '2.5rem', marginRight: '8px', borderColor: '#aaa' }} />

                                <Box className={styles.smHolder}>
                                    {
                                        socialMedia.map(({ id, name, url, icon }) => <Box sx={{ mr: 1 }} key={id}>
                                            <Tooltip title={`Follow me on ${name}`}>
                                                <a href={url} rel="noreferrer" target="_blank" className={styles.smIcon}>
                                                    {
                                                        name === "Facebook" && <FacebookIcon sx={{ fontSize: 27 }} />
                                                    }
                                                    {
                                                        name === "Instagram" && <InstagramIcon sx={{ fontSize: 27 }} />
                                                    }
                                                    {
                                                        name === "Twitter" && <TwitterIcon sx={{ fontSize: 27 }} />
                                                    }
                                                    {
                                                        name === "LinkedIn" && <LinkedInIcon sx={{ fontSize: 27 }} />
                                                    }
                                                    {
                                                        name === "Github" && <GitHubIcon sx={{ fontSize: 27 }} />
                                                    }
                                                </a>
                                            </Tooltip>
                                        </Box>)
                                    }
                                    {/* <Box sx={{ mx: 1 }}>
                                        <a href="https://www.instagram.com/hossen_iftakher/" rel="noreferrer" target="_blank">
                                            <InstagramIcon sx={{ fontSize: 26 }} />
                                        </a>
                                    </Box>
                                    <Box sx={{ mx: 1 }}>
                                        <a href="https://twitter.com/iftakher_hossen" rel="noreferrer" target="_blank">
                                            <TwitterIcon sx={{ fontSize: 26 }} />
                                        </a>
                                    </Box>
                                    <Box sx={{ mx: 1 }}>
                                        <a href="https://www.linkedin.com/in/iftakher-hossen/" rel="noreferrer" target="_blank">
                                            <LinkedInIcon sx={{ fontSize: 27 }} />
                                        </a>
                                    </Box>
                                    <Box sx={{ mx: 1 }}>
                                        <a href="https://github.com/iftakherhossen" rel="noreferrer" target="_blank">
                                            <GitHubIcon sx={{ fontSize: 25 }} />
                                        </a>
                                    </Box> */}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ pt: 8, px: 4 }}>
                        <Image
                            src="https://i.ibb.co/ySJJM8H/iftakher2.jpg"
                            alt="Profile"
                            priority
                            className={styles["marginBottomInMobile"] + " " + styles["aboutMeImg"]}
                            height={530}
                            width={450}
                            sx={{ boxShadow: 1 }}
                            draggable="false"
                        />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default About;