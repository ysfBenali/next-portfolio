import Script from 'next/script';
import { RepositoryEdge } from '@/generated/graphql';
import ThemeProvider from '@/providers/ThemeProvider';
import Layout from '@/components/common/Layout';
import Main from '@/components/common/Main';

const getRepos = async (): Promise<RepositoryEdge[]> => {
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
    },
    body: JSON.stringify({
      query: `
    query viewer {
      viewer {
        repositories(first: 8, orderBy: {field: STARGAZERS, direction: DESC}, isFork: false) {
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
    }),

    next: { revalidate: 10 },
  });

  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }

  const data = await res.json();

  return data.data.viewer.repositories.edges;
};

const Page = async () => {
  // Fetch data directly in a Server Component
  const data = await getRepos();
  // Forward fetched data to your Client Component
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
      ></Script>
      <Script
        id="google-analytics-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: ` 
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}',{
        page_path: window.location.pathname,
    });
  `,
        }}
      />
      <ThemeProvider>
        <Layout>
          <Main data={data} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default Page;
