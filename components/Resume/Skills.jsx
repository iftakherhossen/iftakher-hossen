import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Styles from '../../styles/Resume.module.css';

const Skills = () => {
    return (
        <Box sx={{ py: 2 }}>
            <Box sx={{ px: 5, pb: 1 }}>
                <Typography variant="h5" component="h2" sx={{ fontSize: 26, mb: 1.5 }}>
                    ❖ &nbsp; Skills
                </Typography>
                <Box sx={{ px: 3 }} className={Styles.skillsWrapper}>
                    <Grid container spacing={{ xs: 1, sm: 2 }}>
                        <Grid item xs={4} sm={2} md={1.5}>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }} className={Styles.skillLevel}>
                                <span>● &nbsp; Expertise</span> <span>:</span>
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }} className={Styles.skillLevel}>
                                <span>● &nbsp; Familiar</span> <span>:</span>
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2, display: 'flex', justifyContent: 'space-between', fontWeight: 600 }} className={Styles.skillLevel}>
                                <span>● &nbsp; Tools</span> <span>:</span>
                            </Typography>
                        </Grid>
                        <Grid item xs={8} sm={10} md={10}>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2 }} className={Styles.skillLevel}>
                                HTML5 - CSS3 - Bootstrap - JavaScript - React JS - Material-UI - TailwindCSS - React Router.
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2 }} className={Styles.skillLevel}>
                                Next.js - Express.js - Node.js - MongoDB - Mongoose - Stripe.js - Redux.
                            </Typography>
                            <Typography variant="h6" component="h6" sx={{ fontSize: 18, color: '#ddd', my: 0.2 }} className={Styles.skillLevel}>
                                VS Code - Github - Git - Netlify - Firebase - Heroku - Trello - Jira.
                            </Typography>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Box>
    );
};

export default Skills;