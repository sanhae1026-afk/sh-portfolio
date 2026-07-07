import React, { useState, useEffect } from 'react';
import styles from './Intro.module.scss';

function Intro() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
    
      const fadeThreshold = window.innerHeight * 0.5; 
      
      let newOpacity = 1 - scrollY / fadeThreshold;
    
      if (newOpacity < 0) newOpacity = 0;
      if (newOpacity > 1) newOpacity = 1;

      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className={styles.intro}>
      <ul className={styles.introList} style={{ 'opacity': opacity }}>
        <li className={`${styles.draw} ${styles.isActive} ${styles.isWave}`}>디자이너의 상상을 고스란히 코드로,</li>
        <li className={`${styles.draw} ${styles.isActive} ${styles.isWave}`}>선 한 줄, 여백 한 칸의 디테일로</li>
        <li className={`${styles.draw} ${styles.isActive} ${styles.isWave}`}>사용자 경험을 완성하는 강산해입니다.</li>
      </ul>
      
      <div className={styles.mouse} style={{ opacity: opacity }}>
        <div className={styles.mouseBox}></div>
        <p className={styles.mouseText}>Scroll Down</p>
      </div>
    </section>
  );
}

export default Intro;