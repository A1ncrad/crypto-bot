import styles from "./header.module.css";


export default function Header() {
	return (
		<header className={styles.header}>
			<picture>
				<source srcSet='/_img/logo--big.png' media='(min-width: 996px)'/>
				<img src='/_img/logo.png' alt='Logo'/>
			</picture>

			<nav className={styles.navigation}>
				<a className={styles.link} href="#usecases">Use cases</a>
				<a className={styles.link} href="#features">Features</a>
				<a className={styles.link} href="#instruction">How to start</a>
			</nav>
			<button className={styles.button}>Get started</button>
		</header>
	);
}