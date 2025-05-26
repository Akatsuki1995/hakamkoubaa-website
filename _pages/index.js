import Terminal from "../components/Terminal";
import styles from "../styles/Home.module.css";

export default function Home() {
  const baseURL =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://hakamkoubaa.com";

  return (
    <div className={styles.container}>
      <h1>
        HakamKoubaa:$ <span className={styles.help}>type help to start</span>
      </h1>
      <p>
        Visit{" "}
        <a href={`/home`} target="_blank" rel="noreferrer">
          Normal website
        </a>
      </p>

      <Terminal />
    </div>
  );
}
