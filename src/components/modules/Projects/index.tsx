'use client';

import { RepositoryEdge } from '@/generated/graphql';
import { useTheme } from '@/providers/ThemeProvider';
import Container from '@/components/common/Container';

const Projects = ({ repos }: { repos: RepositoryEdge[] }) => {
  const theme = useTheme();

  const defaultLanguageColor = theme === 'dark' ? '#fff' : '#666666';

  return (
    <Container id="projects" className="min-h-[100px] text-left pb-8 pt-8">
      <h3>Popular Projects</h3>
      <div className="grid justify-items-center grid-cols-3 grid-rows-[80fr] gap-5 mt-8 md:grid-cols-2 sm:grid-cols-1">
        {repos &&
          repos.map(({ node }) => {
            if (!node) return null;

            return (
              <a
                className="w-full h-full border-none rounded-xl overflow-hidden shadow-md shadow-black/20 transform transition-transform duration-400 ease-in-out hover:scale-105"
                key={node?.id}
                href={node?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="h-full p-4 bg-blizzard-blue-50 hover:bg-blizzard-blue-100 dark:bg-french-pass/[0.102] hover:dark:bg-french-pass/[0.150]">
                  <div className="py-1 px-0 text-left min-h-[140px]">
                    <h4 className="text-primary dark:text-primaryDark capitalize">
                      {node?.name}
                    </h4>
                    <p className="mt-4 text-base">{node?.description}</p>
                  </div>
                  <p className="flex flex-row space-x-6 box-border text-sm font-medium dark:text-gray-300 text-gray-700">
                    <span className="inline-block text-inherit">
                      <span
                        className="relative box-border inline-block top-[2px] w-[14px] h-[14px] border-0 rounded-full "
                        style={{
                          backgroundColor:
                            node?.primaryLanguage?.color ||
                            defaultLanguageColor,
                        }}
                      />
                      <span className="ml-1 ">
                        {node?.primaryLanguage?.name}
                      </span>
                    </span>
                    <span className="inline-block text-inherit">
                      <svg
                        className="relative inline-block mr-1 bottom-1 fill-gray-700 dark:fill-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width={16}
                        height={16}
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                        ></path>
                      </svg>
                      {node?.stargazers?.totalCount}
                    </span>
                    <span className="inline-block">
                      <svg
                        className="relative inline-block mr-1 bottom-1 fill-gray-700 dark:fill-gray-300"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        width={16}
                        height={16}
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
                        ></path>
                      </svg>
                      {node?.forkCount}
                    </span>
                  </p>
                </div>
              </a>
            );
          })}
      </div>
    </Container>
  );
};

export default Projects;
