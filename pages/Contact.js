import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
    async function handleSubmit(e) {
        e.preventDefault();
        
        const formData = {};

        Array.from(e.currentTarget.elements).forEach(field => {
            if (!field.name) return;
            formData[field.name] = field.value;
        });

        await fetch('/api/mail', {
            method: 'POST',
            body: JSON.stringify(formData)
        });
    }

    return (
        <Box className={styles.contact} id="contact">
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className={styles.circle}></span> Contact <span className={styles.circle}></span>
            </Typography>
            <Box className={styles.divider}></Box>
            <Grid container>
                <Grid xs={12} sm={12} md={6}>
                    <Box className={styles.wrapper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.800470329842!2d90.35717906429774!3d23.790118543176252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1089c485f%3A0x646b6cc49f14a469!2sMiddle%20Paikpara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1638200504643!5m2!1sen!2sbd" className={styles.map} allowFullScreen="" loading="lazy"></iframe>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                    <Box className={styles.wrapper}>
                        <form method="post" onSubmit={handleSubmit} className={styles.formBg}>
                            <TextField
                                id="name"
                                variant="standard"
                                label="Name"
                                name="name"
                                autoComplete="off"
                                sx={{ width: '100%', mb: 3 }}
                            />
                            <TextField
                                id="subject"
                                variant="standard"
                                label="Subject"
                                name="subject"
                                autoComplete="off"
                                sx={{ width: '100%', mb: 3 }}
                            />
                            <TextField
                                id="email"
                                variant="standard"
                                label="Email"
                                name="email"
                                autoComplete="off"
                                sx={{ width: '100%', mb: 3 }}
                            />
                            <textarea
                                id="textarea"
                                placeholder="Message"
                                autoComplete="off"
                                name="message"
                                className={styles.textarea}
                            ></textarea>
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