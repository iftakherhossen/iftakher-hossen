import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroSection from "../components/Home/HeroSection";
import AboutSection from "../components/Home/AboutSection";
import SkillSection from "../components/Home/SkillSection";
import ProjectSection from "../components/Home/ProjectSection";
import BlogSection from "../components/Home/BlogSection";
import projects from "../assets/data/projects.json";
import skills from "../assets/data/skills.json";
import experienceData from "../assets/data/experience.json";
import languages from "../assets/data/languages.json";
import aboutMyself from "../assets/data/aboutMyself.json";
import Navigation from "../components/Common/Navigation";
import Footer from "../components/Common/Footer";
import MessengerCustomerChat from "react-messenger-customer-chat";
import toast, { Toaster } from "react-hot-toast";
import ExperienceSection from "../components/Home/ExperienceSection";

// fetching projects data with json-server & fetching blogs data from dev.to
export const getStaticProps = async () => {
  const res = await fetch(
    "https://dev.to/api/articles?username=iftakher_hossen"
  );
  const blogsData = await res.json();

  return {
    props: {
      aboutMyself,
      skills,
      projectsData: projects,
      blogsData,
      languages,
      experienceData,
    },
  };
};

const Home = ({ projectsData, blogsData, skills, languages, aboutMyself, experienceData }) => {
  toast("Hey User, Welcome to my website!");

  return (
    <div className={styles.container}>
      <Head>
        <title>Iftakher Hossen | Portfolio</title>
        <meta
          name="description"
          content="Professional Portfolio built in Next.js"
        />
        <link rel="icon" href="/favicon.ico" />
        {/* AOS Animation */}
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        {/* Bootstrap CSS for Skills Bar */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
        {/* Slider CSS */}
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>

      <main
        className={styles.main}
        data-spy="scroll"
        data-target="#navbar-example3"
        data-offset="0"
      >
        <Navigation />
        <HeroSection />
        <AboutSection aboutMyself={aboutMyself} />
        <SkillSection skills={skills} />
        <ProjectSection projectsData={projectsData} />
        <BlogSection blogsData={blogsData} />
        <ExperienceSection experienceData={experienceData} />
        <Footer languages={languages} />
      </main>

      <MessengerCustomerChat pageId="105104175511987" appId="313493657405238" />

      <Toaster position="bottom-center" reverseOrder={true} />
    </div>
  );
};

export default Home;
