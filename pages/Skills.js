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

            <Box sx={{ pt: 5 }} className={styles.marginBottomInMobile}>
                <Typography variant="body1" className={styles.skillsName}>HTML</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["html"]}>95%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName}>CSS</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["css"]}>90%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName}>Bootstrap</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["bootstrap"]}>85%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName}>Tailwind CSS</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["tailwind"]}>60%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName}>Material UI</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["materialUi"]}>65%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName}>Javascript</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["javascript"]}>70%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName}>React</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["react"]}>70%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName}>Node.js</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["nodeJs"]}>50%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName}>Express.js</Typography>
                <Box className={styles.skillsWrapper}>
                    <Box className={styles["skillsBar"] + " " + styles["express"]}>50%</Box>
                </Box>
                <Typography variant="body1" className={styles.skillsName}>MongoDB</Typography>
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