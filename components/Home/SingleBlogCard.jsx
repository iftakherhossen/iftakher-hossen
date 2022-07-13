import { Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import moment from "moment";
import FavoriteIcon from '@mui/icons-material/Favorite';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Box } from '@mui/system';
import toast from 'react-hot-toast';

const SingleBlogCard = ({ blog }) => {
    const { title, description, created_at, social_image, url, public_reactions_count, page_views_count, comments_count, tag_list } = blog;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(url);
        toast.success('Link copied successfully!', 
        {
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        )
    }

    return (
        <Grid item xs={12} md={6} lg={4}>
            <Card sx={{ m: { xs: 2, sm: 1 } }}>
                {/*  data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" */}
                <CardActionArea href={url} target="_blank">
                    <CardMedia
                        component="img"
                        height="200"
                        image={social_image}
                        alt="Blog Feature Photo"
                        draggable="false"
                    />
                    <CardContent sx={{ textAlign: 'left', pb: 0 }}>
                        <Typography sx={{ fontSize: 22, fontWeight: 600 }}>{title}</Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ fontWeight: 500, mt: 0.5 }}>
                            {description.slice(0, 35)}...
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: 16, textAlign: 'right', mt: 2, mb: 1 }}>
                            <AccessTimeIcon sx={{ fontSize: 15 }} /> {moment(created_at).fromNow()}
                        </Typography>
                        <Stack direction="row" sx={{pb: 1}}>
                            {
                                tag_list.map(tag => <Chip label={tag} variant="outlined" key={tag} sx={{ fontWeight: 500, m: 0.5 }} size="small" />)
                            }
                        </Stack>
                    </CardContent>
                </CardActionArea>
                <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', px: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', fontWeight: 500 }}>
                            <FavoriteIcon sx={{ color: '#707070', fontSize: 23, mr: 1 }} /> {public_reactions_count}
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', mx: 1, fontWeight: 500 }}>
                            <CommentIcon sx={{ color: '#707070', fontSize: 22, mr: 1 }} /> {comments_count}
                        </Box>
                    </Box>
                    <Box>
                        <IconButton aria-label="share" onClick={handleCopyLink}>
                            <ShareIcon />
                        </IconButton>
                    </Box>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default SingleBlogCard;
