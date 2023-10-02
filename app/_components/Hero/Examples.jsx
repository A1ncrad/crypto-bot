import styles from "./examples.module.css"


export default function Examples() {
	return (
		<div className={styles.examples}>
			<picture>
				<source srcSet='img/hero/bots--big--dark.png' media='(prefers-color-scheme: dark) and (min-width: 996px)' />
				<source srcSet='img/hero/bots--dark.png' media='(prefers-color-scheme: dark)' />
				<source srcSet='img/hero/bots--big.png' media='(min-width: 996px)' />

				<img src="/img/hero/bots.png" alt="Bots" />
			</picture>

			<p className={styles.text}>Popular bots use Crypto Pay</p>
		</div>
	)
}