import {
    Section,
    Title,
    ListOfFollowingContainer,
    Followin,
    ProfileFollowing,
    Button,
    ButtonsNavigation
} from './styles';

import {
    GoArrowLeft,
    GoHome
} from "react-icons/go";
import { Link } from 'react-router-dom'

const FollowingContainer = props => {
    return (
        <Section>
            <Title>Perfis que {(props.name)?.split(' ')[0]} segue :</Title>
            <ListOfFollowingContainer>
                {(props?.following).map(followin => (
                    <Followin onClick={() => window.open(followin?.html_url)}
                        key={followin?.login}>
                        <ProfileFollowing src={followin?.avatar_url}
                            alt={followin?.alternativeText} /><p>- {followin?.login} </p>
                    </Followin>
                ))}
            </ListOfFollowingContainer>
            <ButtonsNavigation>
                <Link to="/followers">
                    <Button>
                        <GoArrowLeft size={25} />
                    </Button>
                </Link>
                <Link to="/">
                    <Button>
                        <GoHome size={25} />
                    </Button>
                </Link>
            </ButtonsNavigation>
        </Section>
    );
}

export default FollowingContainer;