import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [measuresOpen, setMeasuresOpen] = useState(false);
  const navigate = useNavigate();
  const measuresRef = useRef<HTMLDivElement>(null);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(query.trim() ? `/search?q=${encodeURIComponent(query.trim())}` : '/search');
    setQuery('');
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (measuresRef.current && !measuresRef.current.contains(e.target as Node)) {
        setMeasuresOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        <Link to="/" className={styles.logo}>
          <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="Логотип" className={styles.logoImg} />
          <div className={styles.logoText}>
            <span className={styles.logoLine1}>НАВИГАТОР МЕР</span>
            <span className={styles.logoLine2}>ПОДДЕРЖКИ МСП</span>
          </div>
        </Link>

        <form className={styles.searchWrap} onSubmit={handleSearch}>
          <svg className={styles.searchIcon} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
          </svg>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="ПОИСК"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </form>

        <nav className={styles.nav}>
          <div className={styles.measuresWrap} ref={measuresRef}>
            <button
              className={styles.btnMeasures}
              onClick={() => setMeasuresOpen(o => !o)}
              aria-expanded={measuresOpen}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/>
              </svg>
              ВЫБРАТЬ МЕРЫ ПОДДЕРЖКИ
              <svg
                className={`${styles.chevron} ${measuresOpen ? styles.chevronUp : ''}`}
                width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            {measuresOpen && (
              <div className={styles.measuresMenu}>
                <Link to="/search"   className={styles.measuresItem} onClick={() => setMeasuresOpen(false)}>Все меры поддержки</Link>
                <Link to="/regional" className={styles.measuresItem} onClick={() => setMeasuresOpen(false)}>Региональные меры</Link>
                <Link to="/federal"  className={styles.measuresItem} onClick={() => setMeasuresOpen(false)}>Федеральные меры</Link>
              </div>
            )}
          </div>

          <Link to="/blog" className={styles.btnBlog}>БЛОГ</Link>
        </nav>

        <button className={styles.burger} onClick={() => setOpen(o => !o)} aria-label="Меню">
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className={styles.mobileMenu}>
          <Link to="/"         className={styles.mobileLink} onClick={() => setOpen(false)}>Главная</Link>
          <Link to="/search"   className={styles.mobileLink} onClick={() => setOpen(false)}>Все меры поддержки</Link>
          <Link to="/regional" className={styles.mobileLink} onClick={() => setOpen(false)}>Региональные меры</Link>
          <Link to="/federal"  className={styles.mobileLink} onClick={() => setOpen(false)}>Федеральные меры</Link>
          <Link to="/blog"     className={styles.mobileLink} onClick={() => setOpen(false)}>Блог</Link>
        </nav>
      )}
    </header>
  );
}
