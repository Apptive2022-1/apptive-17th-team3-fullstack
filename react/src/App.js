
import styles from './App.module.css'
import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import Navbar from './components/navbar/navbar';
import CreateProject from './components/create_porject/createProject';
import RenderInWindow from './components/test/test';
import Calendar from './components/calendar/calendar';
import ModalForm from './components/modal_form/modalForm';
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;
function App() {
  // useEffect(() => {
  //   function start() {
  //     gapi.client.init({
  //       clientId,
  //       scope: 'email'
  //     })
  //   }

  //   gapi.load('client:auth2', start);
  // }, []);


  const [user, setUser] = useState({});
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
      setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const onSuccess = (response) => {
    setUser(response);
  }

  const onFailure = (err) => {
    console.log(err);
  };

  const logoutButton = () => {
    setUser({});
  }

  return (
      //     { Login Demo
      // <h1>Welcome</h1>
      // {Object.keys(user).length === 0 && <GoogleButton onSuccess={onSuccess} onFailure={onFailure} clientId={clientId} />}
      // {Object.keys(user).length !== 0 &&
      //   <div>
      //     <img src={user.profileObj.imageUrl} alt="" />
      //     <h2>{user.profileObj.name}</h2>
      //     <h3>{user.profileObj.email}</h3>
      //     <button onClick={logoutButton}>Logout</button>
      //   </div>} 
      // }
    <div className={styles.container}>
      <Navbar
        user={user}
        logoutButton={logoutButton}
        onSuccess={onSuccess}
        onFailure={onFailure}
        clientId={clientId} />
      <div className={styles.main}>
        <CreateProject
          openModal={openModal} />
        
        {modalIsOpen && <ModalForm
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />}
      </div>
      <Calendar/>
    </div>
  );
}

export default App;