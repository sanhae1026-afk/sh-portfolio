import React, { useState, useRef, useEffect } from 'react';
// import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Intro from './pages/Intro/Intro';
import About from './pages/About/About';
import Project from './pages/Project/Project';
import ProjectDetail from './pages/Project/ProjectDetail';
import './styles/main.scss';

// 헤더가 들어가는 공통 레이아웃 컴포넌트 생성
const MainHeader= ({theme, toggleTheme}) => {
  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Outlet />
    </>
  );
};

const MainHome = () => {

  const introRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      // 현재 스크롤 위치가 맨 위 일 때만 작동하도록 제한
      if (window.scrollY < window.innerHeight - 50) {
        if (e.deltaY > 0) {
          // 휠을 아래로 내렸을 때 About 섹션으로 강제 스크롤
          e.preventDefault();
          aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const introElement = introRef.current;
    if (introElement) {
      introElement.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (introElement) {
        introElement.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);

  return (
    <main className="container">
      <div ref={introRef}>
        <Intro />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      {/* PROJECT */}
      <Project />
    </main>
  );
};

function App() {
  // 기본테마 설정하기
  const [theme, setTheme] = useState('light');

  // 테마 상태 변경마다 설정해주기
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // 테마 변경하기
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      
        <Routes>
          {/* 헤더 보여줄 페이지 */}
          <Route element={<MainHeader theme={theme} toggleTheme={toggleTheme} />}>
          <Route path="/" element={<MainHome />} />
        </Route>
          
          {/* 헤더가 나오지 않는 페이지 */}
          <Route path="/project/:id" element={<ProjectDetail theme={theme} toggleTheme={toggleTheme} />} />
        </Routes>

        <Footer />
      
    </Router>
  );
}

export default App;