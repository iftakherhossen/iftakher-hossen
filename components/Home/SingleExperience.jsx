import { Grid, Typography } from '@mui/material';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import styles from '../../styles/Home.module.css';
import WorkIcon from '@mui/icons-material/Work';

const SingleExperience = ({ exp }) => {
     const { company, program, position, startDate, endDate, description, website, direction, completed } = exp;

     return (
          <Grid item xs={12}>
               <VerticalTimeline>
                    {
                         completed === true && <VerticalTimelineElement
                              className="vertical-timeline-element--work"
                              contentStyle={{ background: '#464749', color: '#eee' }}
                              contentArrowStyle={{ borderRight: '9px solid  #464749' }}
                              date={`${startDate} - ${endDate}`}
                              dateClassName={styles.date}
                              iconStyle={{ background: '#464749', color: '#fff' }}
                              icon={<WorkIcon />}
                              position={direction}
                         >
                              <Typography variant="h5" className="vertical-timeline-element-title" sx={{ fontWeight: 600 }}>{position}</Typography>
                              <Typography variant="h6" className="vertical-timeline-element-subtitle">at <span style={{ fontWeight: 500 }}>{program}</span>, <a href={`${website}`} className={styles.hover} style={{ fontWeight: 500 }}>{company}</a></Typography>
                              <Typography paragraph>{description}</Typography>
                         </VerticalTimelineElement>
                    }
               </VerticalTimeline>
          </Grid>
     );
};

export default SingleExperience;