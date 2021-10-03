// import React, { useState, useContext, useEffect } from 'react';
// import { FiSearch } from 'react-icons/fi';
// import { Link } from 'react-router-dom'
// import {
//     HeaderSection,
//     HeaderTitle,
//     HeaderInputContainer,
//     HeaderInput,
//     HeaderSearchButton
// } from './styles';
// import client from '../../services/client'
// import { context } from '../../context';

// const Header = (props) => {
//     const ctx = useContext(context)
//     const [searchedValue, setSearchedValue] = useState('')
//     const [isLoading, setIsloading] = useState(false)


//     useEffect(() => {

//         (async function getUserData() {

//             if (!searchedValue) {
//                 return
//             }
//             setIsloading(true)

//             try {
//                 const response = await client.get(`/${props.username}`)
//                 const repos = await client.get(`/${props.username}/repos`)
//                 const starred = await client.get(`/${props.username}/starred`)
//                 const followers = await client.get(`/${props.username}/followers`)
//                 const following = await client.get(`/${props.username}/following`)
//                 ctx.setUserData(response.data)
//                 ctx.setUserRepos(repos.data)
//                 ctx.setUserStarred(starred.data)
//                 ctx.setUserFollowers(followers.data)
//                 ctx.setUserFollowing(following.data)

//                 setIsloading(false)
//             } catch (err) {
//                 alert("[ERRO 404] Usuário não encontrado. Digite novamente!")
//                 setIsloading(false)
//                 setSearchedValue(null)
//             }
//         })()

//     }, [props.username])



//     return (
//         <HeaderSection>
//             <HeaderTitle>Perfil Github</HeaderTitle>
//             <HeaderInputContainer>
//                 <form onSubmit={getUserData}>
//                     <HeaderInput
//                         value={searchedValue}
//                         placeholder="Digite um usuário do github"
//                         onChange={e => setSearchedValue(e.target.value)} />
//                 </form>
//                 <Link to={`/?username=${searchedValue}`}>
//                     <HeaderSearchButton onClick={getUserData}>
//                         {isLoading ? (<span>&#8635;</span>
//                         ) : (
//                             <FiSearch size={15} />
//                         )}
//                     </HeaderSearchButton>
//                 </Link>
//             </HeaderInputContainer>
//         </HeaderSection>
//     )

// };

// export default Header;