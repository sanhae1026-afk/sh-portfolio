import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projectData } from '../../data/projectData';
import styles from './ProjectDetail.module.scss';

function ProjectDetail() {
  const IMAGE_BASE_URL = "/images/project/detail/";

  // 주소창에서 :id 자리에 들어온 값을 가져온다.
  const { id } = useParams();

  // 데이터 파일에서 주소창 id와 일치하는 프로젝트 데이터를 찾는다.
  const project = projectData.find((item) => item.id === id);

  // 혹시 주소창에 이상한 ID를 직접 타이핑해서 들어왔을 때 예외 처리
  if (!project) {
    return <div className={styles.error}>존재하지 않는 프로젝트입니다.</div>;
  }

  return (
    <>
      <header className={styles.projectDetailHeader}>
        <div className={styles.projectDetailHeaderInner}>
          <Link to="/" className={styles.backBtn}>뒤로가기</Link>
          <h1 className={styles.title}>{project.title}</h1>
        </div>
      </header>
      <main>
        <section className={styles.projectDetail}>
          <ul className={styles.projectDetailList}>
            <li>
              <strong>CLIENT</strong>
              <p>{project.client}</p>
            </li>
            <li>
              <strong>DATE</strong>
              <p>{project.workDate}</p>
            </li>
            <li>
              <strong>TYPE</strong>
              <p>{project.tags}</p>
            </li>
          </ul>
          <a href={project.linkUrl} target='_blank' rel="noopener noreferrer" className={styles.projectDetailBtn}>SITE VIEW</a>

          <div className={styles.projectDetailImg}>
            {project.imgDetail ? (
              <img src={`${IMAGE_BASE_URL}${project.imgDetail}`} alt={`${project.title} 상세 이미지`} />
            ) : (
              <div className={styles.projectDetailNotImg}>
                <p>상세 이미지를 준비 중입니다!!</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default ProjectDetail;