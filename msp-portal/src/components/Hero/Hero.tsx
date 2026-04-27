import styles from './Hero.module.css';

interface HeroProps {
  totalCount: number;
  financialCount: number;
  nonFinancialCount: number;
}

export default function Hero({ totalCount, financialCount, nonFinancialCount }: HeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.badge}>🏛 Государственная поддержка бизнеса</div>
          <h1 className={styles.title}>
            Меры поддержки субъектов <span>МСП</span> Тамбовской области
          </h1>
          <p className={styles.subtitle}>
            Реестр финансовых и нефинансовых мер поддержки малого и среднего
            предпринимательства. Найдите подходящую программу для развития вашего бизнеса.
          </p>
          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{totalCount}</span>
              <span className={styles.statLabel}>Всего мер</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{financialCount}</span>
              <span className={styles.statLabel}>Финансовых</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.statNumber}>{nonFinancialCount}</span>
              <span className={styles.statLabel}>Нефинансовых</span>
            </div>
          </div>
        </div>
        <div className={styles.image}>
          <img
            src={`${import.meta.env.BASE_URL}images/businessman.png`}
            alt="Предприниматель"
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
}