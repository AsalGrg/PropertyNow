import { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "../services/getUserData";



const UserContext= createContext(null)


export const UserContentProvider = ({children}) => {

    const [user, setuser] = useState(null)
    const [error, seterror] = useState(null)
    useEffect(() => {
        async function userData() {
            try{
                const response= await getUserData();
                setuser(response.data.user)
            }catch(err){
                setuser(null)
                seterror(err)
            }
        }
        userData();
    }, [])
    
  return (
    <UserContext.Provider value={{user, setuser, error}}>
        {children}
    </UserContext.Provider>
  )
}

export function useUserContext(){
    const data = useContext(UserContext);
    return data;
}
