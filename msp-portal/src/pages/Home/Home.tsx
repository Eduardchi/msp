import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Measure } from '../../types';
import measuresRaw from '../../data/measures.json';
import styles from './Home.module.css';

const measures: Measure[] = measuresRaw as Measure[];
const UPDATES_PER_PAGE = 4;
const updates = measures.slice(0, 8);

const AUDIENCE = [
  {
    title: 'ПОТЕНЦИАЛЬНЫЕ ПРЕДПРИНИМАТЕЛИ',
    desc: 'Граждане и организации, планирующие открыть своё дело и нуждающиеся в стартовой поддержке государства.',
    link: '/search',
  },
  {
    title: 'НАЧИНАЮЩИЕ ПРЕДПРИНИМАТЕЛИ',
    desc: 'Субъекты МСП, зарегистрированные не более 3 лет назад и осуществляющие деятельность в регионе.',
    link: '/search',
  },
  {
    title: 'ДЕЙСТВУЮЩИЕ ПРЕДПРИНИМАТЕЛИ',
    desc: 'Малые и средние предприятия, стремящиеся к росту, расширению производства и привлечению инвестиций.',
    link: '/search',
  },
];

const FAQ_ITEMS = [
  {
    q: 'Кто может получить поддержку?',
    a: 'Субъекты МСП, зарегистрированные и осуществляющие деятельность на территории Тамбовской области, сведения о которых содержатся в едином реестре субъектов МСП, за исключением лиц, указанных в части 3 статьи 14 Федерального закона № 209-ФЗ. Для бизнеса со статусом регионального производителя действуют дополнительные преференции.',
  },
  {
    q: 'В чём разница между федеральными и региональными мерами?',
    a: 'Федеральные меры финансируются из федерального бюджета и регулируются постановлениями Правительства Российской Федерации. Региональные меры финансируются из бюджета Тамбовской области и устанавливаются нормативными правовыми актами региона.',
  },
  {
    q: 'Как подать заявку на получение меры поддержки?',
    a: 'Откройте карточку нужной меры поддержки, изучите требования к получателям и контактные данные. Обратитесь в уполномоченное министерство или организацию, указанную в разделе «Где получить консультацию», для уточнения актуального порядка подачи заявки.',
  },
];

function PersonIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  );
}

export default function Home() {
  const [updatePage, setUpdatePage] = useState(0);
  const [faqIdx, setFaqIdx] = useState(0);
  const navigate = useNavigate();

  const totalUpdatePages = Math.ceil(updates.length / UPDATES_PER_PAGE);
  const visibleUpdates = updates.slice(updatePage * UPDATES_PER_PAGE, (updatePage + 1) * UPDATES_PER_PAGE);

  const faq = FAQ_ITEMS[faqIdx];

  return (
    <div className={styles.page}>

      {/* ── HERO ──────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroPhoto}>
            <img src="/images/businessman.png" alt="Предприниматель" />
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              ПОДБЕРИТЕ ФЕДЕРАЛЬНЫЕ И/ИЛИ РЕГИОНАЛЬНЫЕ ИНСТРУМЕНТЫ
              ДЛЯ РАЗВИТИЯ СВОЕГО ДЕЛА. ГРАНТЫ, ЛЬГОТНЫЕ КРЕДИТЫ,
              ИМУЩЕСТВЕННАЯ ПОДДЕРЖКА, ОБУЧЕНИЕ — ВСЁ В ОДНОМ МЕСТЕ.
            </h1>
          </div>
        </div>
      </section>

      {/* ── WHITE SECTIONS ────────────────────────────────── */}
      <div className={styles.whiteSections}>

        {/* Кому это полезно */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Кому это полезно?</h2>
          <div className={styles.audienceGrid}>
            {AUDIENCE.map((a, i) => (
              <div key={i} className={styles.audienceCard}>
                <div className={styles.audienceIcon}><PersonIcon /></div>
                <div className={styles.audienceCardTitle}>{a.title}</div>
                <p className={styles.audienceCardDesc}>{a.desc}</p>
                <button className={styles.audienceBtn} onClick={() => navigate(a.link)}>ПОДРОБНЕЕ</button>
              </div>
            ))}
          </div>
        </section>

        {/* Обновление мер поддержки */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Обновление мер поддержки</h2>
          <div className={styles.carouselWrap}>
            <button
              className={styles.arrowBtn}
              onClick={() => setUpdatePage(p => Math.max(0, p - 1))}
              disabled={updatePage === 0}
            >
              &#8249;
            </button>
            <div className={styles.carouselGrid}>
              {visibleUpdates.map(m => (
                <div
                  key={m.id}
                  className={styles.updateCard}
                  onClick={() => navigate(`/measures/${m.id}`)}
                >
                  <div className={styles.updateBadge}>
                    {m.level === 'federal' ? 'ФЕДЕРАЛЬНАЯ МЕРА' : 'РЕГИОНАЛЬНАЯ МЕРА'}
                  </div>
                  <div className={styles.updateName}>{m.name}</div>
                  <div className={styles.updateAudience}>
                    <div className={styles.updateAudienceLabel}>КОМУ ПОДХОДИТ:</div>
                    <div className={styles.updateAudienceVal}>· {(m.requirements || '').slice(0, 50)}…</div>
                  </div>
                </div>
              ))}
            </div>
            <button
              className={styles.arrowBtn}
              onClick={() => setUpdatePage(p => Math.min(totalUpdatePages - 1, p + 1))}
              disabled={updatePage >= totalUpdatePages - 1}
            >
              &#8250;
            </button>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Часто задаваемые вопросы</h2>
          <div className={styles.faqWrap}>
            <button
              className={styles.arrowBtn}
              onClick={() => setFaqIdx(i => Math.max(0, i - 1))}
              disabled={faqIdx === 0}
            >
              &#8249;
            </button>
            <div className={styles.faqCard}>
              <div className={styles.faqQ}>
                <span className={styles.faqNum}>Q.</span>
                {faq.q}
              </div>
              <p className={styles.faqA}>{faq.a}</p>
            </div>
            <button
              className={styles.arrowBtn}
              onClick={() => setFaqIdx(i => Math.min(FAQ_ITEMS.length - 1, i + 1))}
              disabled={faqIdx >= FAQ_ITEMS.length - 1}
            >
              &#8250;
            </button>
          </div>
        </section>

      </div>
    </div>
  );
}
