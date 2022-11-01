import React, { useEffect } from 'react'
import GoogleLogin from 'react-google-login';

const GoogleButton = ({onSuccess, onFailure, clientId}) => {
  return (
    <GoogleLogin
      clientId={clientId}
      responseType="token_id"
      buttonText="login in with google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      isSignedIn={true}
      />
  )
}

export default GoogleButton