import React from 'react';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { Container, Grid, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import iftakherImg from '../public/iftakher5.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';

const Home = () => {
    return (
        <Box>
            <header>
                <motion.div initial="hidden" animate="visible"
                    variants={{
                        hidden: {
                            scale: .8,
                            opacity: 0
                        },
                        visible: {
                            scale: 1,
                            opacity: 1,
                            transition: {
                                delay: .6
                            }
                        },
                    }}>
                    <Typography variant="h3" className={styles.title}>
                        ইফতেখার হোসেন
                    </Typography>
                </motion.div>
            </header>

            <Box>
                <Container>
                    <Box className={styles.wrapper}>
                        <Grid container>
                            <Grid xs={12} sm={12} md={5} className={styles.sideBar1}>
                                <Box className={styles["frame"] + " " + styles["zoomAnimationWrapper"]}>
                                    <Image
                                        src={iftakherImg}
                                        alt="Profile"
                                        className={styles.zoomAnimation}
                                    />
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} md={7} className={styles.sideBar2}>
                                <Box className={styles.textWrapper}>
                                    <Typography variant="h5" className={styles.designation}>
                                        ফুল-স্ট্যাক ওয়েব ডেভেলপার
                                    </Typography>
                                    <Typography variant="body1" className={styles.description}>
                                        আমি একজন নিবেদিতপ্রাণ এবং পরিশ্রমী মানুষ। আমি প্রতিদিন একটি নতুন প্রযুক্তি শিখতে ভালোবাসি। আমি রিয়েক্ট, নোড.জেএস, মঙ্গোডিবি, ম্যাটারিয়াল-ইউআই, জাভাস্ক্রিপ্ট, ডাটা স্ট্রাকচার, বুটস্ট্র্যাপ, টেইউইন্ড, ্নেক্সট.জেএস, ভিএস কোড, গিট এর সাথে পরিচিত। এবং আরও নতুন নতুন প্রযুক্তি শিখছি। 
                                    </Typography>
                                    <Box className={styles.btnGroup}>
                                        <a href="https://drive.google.com/file/d/1XFnyqeM_9yxzaj5qjMUEmPuAIL_0gSlq/view?usp=sharing" rel="noreferrer" target="_blank" download="Iftakher-Hossen-Resume">
                                            <Button color="inherit" className={styles.btn}>
                                                রিজ্যুমে <ArrowRightIcon />
                                            </Button>
                                        </a>
                                        <Link href="#projects" passHref>
                                            <Button color="inherit" className={styles.btn}>
                                                প্রজেক্টস <ArrowRightIcon />
                                            </Button>
                                        </Link>
                                        <Link href="#contact" passHref>
                                            <Button color="inherit" className={styles.btn}>
                                                যোগাযোগ <ArrowRightIcon />
                                            </Button>
                                        </Link>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
};

export default Home;