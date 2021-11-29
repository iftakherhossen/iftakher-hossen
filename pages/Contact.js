import { Button, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
    }

    return (
        <Box className={styles.contact}>
            <Typography variant="h4">Contact</Typography>
            <Box className={styles.divider}></Box>
            <Grid container>
                <Grid xs={12} sm={12} md={6}>
                    <Box className={styles.wrapper}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.800470329842!2d90.35717906429774!3d23.790118543176252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0c1089c485f%3A0x646b6cc49f14a469!2sMiddle%20Paikpara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1638200504643!5m2!1sen!2sbd" style={{ border: 0, width: '100%', height: 400 }} allowFullScreen="" loading="lazy"></iframe>
                    </Box>
                </Grid>
                <Grid xs={12} sm={12} md={6}>
                    <Box className={styles.wrapper}>
                        <form onSubmit={handleSubmit(onSubmit)} style={{padding: '1rem', color: 'white'}}>
                            <TextField
                                variant="standard"
                                label="Name"
                                {...register("name")}
                                autoComplete="off"
                                sx={{ width: '100%', mb: 3 }}
                            />
                            <TextField
                                variant="standard"
                                label="Subject"
                                {...register("sub", { required: true })}
                                autoComplete="off"
                                sx={{ width: '100%', mb:3 }}
                            />
                            {errors.sub && <span>Subject is required!</span>}
                            <TextField
                                variant="standard"
                                label="Email"
                                {...register("email", { required: true })}
                                autoComplete="off"
                                sx={{ width: '100%', mb: 3  }}
                            />
                            {errors.email && <span>Email is required!</span>}
                            <textarea
                                placeholder="Content"
                                {...register("content", { required: true })}
                                autoComplete="off"
                                className={styles.textarea}
                            ></textarea>
                            {errors.content && <span>Content is required!</span>}
                            <Button type="submit" sx={{color: 'white' }}>Send</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Contact;