import React from 'react';
import styles from '../styles/Home.module.css';
import { motion } from 'framer-motion';
import { Container, Grid, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import iftakherImg from '../public/iftakher5.png';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Link from 'next/link';
import Typical from 'react-typical'

const Home = () => {
    return (
        <Box>
            <Box>
                <Container>
                    <Box className={styles.wrapper}>
                        <Grid container>
                            <Grid item xs={12} sm={12} md={5} className={styles.sideBar1}>
                                <Box className={styles["frame"] + " " + styles["zoomAnimationWrapper"]}>
                                    <Image
                                        src={iftakherImg}
                                        alt="Profile"
                                        className={styles.zoomAnimation}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12} md={7} className={styles.sideBar2}>
                                <Box className={styles.textWrapper}>
                                    <Typography variant="h5" sx={{ fontSize: '1.8em', fontWeight: 700 }} className={styles.designation}>
                                        <strong>
                                            <Typical
                                                steps={[
                                                        'Front-end Web Developer',
                                                        3000,
                                                        'Full-Stack Web Developer',
                                                        3000,
                                                        'React Developer',
                                                        3000
                                                    ]}
                                                    wrapper="p"
                                                    loop={Infinity}
                                            />
                                    </strong>
                                    </Typography>
                                    <Typography sx={{ fontSize: 22, color: '#358DC8' }}>Hello There,</Typography>
                                    <Typography sx={{ fontSize: 22, color: '#358DC8', mb: 1 }}><code>Welcome to my Planet, I am</code></Typography>
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
                                        <Typography sx={{ margin: 0, lineHeight: '1.15', fontSize: '4rem', fontWeight: 900 }} className={styles.title}>
                                            Iftakher Hossen
                                        </Typography>
                                    </motion.div>
                                    <Box className={styles.btnGroup} sx={{ mt: 3 }}>
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