import { createContext, ReactNode, useState } from "react";
import { UserServices } from "../services/users";

type SendValue = {
    name: any;
    userData: any;
    getUserData: () => void;
    updateName: (event: any) => void;

    
}

export const UserContext = createContext({} as SendValue);

type Props = {
    children: ReactNode;
}

export const UserProvider = ({children} : Props) => {
    const [name, setName] = useState("");
    const [userData, setUserData] = useState({});

    const updateName = (event: any) => setName(event.target.value)
    
    const getUserData = async () => {
        const {data} = await UserServices.getUserData(name);
        console.log(data);
        setUserData(data);
    } 


    return (
        <UserContext.Provider value={{userData, name, getUserData, updateName}}>
            {children};
        </UserContext.Provider>
    )
}