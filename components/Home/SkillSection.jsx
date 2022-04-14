import { Typography, Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../../styles/Home.module.css';

const Skills = () => {
    return (
        <Box className={styles.projects} id='skills'>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className={styles.circle}></span> My Skills <span className={styles.circle}></span>
            </Typography>
            <Box className={styles.divider}></Box>

            <Container>
                <Box sx={{ pt: 4 }} className={styles["marginBottomInMobile"] + " " + styles["skillsContainer"]}>
                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>HTML</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600, textAlign: 'right' }}>CSS</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Bootstrap</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Tailwind CSS</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Material UI</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Javascript</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>React</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: '60%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Node.js</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Express.js</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>MongoDB</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}></div>
                    </div>

                    <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Next.JS</Typography>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: '40%'}}></div>
                    </div>
                </Box>
            </Container>
        </Box>
    );
};

export default Skills;