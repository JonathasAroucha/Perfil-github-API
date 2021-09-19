import {
    Section,
    Title,
    ListOfFollowingContainer,
    Followin,
    ProfileFollowing,
} from './styles';

const FollowingContainer = props => {
    return (
        <Section>
            <Title>Perfis que {(props.name)?.split(' ')[0]} segue :</Title>
            <ListOfFollowingContainer>
            {(props?.following).map(followin => (
                    <Followin onClick={() => window.location.href(followin?.html_url)} key={followin?.login}>
                        <ProfileFollowing src={followin?.avatar_url} alt={followin?.alternativeText} /><p>- {followin?.login} </p>
                    </Followin>
                ))}
            </ListOfFollowingContainer>
        </Section>
    );
}

export default FollowingContainer;