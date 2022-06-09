import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Styles from "../styles/Resume.module.css";
const Resume = () => {
  return (
    <div>
      <Head>
        <title>Iftakher Hossen | Resume</title>
        <meta name="description" content="Professional Resume built in Next.js" />
      </Head>

      <main className={Styles.container}>
        <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
          <Link href="/" passHref>
            <Button variant="contained" sx={{ mx: 2 }}>Back to Home</Button>
          </Link>
          <Link href="https://drive.google.com/file/d/1ovRImUlYxBj-QsglW7Y3EJ-d2850fdqA/view?usp=sharing" passHref>
            <Button variant="contained" sx={{ mx: 2 }}>Resume PDF Version</Button>
          </Link>
        </Box>
        <Box>
          <Image
            src="https://i.ibb.co/6XjycJT/Iftakher-Hossen.png"
            alt="Resume in Image Format"
            width="1000px"
            height="1350px"
            draggable="false"
          />
        </Box>
      </main>
    </div>
  );
};

export default Resume;