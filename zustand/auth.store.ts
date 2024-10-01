import { create } from "zustand";

type Auth ={
    isAuthInit:boolean,
    isLoggedIn:boolean,
    setIsAuthInit:() => void,
    setIsLoggedIn:(isLoggedIn:boolean) => void,
}

export const useAuth = create<Auth>((set) => ({
    isAuthInit:false,
    isLoggedIn:false,
    setIsAuthInit:() => set({isAuthInit: true}),
    setIsLoggedIn:(isLoggedIn:boolean) => set({isLoggedIn})
}))