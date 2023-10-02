import styles from "./slide.module.css";

export default function Slider() {

    return (
        <section className={styles.slide}>
        <img src="/img/usecases__img1.jpg" alt="Usecase" />
    
        <div className={styles.body}>
            <h2><span className={styles.decoration}>Instant Auto Sales:</span> Boost conversion</h2>
            <p>Immediately deliver digital product sand services to your users.</p>
          <button className={styles.button}>Open API Docs</button>
        </div>
      </section>
    )

}
