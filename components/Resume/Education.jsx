import { Box, Button, Fab, Modal, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import Image from 'next/image';
import Styles from '../../styles/Styles'

const Education = ({ aboutMyself }) => {
    const { education, course } = aboutMyself;
    const [openCertificate, setOpenCertificate] = useState(false);
    const [certificateImage, setCertificateImages] = useState();
    const { certificateModalStyle } = Styles;

    const handleOpenCertificateModal = (certificate) => {
        setOpenCertificate(true);
        setCertificateImages(certificate);
    };

    const handleCloseCertificateModal = () => setOpenCertificate(false);

    const handleZoom = (screenshot) => {
        handleOpenCertificateModal(screenshot);
    }

    return (
        <div>
            <Box sx={{ py: 2 }}>
                <Box sx={{ px: 5, pb: 1 }}>
                    <Typography variant="h5" component="h2" sx={{ fontSize: 26, mb: 1.5 }}>
                        ❖ &nbsp; Education & Courses
                    </Typography>
                    <Box sx={{ px: 3 }}>
                        <TableContainer>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell sx={{ color: 'white', fontSize: 19 }}>Name</TableCell>
                                        <TableCell align="center" sx={{ color: 'white', fontSize: 19 }}>Institute</TableCell>
                                        <TableCell align="center" sx={{ color: 'white', fontSize: 19 }}>Group/Department</TableCell>
                                        <TableCell align="center" sx={{ color: 'white', fontSize: 19 }}>GPA</TableCell>
                                        <TableCell align="center" sx={{ color: 'white', fontSize: 19 }}>Passing Year</TableCell>
                                        <TableCell align="right" sx={{ color: 'white', fontSize: 19 }}>Certificate</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {education.map(({ id, degree, institute, department, passingYear, result, certificate }) => (
                                        <TableRow
                                            key={id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ color: 'white', fontSize: 17 }}>
                                                {degree}
                                            </TableCell>
                                            <TableCell align="center" sx={{ color: 'white', fontSize: 17 }}>{institute}</TableCell>
                                            <TableCell align="center" sx={{ color: 'white', fontSize: 17 }}>{department}</TableCell>
                                            <TableCell align="center" sx={{ color: 'white', fontSize: 17 }}>
                                                {
                                                    result === '' ? <span>Running</span> : result
                                                }
                                            </TableCell>
                                            <TableCell align="center" sx={{ color: 'white', fontSize: 17 }}>{passingYear}</TableCell>
                                            <TableCell align="right" sx={{ color: 'white', fontSize: 17 }}>
                                                <Button sx={{ color: 'white' }} onClick={() => handleZoom(certificate)} size="small">View</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}

                                    {course.map(({ id, name, institute, duration, medium, speciality, certificate }) => (
                                        <TableRow
                                            key={id}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row" sx={{ color: 'white', fontSize: 17 }}>
                                                {name}
                                            </TableCell>
                                            <TableCell align="center" sx={{ color: 'white', fontSize: 17 }}>{institute}</TableCell>
                                            <TableCell align="center" sx={{ color: 'white', fontSize: 17 }}>{speciality}</TableCell>
                                            <TableCell align="center" sx={{ color: 'white', fontSize: 17 }}>{medium}</TableCell>
                                            <TableCell align="center" sx={{ color: 'white', fontSize: 17 }}>{duration}</TableCell>
                                            <TableCell align="right" sx={{ color: 'white', fontSize: 17 }}>
                                                <Button sx={{ color: 'white' }} onClick={() => handleZoom(certificate)} size="small">View</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Box>
            </Box>

            {/* The Certificate Modal Start */}
            <div>
                <Modal
                    open={openCertificate}
                    onClose={handleCloseCertificateModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={certificateModalStyle}>
                        <Image
                            src={certificateImage}
                            alt="Certificate"
                            width={750}
                            height={450}
                            draggable="false"
                        />
                        <Tooltip title="Click to view this image clearly!" placement="top">
                            <Fab color="primary" aria-label="add" href={certificateImage} target="_blank" sx={{ position: 'absolute', right: 35, bottom: 35 }} style={{ color: 'white' }}>
                                <OpenInNewIcon />
                            </Fab>
                        </Tooltip>
                    </Box>
                </Modal>
            </div>
            {/* The Certificate Modal Start */}
        </div>
    );
};

export default Education;