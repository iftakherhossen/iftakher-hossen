import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Home from './Home'
import Footer from './Footer'
import Contact from './Contact'
import Projects from './Projects'
import { useState, useEffect } from 'react';
import { Button, Tooltip } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import Blogs from './Blogs';
import Skills from './Skills';
import About from './About';
import React from 'react';
import Navigation from './Navigation';

export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iftakher Hossen - Portfolio</title>
        <meta name="description" content="Professional Portfolio by Next.js" />
        <link rel="icon" href="/favicon.ico" />
        {/* AOS Animation */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      </Head>

      <header>
        <Navigation />
      </header>

      <main className={styles.main}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Blogs />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}