import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import styles from '../styles/Home.module.css';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('mail-template', 'mail-template-iftakher', form.current, 'user_E3AjQo3AWXplLPqSzFb2c')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <Box className={styles.contact} id="contact">
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className={styles.circle}></span> Contact <span className={styles.circle}></span>
            </Typography>
            <Box className={styles.divider}></Box>
            <Grid container>
                <Grid item xs={12} sm={12} md={5}>
                    <Box className={styles.wrapper}>
                        <Box className={styles.info}>
                            <Typography variant="h4" sx={{ mb: 3 }}>Contact Info</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <FmdGoodIcon />
                                <Typography variant="h6" sx={{ml: 2}}>Mirpur, Dhaka, Bangladesh</Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', my: 1 }}>
                                <EmailIcon />
                                <Typography variant="h6" sx={{ml: 2}}><a href="mailto:iftakher.one@gmail.com">iftakher.one@gmail.com</a></Typography>
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <CallIcon />
                                <Typography variant="h6" sx={{ml: 2}}><a href="tel:+8801644985364">+8801644985364</a></Typography>
                            </Box>
                            <Box className={styles.smHolder}>
                                <Box sx={{ mr: 1 }}>
                                    <a href="https://www.facebook.com/hosseniftakher" rel="noreferrer" target="_blank">
                                        <FacebookIcon sx={{ fontSize: 27 }} />
                                    </a>
                                </Box>
                                <Box sx={{ mx: 1 }}>
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
                                        <GitHubIcon sx={{ fontSize: 25 }} className={styles.icon} />
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={12} md={7}>
                    <Box className={styles.wrapper}>
                        <form ref={form} onSubmit={sendEmail} className={styles.formBg}>
                            <TextField
                                id="name"
                                variant="standard"
                                label="Name"
                                name="name"
                                autoComplete="off"
                                sx={{ width: '100%', mb: 2 }}
                            />
                            <TextField
                                id="subject"
                                variant="standard"
                                label="Subject"
                                name="subject"
                                autoComplete="off"
                                sx={{ width: '100%', mb: 2 }}
                            />
                            <TextField
                                id="email"
                                variant="standard"
                                label="Email"
                                name="email"
                                autoComplete="off"
                                sx={{ width: '100%', mb: 2 }}
                            />
                            <TextField
                                id="standard-multiline-static"
                                label="Message"
                                multiline
                                rows={4}
                                autoComplete="off"
                                name="message"
                                sx={{ width: '100%', mb: 3 }}
                                variant="standard"
                            />
                            <Button
                                type="submit"
                                variant="contained"
                                sx={{ bgcolor: '#282C34', fontWeight: 600, letterSpacing: 1, fontSize: '1em' }}
                            >Send &nbsp; <SendIcon sx={{ fontSize: 18 }} /></Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box >
    );
};

export default Contact;