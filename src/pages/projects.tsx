// src/pages/projects.tsx

import styles from "../styles/Projects.module.css";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const projects = [
  {
    title: "Ecommerce Website",
    description:
      "This is the simple ecommerce website using html, css and javascript.",
    imageUrl: "/images/project1.jpg",
    link: "https://tsuraj.com.np/",
  },
  {
    title: "Personal Website",
    description: "This is the official website that is remain to build.",
    imageUrl: "/images/project2.jpg",
    link: "https://tsuraj.com.np/",
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className={styles.projectsContainer}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Projexts Description" />
      </Head>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            {isClient && (
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={100}
                height={100}
                className={styles.projectImage}
              />
            )}
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                className={styles.projectLink}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
