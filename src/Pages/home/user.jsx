import React from "react";
import { auth,signOut } from "../../FirebaseConfig/firebase";
import { useNavigate } from "react-router-dom";
import '../css/user.css';


export default function UserProfile() {
    const navigator = useNavigate();
    const logOut = () => {
        signOut(auth)
          .then(() => {
            console.log('Sign out successful');
            navigator('/');
          })
          .catch((error) => {
            console.error('Error signing out:', error);
          });
      };
    return (
        <div className="userProfile">
            <h1>user</h1>
            <button onClick={logOut}>Logout</button>
        </div>
    )
}