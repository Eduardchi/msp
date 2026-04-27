import type { FilterType } from '../../types';
import styles from './FilterBar.module.css';

interface FilterBarProps {
  search: string;
  onSearch: (v: string) => void;
  filter: FilterType;
  onFilter: (v: FilterType) => void;
  ministry: string;
  onMinistry: (v: string) => void;
  ministries: string[];
  resultCount: number;
}

export default function FilterBar({
  search, onSearch,
  filter, onFilter,
  ministry, onMinistry,
  ministries,
  resultCount,
}: FilterBarProps) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.searchWrap}>
          <span className={styles.searchIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </span>
          <input
            className={styles.searchInput}
            type="text"
            placeholder="Поиск по названию меры поддержки..."
            value={search}
            onChange={e => onSearch(e.target.value)}
          />
        </div>

        <div className={styles.tabs}>
          {([
            ['all', 'Все меры'],
            ['financial', 'Финансовые'],
            ['non-financial', 'Нефинансовые'],
          ] as [FilterType, string][]).map(([val, label]) => (
            <button
              key={val}
              className={`${styles.tab} ${filter === val ? styles.tabActive : ''}`}
              onClick={() => onFilter(val)}
            >
              {label}
            </button>
          ))}
        </div>

        <select
          className={styles.ministrySelect}
          value={ministry}
          onChange={e => onMinistry(e.target.value)}
        >
          <option value="">Все министерства</option>
          {ministries.map(m => (
            <option key={m} value={m}>{m}</option>
          ))}
        </select>

        <span className={styles.resultCount}>
          Найдено: <strong>{resultCount}</strong>
        </span>
      </div>
    </div>
  );
}