import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Search from './pages/Search/Search';
import Regional from './pages/Regional/Regional';
import Federal from './pages/Federal/Federal';
import MeasureDetail from './pages/MeasureDetail/MeasureDetail';
import Blog from './pages/Blog/Blog';
import BlogPost from './pages/BlogPost/BlogPost';
import styles from './App.module.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className={styles.layout}>
        <Header />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/regional" element={<Regional />} />
            <Route path="/federal" element={<Federal />} />
            <Route path="/measures/:id" element={<MeasureDetail />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div className={styles.notFound}>
      <span className={styles.notFoundCode}>404</span>
      <h2>Страница не найдена</h2>
      <a href="/" className={styles.notFoundLink}>← На главную</a>
    </div>
  );
}
