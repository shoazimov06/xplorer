import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Hello World.</h1>

				<p className={styles.description}>Actually there{"'"}s nothing here, just an auto updater API for Xplorer. </p>

				<div className={styles.grid}>
					<a href="https://xplorer.space" className={styles.card}>
						<h2>Xplorer Documentation &rarr;</h2>
						<p>Go to Xplorer home page instead</p>
					</a>
				</div>
			</main>
		</div>
	);
};

export default Home;