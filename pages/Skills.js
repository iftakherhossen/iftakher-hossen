import { Typography, Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import styles from '../styles/Home.module.css';

const Skills = () => {
    return (
        <Box className={styles.projects} id='skills'>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span className={styles.circle}></span> My Skills <span className={styles.circle}></span>
            </Typography>
            <Box className={styles.divider}></Box>

            <Box sx={{ pt: 4 }} className={styles["marginBottomInMobile"] + " " + styles["skillsContainer"]}>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>HTML</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["html"]}>95%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>CSS</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["css"]}>90%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Bootstrap</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["bootstrap"]}>85%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Tailwind CSS</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["tailwind"]}>60%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Material UI</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["materialUi"]}>65%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Javascript</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["javascript"]}>70%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>React</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["react"]}>70%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Node.js</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["nodeJs"]}>50%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>Express.js</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["express"]}>50%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName} sx={{fontWeight: 600}}>MongoDB</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["mongoDb"]}>50%</Box>
                </Box>
            </Box>

            {/* <Box>
                <Timeline position="alternate">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            Complete Web Development Course
                            from Programming Hero
                            (Running)
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot variant="outlined" color="primary" />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            Diploma-in-Engineering in Computer 
                            from Shyamoli Ideal Polytechnic Institute
                            (Running)
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box> */}
        </Box>
    );
};

export default Skills;