import { useEffect, useMemo, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import FilterBar from '../../components/FilterBar/FilterBar';
import MeasureCard from '../../components/MeasureCard/MeasureCard';
import type { FilterType, Measure } from '../../types';
import measuresRaw from '../../data/measures.json';
import styles from './Measures.module.css';

const measures: Measure[] = measuresRaw as Measure[];

export default function Measures() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState<FilterType>(
    (searchParams.get('type') as FilterType) || 'all'
  );
  const [ministry, setMinistry] = useState(searchParams.get('ministry') || '');

  useEffect(() => {
    const params: Record<string, string> = {};
    if (filter !== 'all') params.type = filter;
    if (ministry) params.ministry = ministry;
    setSearchParams(params, { replace: true });
  }, [filter, ministry, setSearchParams]);

  const ministries = useMemo(() => {
    const set = new Set(measures.map(m => m.ministry).filter(Boolean));
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => measures.filter(m => {
    const matchType = filter === 'all' || m.type === filter;
    const matchMin = !ministry || m.ministry === ministry;
    const matchSearch = !search ||
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.ministry.toLowerCase().includes(search.toLowerCase());
    return matchType && matchMin && matchSearch;
  }), [search, filter, ministry]);

  const handleReset = () => { setSearch(''); setFilter('all'); setMinistry(''); };

  return (
    <>
      <FilterBar
        search={search}
        onSearch={setSearch}
        filter={filter}
        onFilter={setFilter}
        ministry={ministry}
        onMinistry={setMinistry}
        ministries={ministries}
        resultCount={filtered.length}
      />
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.pageHeader}>
            <div>
              <h1 className={styles.pageTitle}>Меры поддержки МСП</h1>
              <p className={styles.pageSubtitle}>Тамбовская область — {measures.length} мер поддержки</p>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <div className={styles.emptyIcon}>🔍</div>
              <h3>Меры не найдены</h3>
              <p>Попробуйте изменить параметры поиска или сбросить фильтры</p>
              <button className={styles.resetBtn} onClick={handleReset}>Сбросить фильтры</button>
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
    </>
  );
}