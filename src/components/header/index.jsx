import React, { useState, useContext } from 'react';
import { FiSearch } from 'react-icons/fi';
import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';
import client from '../../services/client'
import { context } from '../../context';

const Header = () => {
    const ctx = useContext(context)
    const [searchedValue, setSearchedValue] = useState('')
    const [isLoading, setIsloading] = useState(false)

    const getUserData = async (event) => {
        event.preventDefault()
        if (!searchedValue) {
            return
        }
        setIsloading(true)

        try {
            const response = await client.get(`/${searchedValue}`)
            const repos = await client.get(`/${searchedValue}/repos`)
            const starred = await client.get(`/${searchedValue}/starred`)
            const followers = await client.get(`/${searchedValue}/followers`)
            const following = await client.get(`/${searchedValue}/following`)
            ctx.setUserData(response.data)
            ctx.setUserRepos(repos.data)
            ctx.setUserStarred(starred.data)
            ctx.setUserFollowers(followers.data)
            ctx.setUserFollowing(following.data)

            setIsloading(false)
        } catch (err) {
            console.error("Usuário não encontrado!" + err)
            setIsloading(false)
            setSearchedValue(null)

        }
    }


    return (
        <HeaderSection>
            <HeaderTitle>Perfil Github</HeaderTitle>
            <HeaderInputContainer>
                <form onSubmit={getUserData}>
                    <HeaderInput
                        value={searchedValue}
                        placeholder="Digite um usuário do github"
                        onChange={e => setSearchedValue(e.target.value)} />
                </form>
                <HeaderSearchButton onClick={getUserData}>
                    {isLoading ? (<span>&#8635;</span>
                    ) : (
                        <FiSearch size={15} />
                    )}
                </HeaderSearchButton>
            </HeaderInputContainer>
        </HeaderSection>
    )

};

export default Header;