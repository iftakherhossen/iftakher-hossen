import Head from "next/head";
import React from "react";
import Education from "../components/Resume/Education";
import HeaderSection from "../components/Resume/Header";
import Projects from "../components/Resume/Projects";
import Skills from "../components/Resume/Skills";
import Styles from "../styles/Resume.module.css";
import aboutMyself from "../assets/data/aboutMyself.json";
import projectsData from "../assets/data/projects.json";
import skillsData from "../assets/data/skills.json";
import Languages from "../components/Resume/Languages";
import Footer from "../components/Resume/Footer";

// fetching projects data with json-server & fetching blogs data from dev.to
export const getStaticProps = async () => {
    return {
      props: {
        aboutMyself,
        skillsData,
        projectsData
      },
    };
  };

const Resume = () => {
  return (
    <div>
      <Head>
        <title>Iftakher Hossen | Resume</title>
        <meta name="description" content="Professional Resume built in Next.js" />
      </Head>

      <main className={Styles.container}>
        <HeaderSection aboutMyself={aboutMyself} />
        <Skills />
        <Projects projectsData={projectsData} />
        <Education aboutMyself={aboutMyself} />
        <Languages />
        <Footer />
      </main>
    </div>
  );
};

export default Resume;