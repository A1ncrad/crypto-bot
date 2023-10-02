"use client"

import styles from "./slider.module.css";
import { useEffect } from "react";



export default function Slider() {
	let track;

	function nextSlide() {
		useEffect(() => {
			track = document.getElementsByClassName(styles.track);
		}, [])

		track?.styles?.transform = `translateX(-100%)`;
	}

	return (
		<div className={styles.slider} onScroll={nextSlide}>

			<div className={styles.track} onScroll={nextSlide}>
				<section className={styles.slide}>
					<img className={styles.image} src="/img/slider/usecase1.jpg" alt="Usecase" />

					<div className={styles.body}>
						<h2 className={styles.title}><span className={styles.decoration}>Instant Auto Sales:</span> Boost conversion</h2>
						<p className={styles.text}>Immediately deliver digital product sand services to your users.</p>
						<button className={styles.button}>Open API Docs</button>
					</div>
				</section>

				<section className={styles.slide}>
					<img className={styles.image} src="/img/slider/usecase2.jpg" alt="Usecase" />

					<div className={styles.body}>
						<h2 className={styles.title}><span className={styles.decoration}>Instant Auto Sales:</span> Boost conversion</h2>
						<p className={styles.text}>Immediately deliver digital product sand services to your users.</p>
						<button className={styles.button}>Open API Docs</button>
					</div>
				</section>
			</div>

		</div>
	);
}
