import { Typography, Container, Grid } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Skills = () => {
    return (
        <div className={styles.projects} id='skills'>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pb: 4 }}>
                My Skills
            </Typography>

            <Container>
                <Tabs className={styles["marginBottomInMobile"] + " " + styles["skillsContainer"]}>
                    <TabList>
                        <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Web</Tab>
                        {/* <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Others</Tab> */}
                        <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Programming</Tab>
                        <Tab style={{ backgroundColor: 'transparent', border: 0, color: 'white', fontSize: 20, fontWeight: 500 }}>Tools</Tab>
                    </TabList>

                    <TabPanel>
                        <Grid container sx={{p: 2}}>
                            <Grid item xs={12} md={6} lg={6} sx={{px: 2}}>
                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>HTML</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                                </div>

                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>CSS</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                                </div>

                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>Bootstrap</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                                </div>

                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>Tailwind CSS</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{ width: '95%' }}></div>
                                </div>

                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>Material UI</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} sx={{px: 2}}>
                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>React</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{ width: '60%' }}></div>
                                </div>

                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>Node.js</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-secondary" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div>
                                </div>

                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>Express.js</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div>
                                </div>

                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>MongoDB</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div>
                                </div>

                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>Next.JS</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: '40%' }}></div>
                                </div>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    {/* <TabPanel>
                        <Grid container  sx={{p: 2}}>
                            <Grid item xs={12} md={6} lg={6} sx={{px: 2}}>
                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}></Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: '0%' }}></div>
                                </div>
                            </Grid>
                        </Grid>
                    </TabPanel> */}
                    <TabPanel>
                        <Grid container  sx={{p: 2}}>
                            <Grid item xs={12} md={6} lg={6} sx={{px: 2}}>
                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>Javascript</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}></div>
                                </div>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} sx={{px: 2}}>
                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>C#</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{ width: '20%' }}></div>
                                </div>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        <Grid container  sx={{p: 2}}>
                            <Grid item xs={12} md={6} lg={6} sx={{px: 2}}>
                                <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>Git</Typography>
                                <div className="progress">
                                    <div className="progress-bar progress-bar-striped progress-bar-animated bg-warning" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}></div>
                                </div>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    );
};

export default Skills;