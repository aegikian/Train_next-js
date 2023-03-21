import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Index.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Наши Бургеры</title>
        <meta name="the best burgers" content="burgers" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.body_index}>
        <h1>Главная</h1>
        <div>
          <Image width={350} height={300} src='/ham1.png' alt='burger' />
        </div>
      </div>
    </>
  )
}
