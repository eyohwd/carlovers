
import { useSelector } from 'react-redux';

const ShowOnLogin = ({children}) => {
  
    const currentUser = useSelector((state)=> state.user.currentUser)
     
    if(currentUser){
        return children
    }
    return null
}


export const ShowOnLogout = ({children}) => {
  
    const currentUser = useSelector((state)=> state.user.currentUser)
     
    if(!currentUser){
        return children
    }
    return null
}

export default ShowOnLogin;