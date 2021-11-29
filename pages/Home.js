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
                    <Typography variant="h1" className={styles.title}>
                        Iftakher Hossen
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
                                    <Typography variant="h5" sx={{ fontSize: '2rem', fontWeight: 700 }} className={styles.designation}>
                                        Full-Stack Web Developer
                                    </Typography>
                                    <Typography variant="body1" sx={{ fontSize: '1rem', lineHeight: '1.6', margin: '1em 0 2em' }} className={styles.description}>
                                        I am a dedicated and hardworking person. I love to learn new technologies every day. I am familiar with React, Node.js, MongoDB, Material UI, Javascript, Data Structures, Bootstrap, Tailwind, Next.js, VS Code, Git. And learning more new technologies.
                                    </Typography>
                                    <Box className={styles.btnGroup} sx={{}}>
                                        <a href="https://drive.google.com/file/d/1XFnyqeM_9yxzaj5qjMUEmPuAIL_0gSlq/view?usp=sharing" rel="noreferrer" target="_blank" download="Iftakher-Hossen-Resume">
                                            <Button color="inherit" className={styles.btn}>
                                                RESUME <ArrowRightIcon />
                                            </Button>
                                        </a>
                                        <Link href="#projects" passHref>
                                            <Button color="inherit" className={styles.btn}>
                                                Projects <ArrowRightIcon />
                                            </Button>
                                        </Link>
                                        <Link href="#contact" passHref>
                                            <Button color="inherit" className={styles.btn}>
                                                Contact <ArrowRightIcon />
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