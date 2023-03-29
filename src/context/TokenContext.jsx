import {  useEffect,createContext,useState} from "react";

export const TokenContext = createContext();


export const TokenDataContext = ({children}) =>{

    const [token, setToken]=useState(()=>{
        try{
            const TokenLocalStorage = localStorage.getItem('TokenContenido')
            return TokenLocalStorage ? JSON.parse(TokenLocalStorage) : []
        }
        catch (error) {
            return[]
        }
    });

    useEffect(() => {
        localStorage.setItem('TokenContenido', JSON.stringify(token))
    }, [token])


    console.log(token)


    return(
        <TokenContext.Provider value={{token,setToken}}>
            {children}
        </TokenContext.Provider>

    );
}
