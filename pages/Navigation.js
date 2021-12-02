import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Box } from '@mui/system';
import { AppBar, Button, Container, IconButton, Menu, MenuItem, Toolbar, Typography } from '@mui/material';


const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'transparent', boxShadow: 0, color: '#358DC8' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            noWrap
                            component="div"
                            sx={{ mr: 2, fontSize: 22, display: { xs: 'none', md: 'flex' } }}
                        >
                            <code>Iftakher Hossen</code>
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
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
                                    <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600, mx: 1 }} className={styles.hover}>
                                        <code><Link href="#about" passhref>About</Link></code>
                                    </Button>
                                    <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600, mx: 1 }} className={styles.hover}>
                                        <code><Link href="#skills" passhref>Skills</Link></code>
                                    </Button>
                                    <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600, mx: 1 }} className={styles.hover}>
                                        <code>
                                            <Link href="#projects" passhref>Projects</Link>
                                        </code>
                                    </Button>
                                    <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600, mx: 1 }} className={styles.hover}>
                                        <code><Link href="#blogs" passhref>Blogs</Link></code>
                                    </Button>
                                    <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600, mx: 1 }} className={styles.hover}>
                                        <code><Link href="#contact" passhref>Contact</Link></code>
                                    </Button>
                                </MenuItem>
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            <code>Iftakher Hossen</code>
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}></Box>

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                            <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600 }} className={styles.hover}>
                                <code>
                                    <Link href="#about" passhref>About</Link>
                                </code>
                            </Button>
                            <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600, mx: 1 }} className={styles.hover}>
                                <code><Link href="#skills" passhref>
                                    Skills
                                </Link></code>
                            </Button>
                            <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600 }} className={styles.hover}>
                                <code>
                                    <Link href="#projects" passhref>Projects</Link>
                                </code>
                            </Button>
                            <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600, mx: 1 }} className={styles.hover}>
                                <code><Link href="#blogs" passhref>Blogs</Link></code>
                            </Button>
                            <Button color="inherit" sx={{ fontSize: 18, fontWeight: 600 }} className={styles.hover}>
                                <code><Link href="#contact" passhref>Contact</Link></code>
                            </Button>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigation;