import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import Styles from '../../styles/Resume.module.css';

const Languages = () => {
    return (
        <Box sx={{ py: 2 }}>
            <Box sx={{ px: 5, pb: 1 }}>
                <Typography variant="h5" component="h2" sx={{ fontSize: 26, mb: 1.5 }}>
                    ❖ &nbsp; Languages
                </Typography>
                <Box sx={{ px: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} sm={2} md={2}>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, display: 'flex', justifyContent: 'space-between', fontWeight: 600, height: '30%' }} className={Styles.languageLevel}>
                                <span>● &nbsp; Bangla</span> <span>:</span>
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, display: 'flex', justifyContent: 'space-between', fontWeight: 600, height: '30%' }} className={Styles.languageLevel}>
                                <span>● &nbsp; English</span> <span>:</span>
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, display: 'flex', justifyContent: 'space-between', fontWeight: 600, height: '30%' }} className={Styles.languageLevel}>
                                <span>● &nbsp; Hindi</span> <span>:</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={6} sm={10} md={10}>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, height: '30%' }} className={Styles.languageLevel}>
                                Native Speaker.
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, height: '30%' }} className={Styles.languageLevel}>
                                Proficient Speaker.
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, height: '30%' }} className={Styles.languageLevel}>
                                Intermediate Speaker.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Languages;