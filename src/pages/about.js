import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/About.module.css"; // Separate CSS for About page

export default function About() {
  return (
    <>
      <Head>
        <title>About Me - Alexandra Grier</title>
        <meta name="description" content="Learn more about Alexandra Grier" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        {/* Add Picture at the Top */}
        <Image
          src="/photo_2024-08-07_11-38-52.jpg"
          alt="Alexandra Grier"
          width={400}
          height={400}
          className={styles.image}
          priority
        />

        <p className={styles.description}>
          Hi, I'm Alexandra Grier. I am a Full Stack Software Developer with 10+ years of experience in supply chain management and logistics, currently focusing on AI, Python, JavaScript, and the MERN stack.
        </p>

        <h2 className={styles.sectionTitle}>Professional Experience</h2>
        {/* Flip Cards for Professional Experience */}
        <div className={styles.cardContainer}>
          <div className={`${styles.flipCard}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3>AI Engineer & CEO</h3>
              </div>
              <div className={styles.flipCardBack}>
                <p>AI Engineer, Project Developer & Co-Founder, HiveEngine Logistics Inc.</p>
              </div>
            </div>
          </div>

          <div className={`${styles.flipCard}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3>Procurement Manager</h3>
              </div>
              <div className={styles.flipCardBack}>
                <p>Procurement Account Manager, ReedTMS Logistics</p>
              </div>
            </div>
          </div>

          <div className={`${styles.flipCard}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3>Entrepreneur</h3>
              </div>
              <div className={styles.flipCardBack}>
                <p>Founder / Owner, R.T. Logistics</p>
              </div>
            </div>
          </div>
        </div>

        <h2 className={styles.sectionTitle}>Skills & Competencies</h2>
        {/* Flip Cards for Skills & Competencies */}
        <div className={styles.cardContainer}>
          <div className={`${styles.flipCard}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3>Programming Languages</h3>
              </div>
              <div className={styles.flipCardBack}>
                <p>Python, JavaScript, MERN Stack (MongoDB, Express.js, React, Node.js)</p>
              </div>
            </div>
          </div>
          <div className={`${styles.flipCard}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3>AI & ML</h3>
              </div>
              <div className={styles.flipCardBack}>
                <p>Model development, AI-driven solutions, chatbot development</p>
              </div>
            </div>
          </div>
          <div className={`${styles.flipCard}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3>Software Development</h3>
              </div>
              <div className={styles.flipCardBack}>
                <p>Full stack development, project management, agile methodologies</p>
              </div>
            </div>
          </div>
          <div className={`${styles.flipCard}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3>Data Analysis & Visualization</h3>
              </div>
              <div className={styles.flipCardBack}>
                <p>Data reporting, Power BI, Tableau, business intelligence</p>
              </div>
            </div>
          </div>
          <div className={`${styles.flipCard}`}>
            <div className={styles.flipCardInner}>
              <div className={styles.flipCardFront}>
                <h3>Languages</h3>
              </div>
              <div className={styles.flipCardBack}>
                <p>English, Russian</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
