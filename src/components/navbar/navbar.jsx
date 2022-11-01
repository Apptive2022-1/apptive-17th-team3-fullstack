import React, { useEffect } from 'react';
import { GoogleLogout } from 'react-google-login';
import GoogleButton from '../googleLogin/googleLogin';
// import { useGoogleLogin } from 'react-google-login'
import styles from './navbar.module.css';
const Navbar = ({user, logoutButton, onSuccess, onFailure, clientId}) => {
    // const { signIn, loaded } = useGoogleLogin({})

    return (
        <nav className={styles.container}>
            <h1 className={styles.logo}>LOGO</h1>
            <ul className={styles.menubar}>
                <li className={styles.menu}>대시보드</li>
                <li className={styles.menu}>프로젝트</li>
                <li className={styles.menu}>설정</li>
                <li className={styles.menu}>도움말</li>
            </ul>
            
            <div className={styles.loginBtn}>
                {Object.keys(user).length === 0 && <GoogleButton 
                    onSuccess={onSuccess} onFailure={onFailure} clientId={clientId} isSignedIn={true}/>}
            </div>
            
                {Object.keys(user).length !== 0 &&
                <div className={styles.userContainer}>
                    <GoogleLogout
                        clientId={clientId}
                        buttonText="Logout"
                        onLogoutSuccess={logoutButton}
                    ></GoogleLogout>
                    <div className={styles.userInfo}>
                        <div className={styles.userText}>
                            <h2 className={styles.name}>{user.profileObj.name}</h2>
                            <h3 className={styles.email}>{user.profileObj.email}</h3>
                        </div>  
                        <img className={styles.userImg} src={user.profileObj.imageUrl} alt="" />
                    </div>

                    {/* <button onClick={logoutButton}>Logout</button> */}

                </div>}
            
        </nav>
    )
};

export default Navbar;