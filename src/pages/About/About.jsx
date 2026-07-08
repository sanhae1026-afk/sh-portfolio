import React from 'react';
import styles from './About.module.scss';

function About() {
  return (
    <section id='about' className={styles.about}>
		<h2>About</h2>
		<div className={styles.aboutInner}>
			{/* 상세정보 */}
			<article className={styles.aboutSection} data-aos="slide-up">
				<div className={styles.aboutFlex}>
					<div className={styles.aboutBox}>
						<h3>상세정보</h3>
						<dl className={styles.aboutProfile}>
							<dt>이름</dt>
							<dd>강산해</dd>
							<dt>생년월일</dt>
							<dd>1995.06.17</dd>
							<dt>핸드폰</dt>
							<dd>
								<a href="tel:01076108812">010-7610-8812</a>
							</dd>
							<dt>거주지역</dt>
							<dd>서울특별시 강서구</dd>
						</dl>
					</div>
					<div className={styles.aboutBox}>
						<h3>학력</h3>
						<ol className={styles.infoList}>
							<li>
								<strong className={styles.infoTitle}>한국방송통신대학교 - 컴퓨터과학과</strong>
								<span className={styles.date}>2022.03 ~  2023.09 휴학</span>
							</li>
							<li>
								<strong className={styles.infoTitle}>평촌공업고등학교 - 정보통신과</strong>
								<span className={styles.date}>2014.02 졸업</span>
							</li>
						</ol>
					</div>
				</div>
			</article>
			{/* 교육활동 */}
			<article className={styles.aboutSection} data-aos="slide-up">
				<h3>교육활동</h3>
				<ol className={styles.infoList}>
					<li>
						<strong className={styles.infoTitle}>(KDT)AWS와 Docker & Kubernetes를 활용한 Java Full-Stack</strong>
						<span className={styles.date}>2025. 03 ~ 2025.09</span>
						<p>Java, Oracle, JDBC 기반으로 객체지향 프로그래밍과 데이터베이스 연동, 예외 처리 등 핵심 기술을 학습하였습니다.</p>
						<p>CSS3, JavaScript, Servlet/JSP와 함께 Spring Boot, MyBatis, JPA를 활용하여 웹 애플리케이션 개발 및 보안·테스트를 구현했습니다. 또한 AWS, Linux, Docker, MongoDB 등 클라우드와 최신 인프라 환경을 활용한 배포와 운영 경험을 쌓았습니다.</p>
					</li>
					<li>
						<strong className={styles.infoTitle}>웹프로그래머 향상과정(React.js)</strong>
						<span className={styles.date}>2018.07 ~ 2018.08</span>
						<p>웹퍼블리셔로 성장하고 있을 때 당시 회사 대표님 추천으로 국비지원으로 수강하게 되었습니다.</p>
						<p>JSX문법과 Component에 대해 배웠고 아쉽게도 회사일이 바빠 중도포기를 하였습니다.</p>
					</li>
					<li>
						<strong className={styles.infoTitle}>UI/UX 엔지니어링 프론트엔드과정</strong>
						<span className={styles.date}>2017.05 ~ 2017.12</span>
						<p>HTML5 웹표준 과정을 수강하고 본격적으로 웹을 배우고 싶어 국비지원으로 수강하게 되었습니다.</p>
						<p>HTML5, CSS3, JavaScript, jQuery, PHP를 배웠습니다.</p>
					</li>
				</ol>
			</article>

			{/* 경력사항 */}
			<article className={styles.aboutSection} data-aos="slide-up">
				<h3>경력사항</h3>
				<ol className={styles.infoList}>
					<li>
						<strong className={styles.infoTitle}>(주)바른컴퍼니</strong>
						<span className={styles.date}>2021.03 ~ 2025.03</span>
						<p>신규 프로젝트 및 운영 퍼블리셔를 담당하였습니다.</p>
					</li>
					<li>
						<strong className={styles.infoTitle}>(주)영풍문고</strong>
						<span className={styles.date}>2019.09 ~ 2021.01</span>
						<p>프리랜서로 함께 일한 인연으로 영풍문고의 유일한 퍼블리셔를 담당하였습니다.</p>
					</li>
					<li>
						<strong className={styles.infoTitle}>(주)영풍문고</strong>
						<span className={styles.date}>2019.05 ~ 2019.08</span>
						<p>프리랜서로 SI구축 퍼블리싱을 담당하였습니다.</p>
						<p>메인 ~ 관리자까지 퍼블리싱 업무 참여도 100%로 혼자 담당하였습니다.</p>
					</li>
					<li>
						<strong className={styles.infoTitle}>(주)로시스</strong>
						<span className={styles.date}>2018.01 ~ 2019.05</span>
						<p>IT업계 첫 회사이자 웹 에이전시로 다양한 접근을 통한 퍼블리싱을 하였습니다.</p>
					</li>
				</ol>
			</article>

			{/* 전문기술 */}
			<article className={styles.aboutSection} data-aos="slide-up">
				<h3>전문 기술</h3>
				<p className={styles.skillDesc}>퍼블리싱 기술과 사용하는 도구입니다.</p>
				<ul className={styles.skillList}>
					<li><strong>핵심 역량 :</strong> 웹 표준, 웹 접근성, 크로스브라우징, 반응형 웹, SEO</li>
					<li><strong>언어 & 라이브러리 :</strong> HTML5, React, SCC3, SCSS, JavaScript, jQuery</li>
					<li><strong>개발 도구 :</strong> Visual Studio Code, Edit Plus, Eclipse, IntelliJ</li>
					<li><strong>디자인 도구 :</strong> Adobe PhotoShop, Zeplin, Adobe Xd</li>
					<li><strong>협업 도구 :</strong> Git, SVN, Notion</li>
				</ul>
			</article>

		</div>
    </section>
  );
}

export default About;