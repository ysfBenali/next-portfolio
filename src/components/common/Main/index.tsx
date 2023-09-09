'use client';

import { RepositoryEdge } from '@/generated/graphql';
import Intro from '@/components/modules/Intro';
import Projects from '@/components/modules/Projects';
import Contact from '@/components/modules/Contact';

const Main = ({ data }: { data: RepositoryEdge[] }) => {
  return (
    <main className="relative z-30 flex-1 -mt-px pt-[5px] pb-[32px] bg-white dark:bg-midnight-blue">
      <Intro />
      <Projects repos={data} />
      <Contact />
    </main>
  );
};

export default Main;
