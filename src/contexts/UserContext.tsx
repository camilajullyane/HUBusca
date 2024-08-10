import {
  ChangeEvent,
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { UserServices } from "../services/users";
import { User, UserRepositories } from "../models/userModel";

type SendValue = {
  name: string;
  userData: User | undefined;
  getUserData: (searchName: string) => void;
  getUserRepositories: (userName: string) => void;
  updateName: (event: ChangeEvent<HTMLInputElement>) => void;
  modalVisibility: boolean;
  changeModalVisibility: (state: boolean) => void;
  userRepoData: UserRepositories[] | undefined;
  searchedUsersList: User[];
  setName: (name: string) => void;
};

export const UserContext = createContext({} as SendValue);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [name, setName] = useState("");
  // const [repoName, setRepoName] = useState("");

  const [searchedUsersList, setSearchedUsersList] = useState<User[]>([]);
  const [userData, setUserData] = useState<User>();
  const [modalVisibility, setModalVisibility] = useState(false);
  const [userRepoData, setUserRepoData] = useState<UserRepositories[]>();

  const updateName = (event: ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);

  const getUserData = async (searchName: string) => {
    try {
      const response = await UserServices.getUserData(searchName);
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
      } = response;

      const data: User = {
        name: userName,
        avatar_url,
        login,
        location,
        id,
        followers,
        public_repos,
      };

      const userExists = searchedUsersList.some((user) => user.id === data.id);

      const newValue = userExists
        ? searchedUsersList
        : [...searchedUsersList, data];

      setUserData(data);
      setSearchedUsersList(newValue);
      // console.log(searchedUsersList);
    } catch (error) {
      console.log(error);
    }
  };

  const getUserRepositories = async (userName: string) => {
    try {
      const { data } = await UserServices.getUsersRepositories(userName);
      // console.log("dentro da userrepo:", data);
      // console.log("dentro da userrepo:", userName);

      const repoData: UserRepositories[] = data.map(
        (repo: UserRepositories) => ({
          name: repo.name,
          language: repo.language,
          created_at: repo.created_at,
          pushed_at: repo.pushed_at,
          html_url: repo.html_url,
          description: repo.description,
        })
      );

      // console.log(repoData);
      setUserRepoData(repoData);
    } catch (error) {
      console.log(error);
    }
  };

  // const setUserCard = (user: User) => setUserData(user);

  const changeModalVisibility = (state: boolean) => setModalVisibility(state);

  useEffect(() => {
    console.log("name 2:", name);

    if (name) {
      getUserRepositories(name);
      getUserData(name);
    }
  }, [name]);

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
        searchedUsersList,
        setName,
      }}
    >
      {children};
    </UserContext.Provider>
  );
};
