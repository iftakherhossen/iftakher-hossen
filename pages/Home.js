import React from 'react';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { Container, Grid, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import iftakher5 from '../public/iftakher5.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link'

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
                    <Typography className={styles.title}>
                        Iftakher Hossen
                    </Typography>
                </motion.div>
            </header>

            <Box>
                <Container>
                    <Box className={styles.wrapper}>
                        <Grid container>
                            <Grid xs={12} sm={12} md={5} className={styles.sideBar1}>
                                <Box className={styles.frame}>
                                    <Image
                                        src={iftakher5}
                                        alt="Profile"
                                        className="img"
                                    />
                                </Box>
                            </Grid>
                            <Grid xs={12} sm={12} md={7} className={styles.sideBar2}>
                                <Box className={styles.textWrapper}>
                                    <Typography className={styles.designation}>
                                        Frontend Web Developer
                                    </Typography>
                                    <Typography className={styles.description}>
                                        I am a dedicated and hardworking person. I love to learn a new technologies every day. I am familiar with React, Node.js, MongoDB, Material UI, Javascript, Data Structures, Bootstrap, Tailwind, Next.js, VS Code, Git. And learning more new technologies.
                                    </Typography>
                                    <Box className={styles.btnGroup}>
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