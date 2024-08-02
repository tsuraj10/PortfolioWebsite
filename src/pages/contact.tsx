import Head from "next/head";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import styles from "../styles/Contact.module.css";
import React, { useState } from "react";
import axios from "axios";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/contact", {
        name,
        email,
        message,
      });
      setSuccess("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
      setError("Failed to send message. Please try again.");
    }
  };
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
        <form className={styles.form} onSubmit={handleSubmit}>
          {success && <p>{success}</p>}
          {error && <p>{error}</p>}
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
