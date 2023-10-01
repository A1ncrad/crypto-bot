import styles from './hero.module.css'

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.description}>
				<h1 className={styles.title}>Crypto payments for <span className={styles.decoration}>telegram bots</span></h1>
				<p className={styles.text}>Seamlessly accept crypto payments in your Telegram bots and services.</p>
				<button className={styles.button}>Get started</button>

				<div className={styles.examples}>
					<picture>
						<source srcSet="/_img/hero__examples--big.png" media="(min-width: 996px)"/>
						<img className={styles.bots} src="/_img/hero__examples.png" alt="Bots"/>
					</picture>

					<p className={styles.text}>Popular bots use Crypto Pay</p>
				</div>
			</div>

			<picture>
				{/* <source media="(prefers-color-scheme: dark)" srcSet="/_img/hero__image--dark.png" /> */}
				<img className={styles.image} src="/_img/hero__image.png" alt="Phone" />
			</picture>

		</section>
	)
}