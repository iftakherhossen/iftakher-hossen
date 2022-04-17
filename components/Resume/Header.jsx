import { Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import Iftakher from '../../public/iftakher.jpg';
import Styles from '../../styles/Resume.module.css';

const HeaderSection = ({ aboutMyself }) => {
    const { location, email, phone, portfolio, socialMedia } = aboutMyself;

    return (
        <div>
            <Box sx={{ px: 5, pb: 1 }}>
                <Grid container sx={{display: 'flex', alignItems: 'center'}} className={Styles.header}>
                    <Grid item xs={12} sm={12} md={10} className={Styles.heading}>
                        <Typography variant="h3" component="h1">
                            Iftakher Hossen
                        </Typography>
                        <Typography variant="h6" component="h3" sx={{ color: '#ddd', mt: 0.5 }}>
                            Frontend Developer | Full-stack Developer
                        </Typography>
                        <Typography variant="body1" component="h6" sx={{ color: '#ddd', my: 0.2 }}>
                            <a href={portfolio}>Portfolio</a> | {socialMedia.slice(4, 5).map(({ id, name, url }) => <a href={url} key={id}>{name}</a>)} | {socialMedia.slice(3, 4).map(({ id, name, url }) => <a href={url} key={id}>{name}</a>)}
                        </Typography>
                        <Typography variant="body1" component="h6" sx={{ color: '#ddd' }}>
                            <a href={`tel:${phone}`}>{phone}</a> | <a href={`tel:${email}`}>{email}</a> | {location}
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={2} className={Styles.picture}>
                        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <Image src={Iftakher} alt="Iftakher Hossen" width={150} height={160} draggable="false" className={Styles.image} />
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{ bgcolor: '#aaa', height: 1 }} />
        </div>
    );
};

export default HeaderSection;