import {
    Section,
    Title,
    ListOfStarredContainer,
    Starre,
    Button,
    ButtonsNavigation
} from './styles';
import {
    GoArrowLeft,
    GoHome,
    GoArrowRight
} from "react-icons/go";
import { Link } from 'react-router-dom'

const StarredContainer = props => {
    return (
        <Section>
            <Title>Repositórios mais visitados de {(props.name)?.split(' ')[0]} :</Title>
            <ListOfStarredContainer>
                {(props?.starred).map(starre => (
                    <Starre onClick={() => window.open(starre?.html_url)}
                        key={starre?.id}>
                        <h2>{starre?.name}</h2>
                        <p>{starre?.description}</p>
                    </Starre>
                ))}
            </ListOfStarredContainer>
            <ButtonsNavigation>
                <Link to="/repos">
                    <Button>
                        <GoArrowLeft size={25} />
                    </Button>
                </Link>
                <Link to="/">
                    <Button>
                        <GoHome size={25} />
                    </Button>
                </Link>
                <Link to="/followers">
                    <Button>
                        <GoArrowRight size={25} />
                    </Button>
                </Link>
            </ButtonsNavigation>
        </Section>
    );
}

export default StarredContainer;