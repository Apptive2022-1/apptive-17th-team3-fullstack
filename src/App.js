import axios from 'axios';
import styles from './App.module.css'
import React, { useEffect, useRef, useState } from 'react';
// import { gapi } from 'gapi-script';
import Navbar from './components/navbar/navbar';
import CreateProject from './components/create_porject/createProject';
import Calendar from './components/calendar/calendar';
import Form from './components/form/form';
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App() {
  const [user, setUser] = useState({});
  const [isLogin, setIsLogin] = useState(false); // 로그인 확인
  const [isFormOpen, setIsFormOpen] = useState(false); // form open/close
  const [checkForm, setCheckForm] = useState(false); // false일 때 프로젝트 생성창, true일 때 일정 추가하기
  const [data, setData] = useState([]);
  const [projectName, setProjectName] = useState("");
  const formRef = useRef();

const getData = async () => {
    const res = await axios.get('http://localhost:8080/inform')
    setData(res.data);
  }
    
  useEffect(() => {
    getData();
  }, [])

  const openForm = (name, e) => { // form open시키는 함수
    // if (!isLogin) {
    //   alert("로그인을 해주세요");
    //   return;
    // } // 로그인 확인
    e && setProjectName(name);
    if (e && e.target.innerHTML === '+ 일정 추가하기') { // 일정추가인지, 프로젝트 추가인지 확인
      setCheckForm(true);
    }
    else {
      setCheckForm(false)
    }
    setIsFormOpen(true);
    // console.log(formRef.current); 
    formRef.current && formRef.current.reset();  
  }

  
  const closeForm = (e) => { // form 닫기
    setIsFormOpen(false);
  }
  

  const LoginSuccess = (response) => { // 로그인 성공시
    setUser(response);
    setIsLogin(true);
  }

  const LoginFailure = (err) => { // 로그인 실패시
    console.log(err);
  };

  const logoutButton = () => { // 로그아웃 버튼 클릭시
    setUser({});
    setIsLogin(false);
    setIsFormOpen(false);
  }

  return (
    <div className={styles.container}>
      <Navbar
        user={user}
        logoutButton={logoutButton}
        onSuccess={LoginSuccess}
        onFailure={LoginFailure}
        clientId={clientId} />
      <div className={styles.main}>
        <CreateProject openForm={openForm} data={data} />
      </div>
      {isFormOpen ?
        <Form closeForm={closeForm}
          projectName={checkForm ? projectName : null} // project name을 클릭이벤트로 받아서 
          formRef={formRef}
          //state에 저장한 것을 props로 내려줌
        />
      : <Calendar /> /* isFormOpen이 true이면 Form open */} 
    </div>
  );
}

export default App;




  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId,
  //       scope: 'email'
  //     })
  //   }

  //   gapi.load('client:auth2', start);
  // }, []);