import React from 'react';
import styles from './projectInfo.module.css'

const ProjectInfo = ({openForm, data}) => {
    return (
        <div className={styles.info}>
            <p className={styles.title}>{data && data.name}</p>
            <button className={styles.btn} onClick={(e) => openForm(data.name, e)}>+ 일정 추가하기</button>
            <div className={styles.completion}>
                <div className={styles.completionText}>
                    <span>Completion</span>
                    <span>{data && data.completion} %</span>
                </div>
                <div className={styles.completionBar}>
                    <div className={styles.completionValue} style={{width: `${data.completion}%`}}></div>
                </div>
            </div>            
        </div>
    )
}

export default ProjectInfo;