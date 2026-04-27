import { useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import MeasureCard from '../../components/MeasureCard/MeasureCard';
import type { Measure } from '../../types';
import measuresRaw from '../../data/measures.json';
import styles from './Search.module.css';

const measures: Measure[] = measuresRaw as Measure[];

type SortOption = 'default' | 'name' | 'ministry';

export default function Search() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [sort, setSort] = useState<SortOption>('default');

  const filtered = useMemo(() => {
    let list = measures.filter(m => {
      if (!query) return true;
      const q = query.toLowerCase();
      return m.name.toLowerCase().includes(q) || m.ministry.toLowerCase().includes(q) || m.npa.toLowerCase().includes(q);
    });
    if (sort === 'name') list = [...list].sort((a, b) => a.name.localeCompare(b.name, 'ru'));
    if (sort === 'ministry') list = [...list].sort((a, b) => a.ministry.localeCompare(b.ministry, 'ru'));
    return list;
  }, [query, sort]);

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>ПОИСК</h1>

        <div className={styles.controls}>
          <div className={styles.searchWrap}>
            <svg className={styles.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/>
            </svg>
            <input
              className={styles.searchInput}
              type="text"
              placeholder="ВВЕДИТЕ ТЕКСТ"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
          <div className={styles.sortWrap}>
            <span className={styles.sortLabel}>СОРТИРОВАТЬ</span>
            <select
              className={styles.sortSelect}
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
            >
              <option value="default">По умолчанию</option>
              <option value="name">По названию</option>
              <option value="ministry">По ведомству</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>По запросу «{query}» ничего не найдено</p>
            <button className={styles.resetBtn} onClick={() => setQuery('')}>Сбросить</button>
          </div>
        ) : (
          <div className={styles.grid}>
            {filtered.map(m => (
              <MeasureCard
                key={m.id}
                measure={m}
                onClick={m => navigate(`/measures/${m.id}`)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
