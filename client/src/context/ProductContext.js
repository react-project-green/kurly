import { createContext, useState } from "react";

export const PidContext = createContext();

export const PidProvider = ({children}) => {
    const [pidArr, setPidArr] = useState([]);
    const [heartArr, setHeartArr] = useState([]);
    return (
        <PidContext.Provider value={{pidArr, setPidArr, heartArr, setHeartArr}}>
            {children}
        </PidContext.Provider>
    );
}