import type { Measure } from '../../types';
import styles from './MeasureCard.module.css';

interface Props {
  measure: Measure;
  onClick: (m: Measure) => void;
}

function getAudienceBullets(req: string): string[] {
  if (!req) return [];
  const catMatch = req.match(/[Кк]атегория получател[^—–\-]*[—–\-]\s*([^;.\n]+)/);
  if (catMatch) {
    const text = catMatch[1].trim().slice(0, 90);
    return [text];
  }
  const parts = req.split(/;\s*|\n/).map(s => s.replace(/^\d+\.\s*/, '').trim()).filter(Boolean);
  return parts.slice(0, 2).map(p => p.slice(0, 60));
}

export default function MeasureCard({ measure, onClick }: Props) {
  const bullets = getAudienceBullets(measure.requirements);
  const isFederal = measure.level === 'federal';

  return (
    <div className={styles.card} onClick={() => onClick(measure)}>
      <div className={styles.badge}>
        {isFederal ? 'ФЕДЕРАЛЬНАЯ МЕРА' : 'РЕГИОНАЛЬНАЯ МЕРА'}
      </div>
      <div className={styles.name}>{measure.name}</div>
      <div className={styles.audience}>
        <div className={styles.audienceLabel}>КОМУ ПОДХОДИТ:</div>
        <ul className={styles.list}>
          {bullets.length > 0
            ? bullets.map((b, i) => <li key={i} className={styles.listItem}>{b}</li>)
            : <li className={styles.listItem}>Субъектам МСП Тамбовской области</li>
          }
        </ul>
      </div>
    </div>
  );
}
