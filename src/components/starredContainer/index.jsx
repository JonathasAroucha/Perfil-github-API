import {
    Section,
    Title,
    ListOfStarredContainer,
    Starre
} from './styles';

const StarredContainer = props => {
    return (
        <Section>
            <Title>Repositórios mais visitados de {(props.name)?.split(' ')[0]} :</Title>
            <ListOfStarredContainer>
                {(props?.starred).map(starre => (
                    <Starre onClick={() => window.location.href(starre?.html_url)}
                        key={starre?.id}>
                        <h2>{starre?.name}</h2>
                        <p>{starre?.description}</p>
                    </Starre>
                ))}
            </ListOfStarredContainer>
        </Section>
    );
}

export default StarredContainer;