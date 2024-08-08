import { ChangeEvent, createContext, ReactNode, useState } from "react";
import { UserServices } from "../services/users";
import { User } from "../models/userModel";
// import { apiResponseData } from "../models/apiResponseModel";

type SendValue = {
  name: string;
  userData: User | undefined;
  getUserData: () => void;
  updateName: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const UserContext = createContext({} as SendValue);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState<User>();

  const updateName = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const getUserData = async () => {
    try {
      console.log("Name", name);

      const {
        data: { name: userName, avatar_url, login, location },
      } = await UserServices.getUserData(name);

      const data: User = {
        name: userName,
        avatar_url,
        login,
        location,
      };

      setUserData(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UserContext.Provider value={{ userData, name, getUserData, updateName }}>
      {children};
    </UserContext.Provider>
  );
};
