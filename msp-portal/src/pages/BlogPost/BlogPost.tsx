import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from '../../data/blog';
import styles from './BlogPost.module.css';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.id === Number(id));

  if (!post) {
    return (
      <div className={styles.page}>
        <div className={styles.container}>
          <div className={styles.notFound}>
            <h2>Статья не найдена</h2>
            <button className={styles.backBtn} onClick={() => navigate('/blog')}>← В блог</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>{post.title}</h1>

        <div className={styles.meta}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>ДАТА ПУБЛИКАЦИИ:</span>
            <span className={styles.metaValue}>{post.date}</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>АВТОР:</span>
            <span className={styles.metaValue}>{post.author}</span>
          </div>
        </div>

        <div className={styles.body}>
          <div className={styles.bodyLabel}>ТЕКСТ СТАТЬИ</div>
          <p className={styles.content}>{post.content}</p>
        </div>

        <button className={styles.backBtn} onClick={() => navigate('/blog')}>← В блог</button>
      </div>
    </div>
  );
}
