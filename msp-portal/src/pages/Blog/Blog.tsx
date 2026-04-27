import { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import styles from './Blog.module.css';

type SortOption = 'default' | 'date' | 'title';

export default function Blog() {
  const [sort, setSort] = useState<SortOption>('default');

  const sorted = [...blogPosts].sort((a, b) => {
    if (sort === 'title') return a.title.localeCompare(b.title, 'ru');
    if (sort === 'date') return b.date.localeCompare(a.date);
    return 0;
  });

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>НАШ БЛОГ</h1>
        <p className={styles.subtitle}>
          ПОЛЕЗНЫЕ СТАТЬИ, СВЕЖИЕ НОВОСТИ И ПРАКТИЧЕСКИЕ СОВЕТЫ ДЛЯ ПРЕДПРИНИМАТЕЛЕЙ.
          РАССКАЗЫВАЕМ О МЕРАХ ПОДДЕРЖКИ, ИЗМЕНЕНИЯХ В ЗАКОНОДАТЕЛЬСТВЕ
          И УСПЕШНЫХ БИЗНЕС-ИСТОРИЯХ.
        </p>

        <div className={styles.controls}>
          <div className={styles.sortWrap}>
            <span className={styles.sortLabel}>СОРТИРОВАТЬ</span>
            <select
              className={styles.sortSelect}
              value={sort}
              onChange={e => setSort(e.target.value as SortOption)}
            >
              <option value="default">По умолчанию</option>
              <option value="date">По дате</option>
              <option value="title">По названию</option>
            </select>
          </div>
        </div>

        <div className={styles.grid}>
          {sorted.map(post => (
            <Link to={`/blog/${post.id}`} key={post.id} className={styles.card}>
              <h2 className={styles.cardTitle}>{post.title}</h2>
              <p className={styles.cardExcerpt}>{post.excerpt}</p>
              <div className={styles.cardDate}>{post.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
