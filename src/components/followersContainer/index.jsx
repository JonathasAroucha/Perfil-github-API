import {
    Section,
    Title,
    ListOfFollowersContainer,
    Follower,
    ProfileFollowers,
    Button, ButtonsNavigation
} from './styles';

import {
    GoArrowLeft,
    GoHome,
    GoArrowRight
} from "react-icons/go";
import { Link } from 'react-router-dom'

const FollowersContainer = props => {
    return (
        <Section>
            <Title>Seguidores de {(props.name)?.split(' ')[0]} :</Title>
            <ListOfFollowersContainer>
                {(props?.followers).map(follower => (
                    <Follower onClick={() => window.open(follower?.html_url)}
                        key={follower?.login}>
                        <ProfileFollowers src={follower?.avatar_url}
                            alt={follower?.alternativeText} /><p>- {follower?.login} </p>
                    </Follower>
                ))}
            </ListOfFollowersContainer>
            <ButtonsNavigation>
                <Link to="/starred">
                    <Button>
                        <GoArrowLeft size={25} />
                    </Button>
                </Link>
                <Link to="/">
                    <Button>
                        <GoHome size={25} />
                    </Button>
                </Link>
                <Link to="/following">
                    <Button>
                        <GoArrowRight size={25} />
                    </Button>
                </Link>
            </ButtonsNavigation>
        </Section>
    );
}

export default FollowersContainer;