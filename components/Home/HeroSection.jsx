import React, { useState } from 'react';
import styles from '../../styles/Home.module.css';
import { motion } from 'framer-motion';
import { Container, Grid, Button, Typography, Modal, Fade, Backdrop, TextField } from '@mui/material';
import { Box } from '@mui/system';
import Image from 'next/image';
import CollectionsIcon from '@mui/icons-material/Collections';
import Typewriter from 'typewriter-effect';
import DownloadIcon from '@mui/icons-material/Download';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SendIcon from '@mui/icons-material/Send';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: '#eee',
    boxShadow: 24,
    p: 5,
    borderRadius: 2,
};

const HeroSection = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a43ummk', 'mail-template-iftakher', e.target, 'user_E3AjQo3AWXplLPqSzFb2c')
            .then((result) => {
                console.log(result.text);
                handleClose();
                Swal.fire({
                    title: 'Success!',
                    text: 'Message send successfully! Please wait for a reply.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                })
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <div id="home">
            <Container>
                <Box className={styles.wrapper}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={5} className={styles.sideBar1}>
                            <Box className={styles["frame"] + " " + styles["zoomAnimationWrapper"]}>
                                <Image
                                    src="https://i.ibb.co/nD1F9KJ/iftakher5.png"
                                    alt="Profile"
                                    className={styles.zoomAnimation}
                                    draggable="false"
                                    width={320}
                                    height={415}
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={12} md={7} className={styles.sideBar2}>
                            <Box className={styles.textWrapper}>
                                <Typography sx={{ fontSize: 21, color: '#358DC8', mb: 1 }}>Hey There, I am</Typography>
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
                                <Typography sx={{ fontSize: 21, color: '#358DC8', my: 1 }}>a Passionate</Typography>
                                <Typography variant="h5" sx={{ fontSize: '1.8em', mb: 1, fontWeight: 700 }} className={styles.designation}>
                                    <Typewriter
                                        options={{
                                            strings: ['Frontend Developer', 'React Developer', 'Full Stack Web Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </Typography>
                                <Box className={styles.btnGroup} sx={{ mt: 3 }}>
                                    <a href="https://drive.google.com/uc?export=download&id=1XFnyqeM_9yxzaj5qjMUEmPuAIL_0gSlq" download="Iftakher-Hossen-Resume" style={{ color: 'white' }}>
                                        <Button color="inherit" className={styles.btn} sx={{ borderTop: '1px solid transparent', borderBottom: '1px solid transparent', ml: 1 }}>
                                            <DownloadIcon /> &nbsp; RESUME
                                        </Button>
                                    </a>
                                    <Button
                                        color="inherit"
                                        className={styles.btn}
                                        sx={{ borderTop: '1px solid transparent', borderBottom: '1px solid transparent', ml: 1 }}
                                        href="#projects"
                                        style={{ color: 'white' }}
                                    >
                                        <CollectionsIcon /> &nbsp; Projects
                                    </Button>
                                    <Button
                                        color="inherit"
                                        className={styles.btn}
                                        sx={{ borderTop: '1px solid transparent', borderBottom: '1px solid transparent', ml: 1 }}
                                        style={{ color: 'white' }}
                                        onClick={handleOpen}
                                    >
                                        <ConnectWithoutContactIcon /> &nbsp; Hire Me
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* Modal Start */}
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
                            <Typography id="transition-modal-title" variant="h5" component="h1" sx={{ fontSize: 29, fontWeight: 600, textAlign: 'center' }}>
                                Hire Me | Contact
                            </Typography>
                            <Box sx={{ pt: 2, px: 4 }}>
                                <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', }}>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Name"
                                        type="text"
                                        variant="standard"
                                        sx={{ my: 1 }}
                                        name="name"
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Subject"
                                        type="text"
                                        variant="standard"
                                        sx={{ my: 1 }}
                                        name="subject"
                                    />
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                        type="email"
                                        variant="standard"
                                        sx={{ my: 1 }}
                                        name="email"
                                    />
                                    <TextField
                                        id="standard-multiline-static"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        variant="standard"
                                        required
                                        sx={{ my: 1 }}
                                        name="message"
                                        type="text"
                                    />
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <Button type="submit" sx={{ fontSize: 18, px: 4, borderRadius: 3, mt: 1, color: 'black', fontWeight: 500 }} size="large">
                                            Send &nbsp; <SendIcon sx={{ fontSize: 18 }} />
                                        </Button>
                                    </Box>
                                </form>
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            </div>
            {/* Modal End */}
        </div>
    );
};

export default HeroSection;