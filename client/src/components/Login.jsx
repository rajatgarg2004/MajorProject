import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import userAtom from "../atoms/userAtom";
import { useSetRecoilState } from 'recoil';

const Login = () => {
    const setUser = useSetRecoilState(userAtom);

    const handleSuccess = (response) => {
        const token = response.credential; // Google Token
        console.log(token)
        // Send the Google token to the backendt
        fetch('http://localhost:5000/api/auth/google', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
            credentials: 'include', // Allow cookies to be sent
        })
        
            .then(async (res) => {
                const data = (await res.json()).userDetails;
                console.log(data);
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                localStorage.setItem('TimeTable', JSON.stringify(data));
                setUser(data);
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Login failed!');
            });
    };

    const handleError = () => {
        console.log('Login Failed');
        alert('Google login failed, please try again!');
    };

    return (
        <GoogleOAuthProvider clientId="56307062288-e3trhekia4s4kqgja08v49ttrkse5vag.apps.googleusercontent.com">
            <div className="login-container">
                <h2>Login with Google</h2>
                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                />
            </div>
        </GoogleOAuthProvider>
    );
};

export default Login;
