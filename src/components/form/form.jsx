import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import styles from './form.module.css'
import Hour from './hour';
import Minute from './minute';

function Form({projectName, closeForm, formRef}) {
  const [focus, setFocus] = useState(false);
  const [ischeckTime, setIscheckTime] = useState(false);

  // selection custom
    const focusSelection = () => {
        setFocus(true);
    }

    const blurSelection = () => {
        setFocus(false);
  }
  
  // 하루종일 체크시 설정
  const checkAlltime = () => {
    setIscheckTime(!ischeckTime);
  }


  return (
    <div className={styles.container}>
        <form action="http://localhost:8080/form" method="POST" className={styles.project_form} ref = {formRef}>
            <label htmlFor="project_name">프로젝트명</label>
          <input type="text" id='project_name' name='project_name'
            required
          value={projectName !== null ? projectName : undefined}
            disabled = {projectName!==null ? true : false
            }
          />
            <label htmlFor="project_content">상세작업명</label>
          <input type="text" id='project_content' name='project_content'  />
          <div>
            <label htmlFor="timeCheckbox">하루종일</label>
            <input type="checkbox" id="all" name="time[all]" onChange={checkAlltime}/>
          </div>
            <label htmlFor="project_date_on">시작일</label>
            <input type="date" id='project_date_on' name="time[startDate]"  />
            <div className={styles.time}>
          <Hour ischeckTime={ischeckTime}/>
          <Minute ischeckTime={ischeckTime} />
        </div>        
        
            <label htmlFor="project_date_off">종료일</label>            
        <input type="date" id='project_date_off' name="time[endDate]"  />
        
            <div className={styles.time}>
            <select name="time[hour]" id="hour"
              onFocus={focusSelection}
              onBlur={blurSelection}
            onChange={blurSelection}
            className={styles.hour}
              size={focus ? 5 : 1}
              
              disabled={ischeckTime ? true : false}>
                    <option value="">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                    <option value="6">6</option>
                </select>
                <label htmlFor="hour">시</label>     
                <Minute ischeckTime={ischeckTime} />          
            </div>                  
            <label htmlFor="project_memo">메모</label>      
            <textarea name="project_memo" id="project_memo" cols="30" rows="10"></textarea> 
            <button>apply</button>      
            <button onClick={closeForm}>cancel</button>     
        </form>
    </div>
  );
}

export default Form;