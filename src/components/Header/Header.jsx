import React, { useState, useEffect } from 'react';
import ThemeToggle from '../ThemeToggle/ThemeToggle';
import styles from './Header.module.scss';

function Header({ theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollToSection = (targetId) => {

      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
          targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      }
  };
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY > 50) { 
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 사라질 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    // isScrolled 상태에 따라 styles.isVisible 클래스 추가하기
    <header className={`${styles.header} ${isScrolled ? styles.isVisible : ''}`}>
      <div className={styles.headerInner}>
        <h1 className={styles.title}>SanHae`s PortFolio</h1>
        <nav className={styles.nav}>
            <ul className={styles.navUl}>
                <li>
                    <button type="button" onClick={() => scrollToSection('about')}>ABOUT</button>
                </li>
                <li>
                    <button type="button" onClick={() => scrollToSection('project')}>PROJECT</button>
                </li>
                <li>
                  <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </li>
            </ul>
        </nav>
      </div>      
    </header>
  );
}

export default Header;