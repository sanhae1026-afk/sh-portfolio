import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';
import styles from './Project.module.scss';

function Project() {
	const IMAGE_BASE_URL = "http://mountainsun.co.kr/images/";

	// 마우스의 X, Y 좌표와 현재 호버된 프로젝트의 이미지 경로를 상태로 관리
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
	const [activeImage, setActiveImage] = useState('');
	const [activeId, setActiveId] = useState('');
	const [isHovered, setIsHovered] = useState(false);

	// 마우스가 움직일 때 좌표를 업데이트하는 함수
	const handleMouseMove = (e) => {
		setMousePos({ x: e.clientX, y: e.clientY });
	};

	const handleMouseEnter = (imgUrl, id) => {
		setActiveImage(imgUrl);
		setActiveId(id);
		setIsHovered(true);
	};

	const handleMouseLeave = () => {
		setIsHovered(false);
	};

	return (
		<section id='project' className={styles.project} data-aos="slide-up">
			<h2>Project</h2>
			<div className={styles.projectInner}>
				<ul className={styles.projectList} onMouseMove={handleMouseMove}>
					{projectData.map((item) => (
					<li 
						key={item.id}
						onMouseEnter={() => handleMouseEnter(`${IMAGE_BASE_URL}${item.imgUrl}`, item.id)} 
                        onMouseLeave={handleMouseLeave}
					>
						<Link to={`project/${item.id}`}>
							<strong>{item.title}</strong>
							<span className={styles.projectDate}>{item.date}</span>
						</Link>
					</li>
					))}
				</ul>
				<div className={`${styles.projectPreview} ${isHovered ? styles.active : ''}`}
					style={{ transform: `translate3d(${mousePos.x}px, ${mousePos.y}px, 0)`}}>
					<div className={styles.projectImg}>
						{activeImage && <img src={activeImage} alt='프로젝트 미리보기' />}
					</div>
				</div>
				{/* <Link to={`project/${activeId}`}>
					
				</Link> */}
			</div>
		</section>
	);
}
export default Project;