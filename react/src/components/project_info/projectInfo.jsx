import React from 'react';
import styles from './projectInfo.module.css'

const ProjectInfo = ({openModal}) => {

    return (
        <div className={styles.info}>
            <p className={styles.title}>dummy</p>
            <button className={styles.btn} onClick={openModal}>+ 일정 추가하기</button>
            <div className={styles.completion}>
                <div className={styles.completionText}>
                    <span>Completion</span>
                    <span>30%</span>
                </div>
                <div className={styles.completionBar}>
                    <div className={styles.completionValue}></div>
                </div>
            </div>            
        </div>
    )
}

export default ProjectInfo;