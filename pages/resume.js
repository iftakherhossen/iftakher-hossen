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
import languagesData from "../assets/data/languages.json";

// fetching projects data with json-server & fetching blogs data from dev.to
export const getStaticProps = async () => {
    return {
      props: {
        aboutMyself,
        skillsData,
        projectsData,
        languagesData,
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
        <Projects />
        <Education aboutMyself={aboutMyself} />
      </main>
    </div>
  );
};

export default Resume;