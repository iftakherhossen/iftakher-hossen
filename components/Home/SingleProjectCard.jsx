import React, { useState } from 'react';
import { Backdrop, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Fade, Grid, IconButton, List, ListItem, ListItemText, Modal, Stack, Typography } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { Box } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 700,
    bgcolor: '#eee',
    boxShadow: 24,
    p: 5,
    borderRadius: 2,
    textAlign: 'center',
};

const SingleProjectCard = ({ project }) => {
    const { id, projectName, projectDescription, projectFeatures, projectImage, projectLink, projectTechnologies, clientGithub, serverGithub } = project;
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

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
                    <IconButton sx={{ color: '#282C34', fontWeight: 700 }} onClick={handleOpen}>
                        {
                            open === false ? <AddCircleOutlineIcon sx={{ fontSize: 25 }} />
                                : <RemoveCircleOutlineIcon sx={{ fontSize: 25 }} />
                        }
                    </IconButton>
                </CardActions>
            </Card>

            {/* Modal Start */}
            <div>
                <Modal
                    aria-labelledby="transition-modal-title"
                    aria-describedby="transition-modal-description"
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropComponent={Backdrop}
                    BackdropProps={{
                        timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box sx={style}>
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
                                        <ul key={id} style={{ py: 0.5, textAlign: 'left' }}>
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
                            <hr />
                            <Box>
                                <Button variant='contained' sx={{ mx: 1 }} href={projectLink}>
                                    <LanguageIcon /> &nbsp; Live Site
                                </Button>
                                <Button variant='contained' sx={{ mx: 1 }} href={clientGithub}>
                                    <GitHubIcon /> &nbsp; Client Side
                                </Button>
                                {
                                    serverGithub && <Button variant='contained' sx={{ mx: 1 }} href={serverGithub}>
                                        <GitHubIcon /> &nbsp; Server Side
                                    </Button>
                                }
                            </Box>
                        </Box>
                    </Fade>
                </Modal>
            </div>
            {/* Modal End */}
        </Grid>
    );
};

export default SingleProjectCard;