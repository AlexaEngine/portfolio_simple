import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Alexandra Grier</title>
        <meta name="description" content="See the projects by Alexandra Grier" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.card}>
          <h2>HiveEngine Logistics Inc.</h2>
          <p>
            Developed an AI-driven platform to enhance business operations, minimize fraud, and improve service quality.
          </p>
          <p>Technologies Used: AI, Python, MERN Stack</p>
          <div className={styles.buttonContainer}>
            {/* Link to the HiveEngine Project PDF */}
            <a
              href="/HiveEngine.pdf" // Replace with your actual file path or URL
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.hiveButton}`}
            >
              View HiveEngine Project Details (PDF)
            </a>
          </div>
        </div>

        <div className={styles.card}>
          <h2>HippoMan Game</h2>
          <p>
            A fun and interactive game where players guide HippoMan through challenging levels filled with obstacles and rewards.
          </p>
          <p>Technologies Used: Unity, C#, Game Development</p>
          <div className={styles.buttonContainer}>
            {/* Link to the HippoMan Game on GitHub or the game's website */}
            <a
              href="https://scratch.mit.edu/projects/1055307330" 
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.button} ${styles.hippoButton}`}
            >
              View HippoMan Game
            </a>
          </div>
        </div>

        <p>
          For more projects, please visit my <a href="https://github.com/AlexaEngine" className={styles.link}>GitHub page</a>.
        </p>
      </main>
    </>
  );
}
