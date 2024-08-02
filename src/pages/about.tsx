import React from "react";
import Head from "next/head";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="max-w-3xl mx-auto p-8 bg-gray-800 rounded-2xl shadow-lg">
        <Head>
          <title>About Me</title>
          <meta
            name="description"
            content="Learn more about Suraj Thapa, a passionate web developer."
          />
        </Head>
        <h1 className="text-4xl mb-6 text-center text-cyan-400 font-bold">
          About Me
        </h1>
        <p className="text-lg leading-relaxed text-cyan-200 text-justify mb-6">
          Hi, I&apos;m Suraj Thapa, a passionate and dedicated web developer
          with a knack for creating dynamic and responsive web applications.
          With a strong foundation in front-end and back-end technologies, I
          specialize in delivering seamless user experiences and efficient
          solutions. My expertise includes HTML, CSS, JavaScript, React, and
          Node.js. I&apos;m committed to continuous learning and staying updated
          with the latest industry trends to build innovative and impactful web
          projects. Let&apos;s connect and create something amazing together!
        </p>
        <div className="flex justify-center">
          <a
            href="/mycv.pdf"
            download
            className="inline-block mt-4 px-6 py-3 text-lg font-medium text-white bg-blue-600 rounded-md transition-colors duration-150 ease-in-out hover:bg-blue-700 focus:bg-blue-700"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
