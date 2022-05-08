import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import styles from '../../styles/Home.module.css';
import SingleExperience from './SingleExperience';

const ExperienceSection = ({ experienceData }) => {
     console.log(experienceData);

     return (
          <div className={styles.projects} id='experience'>
               <Typography variant="h4" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 5 }}>
                    Experience
               </Typography>

               <Container>
                    <Grid container sx={{ mt: 6, mb: 0 }}>
                         {
                              experienceData.map(exp => (
                                   <SingleExperience
                                        key={exp.id}
                                        exp={exp}
                                   />
                              ))
                         }
                    </Grid>
               </Container>
          </div>
     );
};

export default ExperienceSection;