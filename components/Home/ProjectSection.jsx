import React, { useState, useEffect } from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from '../../styles/Home.module.css';
import SingleProjectCard from './SingleProjectCard';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectSection = ({ projectsData }) => {
    const [projectData, setProjectData] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        setProjectData(projectsData);
    }, [projectsData]);

    const sortedProjects = projectData.slice(0, 3);

    const handleShow = () => {
        setShow(true);
    }
    const handleHide = () => {
        setShow(false);
    }

    return (
        <div className={styles.projects} id='projects'>
            <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                My Projects
            </Typography>

            <Container>
                <Grid container sx={{ mt: 6, mb: 0 }}>
                    {
                        show === true && projectData.map(project => (
                            <SingleProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))
                    }
                    {
                        show === false && sortedProjects.map(project => (
                            <SingleProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))
                    }
                </Grid>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
                    {
                        show === false && <Button variant="outlined" sx={{ m: 1, color: '#aaa', borderColor: '#aaa' }} size="large" onClick={handleShow}>
                            Show More
                        </Button>
                    }
                    {
                        show === true &&<Button variant="outlined" sx={{ m: 1, color: '#aaa', borderColor: '#aaa' }} size="large" onClick={handleHide}>
                            Hide More
                        </Button>
                    }
                    <Button variant="outlined" href="https://github.com/iftakherhossen" sx={{ m: 1, color: '#aaa', borderColor: '#aaa' }} style={{ color: '#aaa' }} size="large">
                        Browse More &nbsp; <GitHubIcon sx={{color: '#aaa'}} />
                    </Button>
                </Box>
            </Container>
        </div>
    );
};

export default ProjectSection;