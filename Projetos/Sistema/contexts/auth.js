import { createContext, useState, useEffect } from "react";
import firebase from "../services/firebaseConnection";

export const AuthContent = createContext({});

function AuthProvider({ children }){
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(false);
    const [loading, setLoading] = useState(true);
    // !!user as duas exclamação converte para bool se caso tenha algo true
    useEffect(()=>{
        function loadStorage(){
            const storageUser = localStorage.getItem('SitemaUser');
            if(storageUser){
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage();
    }, [])
    return(
        <AuthContent.Provider value={{signed: !!user, user, loading }}>
            {children}
        </AuthContent.Provider>
    )
}

export default AuthProvider;