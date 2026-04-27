import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.description}>
          ОФИЦИАЛЬНЫЙ ИНТЕРНЕТ-РЕСУРС ДЛЯ<br />
          ИНФОРМИРОВАНИЯ О ПОДДЕРЖКЕ МАЛЫХ И<br />
          СРЕДНИХ ПРЕДПРИЯТИЙ ТАМБОВСКОЙ ОБЛАСТИ
        </p>

        <div className={styles.right}>
          <div className={styles.brand}>
            <img src="/images/logo.png" alt="Логотип" className={styles.brandImg} />
            <div className={styles.brandText}>
              <span className={styles.brandLine1}>НАВИГАТОР МЕР</span>
              <span className={styles.brandLine2}>ПОДДЕРЖКИ МСП</span>
            </div>
          </div>
          <div className={styles.socials}>
            <a href="#" className={styles.socialBtn} aria-label="Одноклассники">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a3 3 0 110 6 3 3 0 010-6zm5 10.5c-.6.6-2.2 1.5-5 1.5s-4.4-.9-5-1.5a1 1 0 011.4-1.4c.4.4 1.6 1 3.6 1s3.2-.6 3.6-1A1 1 0 0117 16.5zm-5-2.5l-2-1.5a1 1 0 011.2-1.6L12 12l.8-.6A1 1 0 0114 12.9L12 14z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialBtn} aria-label="Telegram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8l-1.7 8c-.12.5-.44.63-.9.39l-2.5-1.84-1.2 1.16c-.13.13-.25.25-.5.25l.17-2.47 4.5-4.07c.2-.17-.04-.27-.3-.1L7.74 14.6l-2.44-.76c-.53-.17-.54-.53.11-.78l9.56-3.68c.44-.16.82.11.67.42z"/>
              </svg>
            </a>
            <a href="#" className={styles.socialBtn} aria-label="ВКонтакте">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.76 13H15.1c-.56 0-.73-.45-1.74-1.46-.87-.87-1.25-.98-1.47-.98-.3 0-.38.08-.38.5v1.33c0 .36-.12.57-1.08.57-1.57 0-3.32-.95-4.55-2.73-1.85-2.61-2.35-4.56-2.35-4.96 0-.22.08-.42.5-.42h1.68c.38 0 .52.17.66.58.73 2.1 1.95 3.95 2.46 3.95.19 0 .27-.08.27-.56v-2.2c-.06-1-.58-1.09-.58-1.45 0-.17.14-.36.37-.36h2.64c.32 0 .43.17.43.55v2.96c0 .32.14.43.23.43.18 0 .34-.11.68-.45 1.06-1.19 1.82-3.02 1.82-3.02.1-.22.28-.42.66-.42h1.67c.5 0 .6.26.5.56-.21.97-2.27 3.89-2.27 3.89-.16.26-.22.37 0 .66.16.22.68.67 1.03 1.07.64.74 1.13 1.36 1.26 1.79.12.41-.09.63-.5.63z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
