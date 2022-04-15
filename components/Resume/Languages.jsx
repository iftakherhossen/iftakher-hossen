import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const Languages = () => {
    return (
        <Box sx={{ py: 2 }}>
            <Box sx={{ px: 5, pb: 1 }}>
                <Typography variant="h5" component="h2" sx={{ fontSize: 26, mb: 1.5 }}>
                    ❖ &nbsp; Languages
                </Typography>
                <Box sx={{ px: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={2} sm={1} md={1.5}>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                                <span>● &nbsp; Bangla</span> <span>:</span>
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                                <span>● &nbsp; English</span> <span>:</span>
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }}>
                                <span>● &nbsp; Hindi</span> <span>:</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={10} sm={11} md={10}>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2 }}>
                                Native Speaker.
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2 }}>
                                Proficient Speaker.
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2 }}>
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