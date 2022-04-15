import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from '../../styles/Resume.module.css';

const Projects = ({ projectsData }) => {
    return (
        <Box sx={{ py: 2 }}>
            <Box sx={{ px: 5, pb: 1 }}>
                <Typography variant="h5" component="h2" sx={{ fontSize: 26, mb: 1.5 }}>
                    ❖ &nbsp; Projects
                </Typography>
                <Box sx={{ px: 3 }}>
                    {
                        projectsData.slice(0, 3).map(({ id, projectName, projectDescription, projectFeatures, projectLink, clientGithub, serverGithub, projectTechnologies, projectDate }) =>
                            <Box key={id}>
                                <Typography variant="h6" component="h6" sx={{ color: '#ddd', my: 0.2 }} className={styles.anchor}>
                                    <span style={{ fontSize: 20, fontWeight: 600 }}>● &nbsp; {projectName}</span> &nbsp;
                                    <span style={{ fontSize: 18, fontWeight: 600, color: '#aaa' }}>
                                        — {projectDate} &nbsp;
                                        — <a href={projectLink} style={{ color: '#aaa' }}>Live</a> &nbsp;
                                        — <a href={clientGithub} style={{ color: '#aaa' }}>Client</a>
                                        {serverGithub && <>&nbsp; — <a href={serverGithub} style={{ color: '#aaa' }}>Server</a></>}
                                    </span>
                                </Typography>
                                <Typography paragraph sx={{ textIndent: 50, mb: 0.5 }}>
                                    {projectDescription}
                                </Typography>
                                <Typography sx={{ fontSize: 18, mb: '-8px', textIndent: 10 }}>
                                    Features:
                                </Typography>
                                <ul>
                                    {
                                        projectFeatures.map(feature => <li key={feature} style={{ marginBottom: '5px', color: '#ccc' }}>{feature}</li>)
                                    }
                                </ul>
                                <Typography sx={{ fontSize: 17, textIndent: 10, mt: '-5px', mb: 1 }}>
                                    <span style={{ fontWeight: 500 }}>Technologies:</span> <span style={{ color: '#ccc' }}>{projectTechnologies.join(', ')}</span>
                                </Typography>
                            </Box>
                        )
                    }
                </Box>
            </Box>
        </Box>
    );
};

export default Projects;