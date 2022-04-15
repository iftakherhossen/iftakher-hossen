import { Typography, Container, Grid, Tooltip } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Box } from '@mui/system';

const Skills = ({ skills }) => {
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
                        <Grid container sx={{ p: 2 }}>
                            {
                                skills.web.map(({ id, name, growth, color }) => <Grid item xs={12} md={6} lg={6} sx={{ px: 2 }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}></div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                            }
                        </Grid>
                    </TabPanel>
                    {/* <TabPanel>
                        <Grid container  sx={{p: 2}}>
                            skills.others.map(({ id, name, growth, color }) => <Grid item xs={12} md={6} lg={6} sx={{ px: 2 }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}></div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                        </Grid>
                    </TabPanel> */}
                    <TabPanel>
                        <Grid container sx={{ p: 2 }}>
                            {
                                skills.programming.map(({ id, name, growth, color, isNew }) => <Grid item xs={12} md={6} lg={6} sx={{ px: 2 }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>
                                        {name} 
                                        {isNew === true && <small style={{color: '#aaa'}}>&nbsp;(Started Exploring)</small>}
                                    </Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}></div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                            }
                        </Grid>
                    </TabPanel>
                    <TabPanel>
                        <Grid container sx={{ p: 2 }}>
                            {
                                skills.tools.map(({ id, name, growth, color }) => <Grid item xs={12} md={6} lg={6} sx={{ px: 2 }} key={id}>
                                    <Typography variant="body1" className={styles.skillsName} sx={{ fontWeight: 600 }}>{name}</Typography>
                                    <Tooltip title={`${growth}%`}>
                                        <div className="progress">
                                            <div className={`progress-bar progress-bar-striped progress-bar-animated + ${color}`} role="progressbar" aria-valuenow={growth} aria-valuemin="0" aria-valuemax="100" style={{ width: growth + '%' }}></div>
                                        </div>
                                    </Tooltip>
                                </Grid>)
                            }
                        </Grid>
                    </TabPanel>
                </Tabs>
            </Container>
        </div>
    );
};

export default Skills;