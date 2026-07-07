import React from 'react';
import styles from './ThemeToggle.module.scss';

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button 
      className={`${styles.themeBtn} ${theme === 'dark' ? styles.dark : ''}`} 
      onClick={toggleTheme}
      type="button"
      aria-label={theme === 'light' ? '다크모드로 전환' : '라이트모드로 전환'}
      title={theme === 'light' ? '다크모드로 전환' : '라이트모드로 전환'}
    >
      {/* 💡 배경이 움직이는 토글 스위치 형태 */}
      <span className={styles.ball}></span>
      <span className={styles.icon}>{theme === 'light' ? '☀️' : '🌙'}</span>
    </button>
  );
}

export default ThemeToggle;