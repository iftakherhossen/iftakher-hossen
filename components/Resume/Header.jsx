import { Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const HeaderSection = ({ aboutMyself }) => {
    const { location, email, phone, portfolio, socialMedia } = aboutMyself;

    return (
        <div>
            <Box sx={{ px: 5, pb: 1 }}>
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
            </Box>
            <Divider sx={{ bgcolor: '#aaa', height: 1 }} />
        </div>
    );
};

export default HeaderSection;