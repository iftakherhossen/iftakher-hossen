import React, { useState } from 'react';
import { Backdrop, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Fab, Fade, Grid, IconButton, List, ListItem, ListItemText, Modal, Stack, Tooltip, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';
import Image from 'next/image';
import Styles from '../../styles/Styles';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const SingleProjectCard = ({ project }) => {
    const { projectName, projectDescription, projectFeatures, projectImage, projectLink, projectTechnologies, clientGithub, serverGithub, projectScreenshots } = project;
    const [openProject, setOpenProject] = useState(false);
    const [openImage, setOpenImage] = useState(false);
    const { projectModalStyle, imageModalStyle } = Styles();
    const [projectImages, setProjectImages] = useState();

    const handleOpenProjectModal = () => setOpenProject(true);
    const handleCloseProjectModal = () => setOpenProject(false);
    const handleOpenImageModal = (screenshot) => {
        setOpenImage(true);
        setProjectImages(screenshot);
    };
    const handleCloseImageModal = () => setOpenImage(false);

    const handleZoom = (screenshot) => {
        handleOpenImageModal(screenshot);
    }

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ m: 1 }}>
                {/*  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" */}
                <CardActionArea href={projectLink} target="_blank">
                    {
                        projectImage && <CardMedia
                            component="img"
                            height="100%"
                            image={projectImage}
                            alt="Project Feature Photo"
                            draggable="false"
                        />
                    }
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {projectName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {projectDescription}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Tooltip title="Explore More!">
                        <IconButton sx={{ color: '#282C34', fontWeight: 700 }} onClick={handleOpenProjectModal}>
                            {
                                openProject === false ? <AddCircleOutlineIcon sx={{ fontSize: 25 }} />
                                    : <RemoveCircleOutlineIcon sx={{ fontSize: 25 }} />
                            }
                        </IconButton>
                    </Tooltip>
                </CardActions>
            </Card>

            <div>
                {/* The Single Project Modal Start */}
                <div>
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={openProject}
                        onClose={handleCloseProjectModal}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500,
                        }}
                    >
                        <Fade in={openProject}>
                            <Box sx={projectModalStyle}>
                                <Typography id="transition-modal-title" variant="h5" component="h1" sx={{ fontSize: 30, fontWeight: 600 }}>
                                    {projectName}
                                </Typography>
                                <Typography paragraph sx={{ my: 1 }}>
                                    {projectDescription}
                                </Typography>
                                <hr />
                                <Typography variant="h6" component="h3" sx={{ fontSize: 22, fontWeight: 500 }}>Project Features</Typography>
                                <List>
                                    {
                                        projectFeatures.map(feature =>
                                            <ul key={feature} style={{ py: 0.5, textAlign: 'left' }}>
                                                <li>
                                                    {feature}
                                                </li>
                                            </ul>
                                        )
                                    }
                                </List>
                                <Stack direction="row" sx={{ pb: 1, mt: 1, flexWrap: 'wrap', justifyContent: 'center' }}>
                                    {
                                        projectTechnologies.map(tech => <Chip label={tech} variant="outlined" key={tech} sx={{ fontWeight: 500, fontSize: 15, p: 0, m: 0.5 }} size="medium" color="primary" />)
                                    }
                                </Stack>
                                <Box sx={{ mt: 1, display: 'flex', justifyContent: 'center', p: 2 }} className="gallery">
                                    {
                                        projectScreenshots.map(screenshot => <Image
                                            src={screenshot}
                                            key={screenshot}
                                            alt="Project Screenshots"
                                            width={300}
                                            height={165}
                                            id="projectImages"
                                            onClick={() => handleZoom(screenshot)}
                                            draggable="false"
                                        />
                                        )
                                    }
                                </Box>
                                <hr />
                                <Box>
                                    <Button variant='contained' sx={{ mx: 1 }} href={projectLink} style={{ color: 'white' }}>
                                        <LanguageIcon /> &nbsp; Live Site
                                    </Button>
                                    <Button variant='contained' sx={{ mx: 1 }} href={clientGithub} style={{ color: 'white' }}>
                                        <GitHubIcon /> &nbsp; Client Side
                                    </Button>
                                    {
                                        serverGithub && <Button variant='contained' sx={{ mx: 1 }} href={serverGithub} style={{ color: 'white' }}>
                                            <GitHubIcon /> &nbsp; Server Side
                                        </Button>
                                    }
                                </Box>
                            </Box>
                        </Fade>
                    </Modal>
                </div>
                {/* The Single Project Modal End */}

                {/* The  Modal/LightBox Start */}
                <div>
                    <Modal
                        open={openImage}
                        onClose={handleCloseImageModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={imageModalStyle}>
                            <Image
                                src={projectImages}
                                alt="Project Screenshots"
                                width={800}
                                height={480}
                                draggable="false"
                            />
                            <Tooltip title="Click to view this image clearly!" placement="top">
                                <Fab color="primary" aria-label="add" href={projectImages} target="_blank" sx={{ position: 'absolute', right: 35, bottom: 35 }} style={{ color: 'white' }}>
                                    <OpenInNewIcon />
                                </Fab>
                            </Tooltip>
                        </Box>
                    </Modal>
                </div>
                {/* The Modal/LightBox Start */}
            </div>
        </Grid>
    );
};

export default SingleProjectCard;