import styles from '../styles/Home.module.css'
import Header from '../Layout/Header'

export default function Documentation() {
  return (
    <div className={styles.container}>
      <Header title='Documentation' />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Learn <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
