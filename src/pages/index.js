import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>My Portfolio - Alexandra Grier</title>
        <meta
          name="description"
          content="Welcome to Alexandra Grier's portfolio website"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio</h1>
        <Image
          src="/photo_2024-08-07_11-38-52.jpg"
          alt="Alexandra Grier"
          width={400} // Adjusted size
          height={400} // Adjusted size
          className={styles.image}
          priority
        />
        <p className={styles.description}>
          Hi, I'm Alexandra Grier. I am a Full Stack Software Developer and
          Co-Founder with a passion for AI, machine learning, and the MERN
          stack. Explore my work, skills, and experience.
        </p>
        <div className={styles.grid}>
          <Link href="/about" className={styles.card}>
            <h2>About Me &rarr;</h2>
            <p>Learn more about my background, skills, and experience.</p>
          </Link>

          <Link href="/projects" className={styles.card}>
            <h2>Projects &rarr;</h2>
            <p>See the projects I have worked on, including HiveEngine Logistics.</p>
          </Link>

          <a
            href="https://www.linkedin.com/in/alexandra-grier-ai-ml-logistics-transportation/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>LinkedIn &rarr;</h2>
            <p>Connect with me on LinkedIn.</p>
          </a>

          <a
            href="https://github.com/AlexaEngine"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>GitHub &rarr;</h2>
            <p>Check out my projects on GitHub.</p>
          </a>
        </div>
      </main>
    </>
  );
}
