import React, { useContext } from 'react'
import Container from '../components/container'
import FollowingContainer from '../components/followingContainer'
import { context } from '../context'

const Following = () => {
    const ctx = useContext(context)

    return (
        <Container>
            <FollowingContainer name={ctx.userData?.name}
                following={ctx.userFollowing} />
        </Container>
    )

}

export default Following