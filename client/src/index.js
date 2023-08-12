import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import UserProvider from "./UserContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId="492058514974-i2830r911t8ms31ci0fg3cfdsqe6jj33.apps.googleusercontent.com">    <UserProvider>
    <App />
    </UserProvider>
    </GoogleOAuthProvider>

);

