import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    Button,
    ButtonsNavigation
} from './styles';

import {
    GoHome,
    GoArrowRight
} from "react-icons/go";
import { Link } from 'react-router-dom'

const ReposContainer = props => {
    return (
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]} :</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.open(repo?.html_url)}
                        key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
            <ButtonsNavigation>
                <Link to="/">
                    <Button>
                        <GoHome size={25} />
                    </Button>
                </Link>
                <Link to="/starred">
                    <Button>
                        <GoArrowRight size={25} />
                    </Button>
                </Link>
            </ButtonsNavigation>
        </Section>
    );
}

export default ReposContainer;