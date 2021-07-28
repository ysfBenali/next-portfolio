import Container from '@/components/common/Container';
import Fork from '@/components/common/Icons/Fork';
import Language from '@/components/common/Icons/Language';
import Star from '@/components/common/Icons/Star';
import { useTheme } from 'providers/ThemeProvider';
import {
  Card,
  Description,
  Grid,
  Item,
  Content,
  Stats,
  Wrapper,
} from './styles';

const Projects = ({ repos }) => {
  const theme = useTheme();
  return (
    <Wrapper as={Container} id="projects">
      <h3>Popular Projects</h3>
      <Grid>
        {repos &&
          repos.map(({ node }) => {
            if (!node) return null;
            return (
              <Item
                key={node.id}
                as="a"
                href={node.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Card theme={theme}>
                  <Description>
                    <h4>{node.name}</h4>
                    <p>{node.description}</p>
                  </Description>
                  <Stats>
                    <Content>
                      <div>
                        <Language color={node.primaryLanguage.color} />
                        <span>{node.primaryLanguage.name}</span>
                      </div>
                      <div>
                        <Star />
                        <span>{node.stargazers.totalCount}</span>
                      </div>
                      <div>
                        <Fork />
                        <span>{node.forkCount}</span>
                      </div>
                    </Content>
                  </Stats>
                </Card>
              </Item>
            );
          })}
      </Grid>
    </Wrapper>
  );
};

export default Projects;
