import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="px-8">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-white min-h-screen py-16 flex flex-col justify-center items-center">
        <div className="flex justify-between items-center w-full max-w-2xl mb-8">
          <div className="flex-1 pr-4">
            <h1 className="text-2xl mb-4">Welcome to My Portfolio!</h1>
            <p className="text-xl mb-8">
              Hi, I am Suraj Thapa, a Web Developer.
            </p>
            <a
              href="/mycv.pdf"
              download
              className="inline-block mt-4 px-5 py-3 text-xl text-white bg-blue-600 rounded-md transition-colors duration-150 hover:bg-blue-700"
            >
              Download CV
            </a>
          </div>
          <div className="flex-shrink-0">
            <Image
              src="/images/surajj.jpg"
              alt="My Image"
              width={330}
              height={350}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-center flex-wrap max-w-2xl mt-12">
          <Link
            href="/about"
            className="m-4 flex-basis-45 p-6 text-left no-underline border border-gray-300 rounded-md transition-colors duration-150 hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-xl">About Me &rarr;</h3>
            <p className="text-lg">Learn more about who I am and what I do.</p>
          </Link>

          <Link
            href="/projects"
            className="m-4 flex-basis-45 p-6 text-left no-underline border border-gray-300 rounded-md transition-colors duration-150 hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-xl">Projects &rarr;</h3>
            <p className="text-lg">Check out some of my latest work.</p>
          </Link>

          <Link
            href="/contact"
            className="m-4 flex-basis-45 p-6 text-left no-underline border border-gray-300 rounded-md transition-colors duration-150 hover:text-blue-600 hover:border-blue-600"
          >
            <h3 className="mb-4 text-xl">Contact &rarr;</h3>
            <p className="text-lg">Get in touch with me.</p>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Home;
