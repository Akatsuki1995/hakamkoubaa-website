import Terminal from "../components/Terminal";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>
          HakamKoubaa:$ <span className={styles.help}>type help to start</span>
        </h1>
        <p>
          Visit{" "}
          <a
            href={`/index.html`}
            target="_blank"
            rel="noreferrer"
          >
            Normal website
          </a>
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
