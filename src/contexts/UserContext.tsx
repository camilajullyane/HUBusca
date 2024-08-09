import { ChangeEvent, createContext, ReactNode, useState } from "react";
import { UserServices } from "../services/users";
import { User, UserRepositories } from "../models/userModel";
// import { apiResponseData } from "../models/apiResponseModel";

type SendValue = {
  name: string;
  userData: User | undefined;
  getUserData: () => void;
  updateName: (event: ChangeEvent<HTMLInputElement>) => void;
  modalVisibility: boolean;
  changeModalVisibility: (state: boolean) => void;
  getUserRepositories: () => void;
  userRepoData: UserRepositories[] | undefined;
};

export const UserContext = createContext({} as SendValue);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState<User>();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [userRepoData, setUserRepoData] = useState<UserRepositories[]>();

  const updateName = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const getUserData = async () => {
    try {
      const {
        data: {
          name: userName,
          avatar_url,
          login,
          location,
          id,
          followers,
          public_repos,
        },
      } = await UserServices.getUserData(name);

      const data: User = {
        name: userName,
        avatar_url,
        login,
        location,
        id,
        followers,
        public_repos,
      };

      setUserData(data);
      //   console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserRepositories = async () => {
    try {
      const { data } = await UserServices.getUsersRepositories(name);

      const repoData: UserRepositories[] = data.map(
        (repo: UserRepositories) => ({
          name: repo.name,
          language: repo.language,
          created_at: repo.created_at,
          pushed_at: repo.pushed_at,
        })
      );

      console.log(repoData);
      setUserRepoData(repoData);
    } catch (error) {
      console.log(error);
    }
  };

  const changeModalVisibility = (state: boolean) => {
    setModalVisibility(state);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        name,
        getUserData,
        updateName,
        modalVisibility,
        changeModalVisibility,
        getUserRepositories,
        userRepoData,
      }}
    >
      {children};
    </UserContext.Provider>
  );
};
