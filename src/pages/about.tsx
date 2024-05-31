// src/pages/about.tsx

import React from "react";
import styles from "../styles/About.module.css";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <div className={styles.aboutContainer}>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="Learn more about Suraj Thapa, a passionate web developer."
        />
      </Head>
      <h1 className={styles.aboutTitle}>About Me</h1>
      <p className={styles.aboutDescription}>
        Hi, I&apos;m Suraj Thapa, a passionate and dedicated web developer with
        a knack for creating dynamic and responsive web applications. With a
        strong foundation in front-end and back-end technologies, I specialize
        in delivering seamless user experiences and efficient solutions. My
        expertise includes HTML, CSS, JavaScript, React, and Node.js. I&apos;m
        committed to continuous learning and staying updated with the latest
        industry trends to build innovative and impactful web projects.
        Let&apos;s connect and create something amazing together!
      </p>
      <a href="/mycv.pdf" download className={styles.downloadLink}>
        Download CV
      </a>
    </div>
  );
};

export default About;
