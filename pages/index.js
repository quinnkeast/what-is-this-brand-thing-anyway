import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          What is this Brand Thing Anyway?
        </h1>

        <p>This will be the content.</p>
      </main>
    </div>
  )
}
