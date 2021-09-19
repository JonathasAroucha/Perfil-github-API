import {
    Section,
    Title,
    ListOfFollowersContainer,
    Follower,
    ProfileFollowers,
} from './styles';

const FollowersContainer = props => {
    return (
        <Section>
            <Title>Seguidores de {(props.name)?.split(' ')[0]} :</Title>
            <ListOfFollowersContainer>
                {(props?.followers).map(follower => (
                    <Follower onClick={() => window.location.href(follower?.html_url)} key={follower?.login}>
                        <ProfileFollowers src={follower?.avatar_url} alt={follower?.alternativeText} /><p>- {follower?.login} </p>
                    </Follower>
                ))}
            </ListOfFollowersContainer>
        </Section>
    );
}

export default FollowersContainer;