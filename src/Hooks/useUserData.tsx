import {useContext} from "react";
import {UserDataContext} from "../Context/UserDataContext";

export function useUserData() {
    return useContext(UserDataContext)
}