import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import SkillSection from "../components/Home/SkillSection";
import ProjectSection from "../components/Home/ProjectSection";
import BlogSection from "../components/Home/BlogSection";
import projects from "../public/projects.json";
// fetching projects data with json-server & fetching blogs data from dev.to
export const getServerSideProps = async () => {
  const res = await fetch(
    "https://dev.to/api/articles?username=iftakher_hossen"
  );
  const blogsData = await res.json();
  return {
    props: {
      blogsData,
      projectsData: projects,
    },
  };
};

export default function Home({ projectsData, blogsData }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Iftakher Hossen | Portfolio</title>
        <meta name="description" content="Professional Portfolio by Next.js" />
        <link rel="icon" href="/favicon.ico" />
        {/* AOS Animation */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {/* Bootstrap CSS for Skills Bar */}
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      {/* HOMEPAGE CONTENT GOES HERE (WITHOUT NAVBAR & FOOTER) */}
      <main
        className={styles.main}
        data-spy="scroll"
        data-target="#navbar-example3"
        data-offset="0"
      >
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection projectsData={projectsData} />
        <BlogSection blogsData={blogsData} />
      </main>
    </div>
  );
}
