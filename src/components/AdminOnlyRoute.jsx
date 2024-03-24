import React from 'react';


const AdminOnlyRoute = ({children}) => {

const userEmail = JSON.parse(localStorage.getItem("user"))?.email
     //  console.log(userEmail)
    if(userEmail === process.env.REACT_APP_ADMINEMAIL){
       return children
    }
      
    return null

}

export default AdminOnlyRoute;
