import styles from './hero.module.css'
import Examples from './Examples'


export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.description}>
				<h1 className={styles.title}>Crypto payments for <span className={styles.decoration}>telegram bots</span></h1>
				<p className={styles.text}>Seamlessly accept crypto payments in your Telegram bots and services.</p>
				<a className={styles.button}>Get started</a>

				<Examples />
			</div>

			<picture>
				<source media="(prefers-color-scheme: dark)" srcSet="/img/hero/phone--dark.png" />
				<img className={styles.image} src="/img/hero/phone.png" alt="Phone" />
			</picture>

		</section>
	)
}