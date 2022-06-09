import Head from "next/head";
import Image from "next/image";
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
        <Image
          src="https://i.ibb.co/6XjycJT/Iftakher-Hossen.png"
          alt="Resume in Image Format"
          width="1000px"
          height="1000px"
          draggable="false"
        />
      </main>
    </div>
  );
};

export default Resume;