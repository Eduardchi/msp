import { useNavigate, useParams } from 'react-router-dom';
import type { Measure } from '../../types';
import measuresRaw from '../../data/measures.json';
import styles from './MeasureDetail.module.css';

const measures: Measure[] = measuresRaw as Measure[];

export default function MeasureDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const measure = measures.find(m => m.id === Number(id));

  if (!measure) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h2>Мера поддержки не найдена</h2>
            <p>Возможно, вы перешли по неверной ссылке</p>
            <button className={styles.backBtn} onClick={() => navigate(-1)}>← Назад</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.ministry}>{measure.ministry}</div>

        <h1 className={styles.title}>{measure.name}</h1>

        <div className={styles.fields}>
          <div className={styles.field}>
            <div className={styles.fieldLabel}>
              РЕКВИЗИТЫ И НАИМЕНОВАНИЕ НПА, РЕГЛАМЕНТИРУЮЩЕГО ПОРЯДОК ОКАЗАНИЯ ТАКОЙ ПОДДЕРЖКИ:
            </div>
            <p className={styles.fieldValue}>{measure.npa || '—'}</p>
          </div>

          <div className={styles.field}>
            <div className={styles.fieldLabel}>ТРЕБОВАНИЯ К ПОЛУЧАТЕЛЯМ МЕРЫ ПОДДЕРЖКИ:</div>
            <p className={styles.fieldValue}>{measure.requirements || '—'}</p>
          </div>

          <div className={styles.field}>
            <div className={styles.fieldLabel}>ПЕРИОДИЧНОСТЬ ОКАЗАНИЯ МЕРЫ ПОДДЕРЖКИ:</div>
            <p className={styles.fieldValue}>{measure.frequency || '—'}</p>
          </div>

          <div className={styles.field}>
            <div className={styles.fieldLabel}>ГДЕ ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ:</div>
            <p className={styles.fieldValue}>{measure.contact || '—'}</p>
          </div>
        </div>

        <div className={styles.actions}>
          <button className={styles.backBtn} onClick={() => navigate(-1)}>← Назад</button>
        </div>
      </div>
    </div>
  );
}
