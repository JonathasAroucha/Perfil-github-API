import React, { useState, createContext } from 'react';

export const context = createContext()

export const ContextProvider = (props) => {
    const [userData, setUserData] = useState({})
    const [userRepos, setUserRepos] = useState([])
    const [userStarred, setUserStarred] = useState([])
    const [userFollowers, setUserFollowers] = useState([])
    const [userFollowing, setUserFollowing] = useState([])
    const [userDetails, setUserDetails] = useState([])

    return (
        <context.Provider value={{
            userData,
            userRepos,
            userStarred,
            userFollowers,
            userFollowing,
            userDetails,

            setUserData,
            setUserRepos,
            setUserStarred,
            setUserFollowers,
            setUserFollowing,
            setUserDetails,
        }}>
            {props.children}
        </context.Provider>
    )
}