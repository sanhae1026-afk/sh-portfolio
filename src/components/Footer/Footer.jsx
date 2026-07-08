import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  // 오늘 날짜 구하기
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  const formattedDate = `${year}.${month}.${day}`;
  return (
    <footer className={styles.footer}>
        <p>Copyright 2026. Kang SanHae all rights reserved.</p>
        <p>Last Updated : {formattedDate}</p>
    </footer>
  );
}

export default Footer;
