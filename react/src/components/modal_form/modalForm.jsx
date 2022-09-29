import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import styles from './modal_form.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '30%',   
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
// Modal.setAppElement('#yourAppElement');

function ModalForm({closeModal, modalIsOpen, projectName}) {
//   let subtitle;
  const [focus, setFocus] = useState(false);
  const [ischeckTime, setIscheckTime] = useState(false);

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = '#f00';
//   }
    
    // function submitForm(e) {
    //     e.preventDefault();
    //     setIsOpen(false);
    // }

    const focusSelection = () => {
        setFocus(true);
    }

    const blurSelection = () => {
        setFocus(false);
  }
  
  const checkAlltime = () => {
    setIscheckTime(!ischeckTime);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        ariaHideApp={false}
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <form className={styles.project_form}>
            <label htmlFor="project_name">프로젝트명</label>
          <input type="text" id='project_name' name='project_name'
            required
            value={projectName !== null ? projectName : undefined}
            disabled = {projectName!==null ? true : false}
          />
            <label htmlFor="project_content">상세작업명</label>
          <input type="text" id='project_content' name='project_content' required />
          <div>
            <label htmlFor="timeCheckbox">하루종일</label>
            <input type="checkbox" onChange={checkAlltime}/>
          </div>
            <label htmlFor="project_date_on">시작일</label>
            <input type="date" id='project_date_on' required />
            <div className={styles.time}>
                <select name="hour" id="hour" required disabled={ischeckTime ? true : false}>
                    <option value="">-</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <label htmlFor="hour">시</label>     
                <select name="minute" id="minute" required disabled={ischeckTime ? true : false}>
                    <option value="">-</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                    <option value="55">55</option>
                </select>
                <label htmlFor="minute">분</label>           
            </div>           
            <label htmlFor="project_date_off">종료일</label>            
            <input type="date" id='project_date_off' required/>
            <div className={styles.time}>
            <select name="hour" id="hour"
              onFocus={focusSelection}
              onBlur={blurSelection}
              onChange={blurSelection}
              size={focus ? 5 : 1}
              required
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
            <select name="minute" id="minute"
              required
              disabled={ischeckTime ? true : false}
            >
                    <option value="">-</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">30</option>
                    <option value="30">35</option>
                </select>
                <label htmlFor="minute">분</label>           
            </div>                  
            <label htmlFor="project_memo">메모</label>      
            <textarea name="project_memo" id="project_memo" cols="30" rows="10"></textarea> 
            <button>apply</button>      
            <button onClick={closeModal}>cancel</button>     
        </form>
      </Modal>
    </div>
  );
}

export default ModalForm;