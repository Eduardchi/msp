import styles from './About.module.css';

const INFO_CARDS = [
  { icon: '🏛', title: 'Государственный реестр', text: 'Официальная база данных мер поддержки, утверждённых органами власти Тамбовской области' },
  { icon: '🔄', title: 'Актуальные данные', text: 'Информация регулярно обновляется в соответствии с действующим законодательством' },
  { icon: '🔍', title: 'Удобный поиск', text: 'Быстрый поиск и фильтрация по типу поддержки, министерству и ключевым словам' },
  { icon: '📞', title: 'Контакты организаций', text: 'Для каждой меры указаны контакты ответственного органа для получения консультации' },
];

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.hero}>
          <span className={styles.heroIcon}>🏢</span>
          <h1 className={styles.heroTitle}>О портале</h1>
          <p className={styles.heroText}>
            Портал мер поддержки субъектов малого и среднего предпринимательства
            Тамбовской области — официальный ресурс для поиска государственных программ
            поддержки бизнеса.
          </p>
        </div>

        <div className={styles.cards}>
          {INFO_CARDS.map((c, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.cardIcon}>{c.icon}</span>
              <div className={styles.cardTitle}>{c.title}</div>
              <p className={styles.cardText}>{c.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>📋 О данных</h2>
          <p className={styles.sectionText}>
            База данных формируется на основе официальной таблицы «Меры поддержки субъектов
            малого и среднего предпринимательства Тамбовской области», предоставленной
            исполнительными органами государственной власти региона.
          </p>
          <p className={styles.sectionText}>
            Каждая запись содержит: наименование меры, реквизиты НПА, требования к получателям,
            объём и периодичность поддержки, а также контактные данные ответственного органа.
          </p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>🏗 Источники данных</h2>
          <div className={styles.sourceList}>
            {[
              'Министерство образования и науки Тамбовской области',
              'Министерство сельского хозяйства Тамбовской области',
              'Министерство экономического развития Тамбовской области',
              'Министерство имущественных отношений и государственного заказа Тамбовской области',
              'Другие исполнительные органы государственной власти Тамбовской области',
            ].map((s, i) => (
              <div key={i} className={styles.sourceItem}>
                <span className={styles.sourceDot} />
                {s}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.sectionTitle}>⚖️ Правовая основа</h2>
          <p className={styles.sectionText}>
            Меры поддержки предоставляются в соответствии с Федеральным законом от 24.07.2007
            № 209-ФЗ «О развитии малого и среднего предпринимательства в Российской Федерации»
            и нормативными правовыми актами Тамбовской области.
          </p>
        </div>
      </div>
    </div>
  );
}