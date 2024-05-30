// src/pages/index.tsx
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Welcome to My Portfolio!</h1>
            <p className={styles.description}>
              Hi, I am Suraj Thapa, a Web Developer.
            </p>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src="/images/surajj.jpg"
              alt="My Image"
              width={330}
              height={350}
              className={styles.myImage}
            />
          </div>
        </div>

        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h3>About Me &rarr;</h3>
            <p>Learn more about who I am and what I do.</p>
          </Link>

          <Link href="/projects" className={styles.card}>
            <h3>Projects &rarr;</h3>
            <p>Check out some of my latest work.</p>
          </Link>

          <Link href="/contact" className={styles.card}>
            <h3>Contact &rarr;</h3>
            <p>Get in touch with me.</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
