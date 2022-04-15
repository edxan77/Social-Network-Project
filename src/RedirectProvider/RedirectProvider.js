import { useState, createContext } from "react";


export const RedirectContext = createContext()

export default function RedirectProvider({children}){

    const [isAllow, setIsAllow] = useState(false);

    return (
        <RedirectContext.Provider value={{isAllow, setIsAllow}}>
            {children}
        </RedirectContext.Provider>
    )

}