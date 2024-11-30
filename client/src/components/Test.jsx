import React, { useEffect } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const Test = () => {
    useEffect(()=>{
        fetch('http://localhost:5000/api/auth/details',{
            credentials : 'include',
        });
    },[]);
    return (
        <div>
            <h1>Hello</h1>
        </div>
    );
};

export default Test;
