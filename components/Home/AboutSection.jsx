import { Grid, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import Slider from "react-slick";

const AboutSection = ({ aboutMyself }) => {
    const { aboutText, location, email, phone, socialMedia } = aboutMyself;

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className={styles.contact} id="about">
            <Grid container sx={{ display: 'flex', alignItems: 'center' }}>
                <Grid item xs={12} sm={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ px: { xs: 4, sm: 0 }, pl: { xs: 4, md: 6, xl: 20 }, textAlign: 'left' }}>
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
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: { xs: 5, sm: 0 } }}>
                                <hr style={{ width: '100%', marginTop: '2.5rem', marginRight: '8px', borderColor: '#aaa' }} />

                                <Box className={styles.smHolder}>
                                    {
                                        socialMedia.map(({ id, name, url }) => <Box sx={{ mr: 1 }} key={id}>
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
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Box sx={{ pt: { xs: 6, sm: 8 }, px: 4, mb: { xs: 5, sm: 0 }, display: {xs: 'none', md: 'block'} }}>
                        <Slider {...settings}>
                            <div>
                                <Image
                                    src="https://i.ibb.co/ySJJM8H/iftakher2.jpg"
                                    alt="Iftakher Hossen"
                                    priority
                                    height={530}
                                    width={430}
                                    sx={{ boxShadow: 24, minWidth: '380px', minHeight: '480px', pointer: 'grab' }}
                                />
                            </div>
                            <div>
                                <Image
                                    src="https://i.ibb.co/PtV41md/iftakher1002.jpg"
                                    alt="Iftakher Hossen"
                                    priority
                                    height={530}
                                    width={430}
                                    sx={{ boxShadow: 24, minWidth: '380px', minHeight: '480px', pointer: 'grab' }}
                                />
                            </div>
                        </Slider>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default AboutSection;