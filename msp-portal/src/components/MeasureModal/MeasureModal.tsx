import { useEffect } from 'react';
import type { Measure } from '../../types';
import styles from './MeasureModal.module.css';

interface MeasureModalProps {
  measure: Measure;
  onClose: () => void;
}

export default function MeasureModal({ measure, onClose }: MeasureModalProps) {
  const isFinancial = measure.type === 'financial';

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div className={styles.headerLeft}>
            <span className={`${styles.badge} ${isFinancial ? styles.badgeFinancial : styles.badgeNonFinancial}`}>
              {isFinancial ? '💰 Финансовая мера' : '🤝 Нефинансовая мера'}
            </span>
            <h2 className={styles.modalTitle}>{measure.name}</h2>
            <p className={styles.modalMinistry}>{measure.ministry}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Закрыть">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <div className={styles.body}>
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <span className={styles.infoCardLabel}>📊 Объём поддержки</span>
              <span className={styles.infoCardValue}>{measure.volume || 'Не указан'}</span>
            </div>
            <div className={styles.infoCard}>
              <span className={styles.infoCardLabel}>🔄 Периодичность</span>
              <span className={styles.infoCardValue}>{measure.frequency || 'Не указана'}</span>
            </div>
          </div>

          <div className={styles.section}>
            <span className={styles.sectionLabel}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
              </svg>
              НПА
            </span>
            <p className={styles.sectionContent}>{measure.npa || 'Не указан'}</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.section}>
            <span className={styles.sectionLabel}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 00-3-3.87"/>
                <path d="M16 3.13a4 4 0 010 7.75"/>
              </svg>
              Требования к получателям
            </span>
            <p className={styles.sectionContent}>{measure.requirements || 'Не указаны'}</p>
          </div>

          <div className={styles.divider} />

          <div className={styles.contactBox}>
            <span className={styles.contactLabel}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.07 1.24 2 2 0 012 .07h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
              </svg>
              Где получить консультацию
            </span>
            <p className={styles.contactValue}>{measure.contact || 'Не указано'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}