import React from "react";
import Head from "next/head";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "../styles/Contact.module.css";

const Contact: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Get in touch with me" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Contact Me</h1>
        <p className={styles.description}>
          Feel free to reach out to me through the following methods.
        </p>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className={styles.textarea}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitButton}>
            Send
          </button>
        </form>
        <p className={styles.description}>Or directly contact me through:</p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.facebook.com/suraj.thapa.9861015025"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.instagram.com/suraj__thapa10/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <FaInstagram size={24} />
          </a>
          {/* Add more social links/icons as needed */}
        </div>
      </main>
    </div>
  );
};

export default Contact;
