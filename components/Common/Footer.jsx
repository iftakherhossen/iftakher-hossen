import { IconButton, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import styles from '../../styles/Home.module.css';
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";


const Footer = ({ languagesData }) => {
    useEffect(() => {
        window.onscroll = function () {
            if (window.scrollY > 15) {
                document.getElementById("sticky").classList.add("popup");
            } else {
                document.getElementById("sticky").classList.remove("popup");
            }
        };
    }, []);

    function topFunction() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return (
        <Box>
            {/* <IconButton
                className="stickyGoToTop"
                sx={{ right: 5, backgroundColor: 'transparent', m: 5, p: 1.5 }}
                id="sticky"
                onClick={topFunction}
            >
                <style jsx global>
                    {`
                        .stickyGoToTop {
                            bottom: -60px;
                            -webkit-transition: bottom 0.2s ease-in-out;
                            transition: bottom 0.2s ease-in-out;
                            z-index: 9999;
                        }
                        .popup {
                            bottom: 60px;
                        }
                    `}
                </style>
                <ArrowUpwardIcon style={{ fontSize: 32, color: 'white' }} />
            </IconButton> */}

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 2 }}>
                <Box className={styles.language}>
                    <ul>
                        {
                            languagesData.map(({ id, text, fluency, level }) => (
                                <Tooltip title={level} key={id}>
                                    <li>
                                        <p>{text}</p>
                                        <div style={{ width: fluency + "%" }} className={styles.fluency} />
                                    </li>
                                </Tooltip>
                            ))
                        }
                    </ul>
                </Box>
            </Box>

            <footer className={styles.footer}>
                <Typography variant="body1">Iftakher Hossen © 2022, All rights reserved.</Typography>
            </footer>
        </Box >
    );
};

export default Footer;