import Terminal from "../components/Terminal";
import styles from "./Home.module.css";
import Link from 'next/link'; // Import the Link component
import Head from 'next/head'; // This is still okay for client components, but generally use metadata export

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hakam Koubaa's Terminal</title>
        <meta name="description" content="Hakam Koubaa&apos;s interactive terminal experience." />
      </Head>

      <header className={styles.header}>
        <h1>
          HakamKoubaa:$ <span className={styles.help}>type help to start</span>
        </h1>
        <p>
          Visit{" "}
          {/* CORRECTED: Removed the <a> tag as a direct child of Link */}
          <Link href="/portfolio">
            Normal website
          </Link>
        </p>

      </header>

      <main className={styles.main}>
        <Terminal />
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  );
}

// Recommended for App Router:
export const metadata = {
  title: 'Hakam Koubaa\'s Terminal',
  description: 'Hakam Koubaa\'s interactive terminal experience.',
};