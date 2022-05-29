import Head from "next/head";
import React, { useState } from "react";
import Styles from "../styles/Resume.module.css";
import { Document, Page } from 'react-pdf';

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  
  return (
    <div>
      <Head>
        <title>Iftakher Hossen | Resume</title>
        <meta name="description" content="Professional Resume built in Next.js" />
      </Head>

      <main className={Styles.container}>
        {/* <HeaderSection aboutMyself={aboutMyself} />
        <Skills />
        <Projects projectsData={projectsData} />
        <Education aboutMyself={aboutMyself} />
        <Languages />
        <Footer /> */}
        <Document file="../public/Iftakher-Resume.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </main>
    </div>
  );
};

export default Resume;