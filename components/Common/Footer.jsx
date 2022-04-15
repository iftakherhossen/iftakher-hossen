import { Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../../styles/Home.module.css';


const Footer = ({ languages }) => {
    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10, mb: 2 }}>
                <Box className={styles.language}>
                    <ul>
                        {
                            languages.map(({ id, text, fluency, level }) => (
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