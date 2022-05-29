import Head from "next/head";
import React, { useState } from "react";
import Styles from "../styles/Resume.module.css";
import { Document, Page, pdfjs } from "react-pdf";
const Resume = () => {
  const file= "./Iftakher-Resume.pdf";
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  return (
    <div>
      <Head>
        <title>Iftakher Hossen | Resume</title>
        <meta name="description" content="Professional Resume built in Next.js" />
      </Head>

      <main className={Styles.container}>
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderAnnotationLayer={false}
              renderTextLayer={false}
            />
          ))}
        </Document>
      </main>
    </div>
  );
};

export default Resume;