"use client"
import { UserMetadata } from '@supabase/supabase-js'
import { createContext, FC, ReactNode, useContext } from 'react'

type UserContextWrapperProps = {
    children: ReactNode,
    userData?: UserMetadata
}

const UserContext = createContext<UserMetadata>({})

export const UserContextWrapper: FC<UserContextWrapperProps> = ({ children, userData = {} }) => {

    return (
        <UserContext.Provider value={userData} >
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return useContext(UserContext);
}