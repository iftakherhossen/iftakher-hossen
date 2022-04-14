import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Box } from '@mui/system';
import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography, Modal, Fade, Backdrop, TextField } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
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

const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_a43ummk', 'mail-template-iftakher', e.target, 'user_E3AjQo3AWXplLPqSzFb2c')
            .then((result) => {
                handleClose();
                console.log(result.text);                
                Swal.fire({
                    title: 'Success!',
                    text: 'Message send successfully! Please wait for a reply.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            }, (error) => {
                handleClose();
                console.log(error.text);
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an error to sending your message. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            });
        e.target.reset();
    };

    return (
        <AppBar position="fixed" sx={{ bgcolor: '#282C34', boxShadow: 0, color: '#358DC8' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuItem onClick={handleCloseNavMenu} sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500 }} className={styles.hover}>
                                    <Link href="/" passHref><HomeIcon /></Link>
                                </Button>
                                <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, mx: 1, letterSpacing: 2 }} className={styles.hover}>
                                    <Link href="#about" passHref>About</Link>
                                </Button>
                                <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, mx: 1, letterSpacing: 2 }} className={styles.hover}>
                                    <Link href="#skills" passHref>Skills</Link>
                                </Button>
                                <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, mx: 1, letterSpacing: 2 }} className={styles.hover}>
                                    <Link href="#projects" passHref>Projects</Link>
                                </Button>
                                <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, mx: 1, letterSpacing: 2 }} className={styles.hover}>
                                    <Link href="#blogs" passHref>Blogs</Link>
                                </Button>
                                <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, mx: 1, letterSpacing: 2 }} className={styles.hover}>
                                    <Link href="#contact" passHref>Contact</Link>
                                </Button>
                            </MenuItem>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, mx: 'auto' }}>
                        <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, mx: 1 }} className={styles.hover}>
                            <Link href="/" passHref><HomeIcon /></Link>
                        </Button>
                        <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, px: 2 }} className={styles.hover}>
                            <Link href="#about" passHref>About</Link>
                        </Button>
                        <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, px: 2, mx: 1, letterSpacing: 2 }} className={styles.hover}>
                            <Link href="#skills" passHref>Skills</Link>
                        </Button>
                        <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, px: 2, letterSpacing: 2 }} className={styles.hover}>
                            <Link href="#projects" passHref>Projects</Link>
                        </Button>
                        <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, mx: 2, px: 1, letterSpacing: 2 }} className={styles.hover}>
                            <Link href="#blogs" passHref>Blogs</Link>
                        </Button>
                        <Button color="inherit" sx={{ fontSize: 16, fontWeight: 500, px: 2, letterSpacing: 2 }} className={styles.hover} onClick={handleOpen}>
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
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
        </AppBar>
    );
};

export default Navigation;