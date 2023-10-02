import styles from "./header.module.css";


export default function Header() {
	return (
		<header className={styles.header}>
			<picture>
				<source srcSet='/img/logo--big.png' media='(min-width: 996px)' />
				<img src='/img/logo.png' alt='Logo' />
			</picture>

			<nav className={styles.navigation}>
				<a className={styles.link} href="#usecases">Use cases</a>
				<a className={styles.link} href="#features">Features</a>
				<a className={styles.link} href="#instruction">How to start</a>
			</nav>
			<a className={styles.button}>Get started</a>
		</header>
	)
}