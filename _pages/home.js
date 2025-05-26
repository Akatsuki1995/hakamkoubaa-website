import Head from "next/head";
import styles from "../styles/HomePage.module.css"; // optional

export default function HomePage() {
    return (
        <>
            <Head>
                <title>Hakam Koubaa | Home</title>
                <meta name="description" content="Welcome to my official personal website." />
                <link rel="icon" href="/HK1.ico" sizes="any" />


            </Head>

            <div className={styles.container}>
                <header className={styles.header}>
                    <h1>Welcome to my personal website</h1>
                    <p>I'm Hakam Koubaa — engineer, builder, and blockchain enthusiast.</p>
                </header>

                <main className={styles.main}>
                    <section id="about">
                        <h2>About Me</h2>
                        <p>I build secure, scalable systems, and love exploring decentralized technologies.</p>
                    </section>

                    <section id="projects">
                        <h2>Projects</h2>
                        <ul>
                            <li>Terminal CLI page at <a href="/">/</a></li>
                            <li>Blockchain MVPs, GitHub integrations, and more</li>
                        </ul>
                    </section>

                    <section id="contact">
                        <h2>Contact</h2>
                        <p>Reach me at <a href="mailto:hakamkoubaa@gmail.com">hakamkoubaa@gmail.com</a></p>
                    </section>
                </main>

                <footer className={styles.footer}>
                    <p>© {new Date().getFullYear()} Hakam Koubaa</p>
                </footer>
            </div>
        </>
    );
}
