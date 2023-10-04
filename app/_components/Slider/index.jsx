"use client"

import styles from "./slider.module.css";



export default function Slider() {
	let position;
	let startPositon;

	function getPosition(e){
		startPositon = e.touches[0].clientX;
	}

	function updatePosition(e) {
		position = e.touches[0].clientX;
	}

	function nextSlide(e) {
		const track = document.getElementById("track");
		const gap = parseFloat( getComputedStyle(track).gap );

		if (startPositon - position < 50) {
			track.style.transform = `translateX(-${track.offsetWidth + gap}px)`;
		} else {
			track.style.transform = `translateX(${track.offsetWidth + gap}px)`;
		}
		




		


	}

	return (
		<div className={styles.slider}  onTouchStart={getPosition} onTouchMove={updatePosition} onTouchEnd={nextSlide} id="slider">

			<div className={styles.container}>

				<div className={styles.track} id="track">

				<div className={styles.track}>
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

			</div>

		</div>
	);
}
