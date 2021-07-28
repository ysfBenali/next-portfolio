import Layout from '@/components/common/Layout';
import Main from '@/components/common/Main';
import axios from 'axios';

const Home = ({ repos }) => {
  return (
    <Layout>
      <Main data={repos} />
    </Layout>
  );
};

// This function gets called at build time on server-side.
// It may be called again, on a serverless function, if
// revalidation is enabled and a new request comes in
export const getStaticProps = async () => {
  const {
    data: { data },
  } = await axios({
    url: 'https://api.github.com/graphql',
    method: 'post',
    data: {
      query: `
      query viewer {
        viewer {
          repositories(first: 8, orderBy: {field: STARGAZERS, direction: DESC},isFork: false) {
            edges {
              node {
                id
                name
                url
                description
                stargazers {
                  totalCount
                }
                forkCount
                primaryLanguage {
                  name
                  color
                  id
                }
              }
            }
          }
        }
      }      
    `,
    },
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
  });

  return {
    props: {
      repos: data.viewer.repositories.edges,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};

export default Home;
