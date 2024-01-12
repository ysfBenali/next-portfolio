import Link from 'next/link';
import Container from '@/components/common/Container';

const Intro = () => {
  const technologies = [
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'Nodejs' },
    { id: 3, name: 'HTML & CSS' },
    { id: 4, name: 'React' },
    { id: 5, name: 'TypeScript' },
    { id: 6, name: 'Nextjs' },
    { id: 7, name: 'SQL & NoSQL' },
    { id: 8, name: 'GraphQL' },
  ];

  return (
    <Container
      id="about"
      className="text-left min-h-[100px] pb-8 pt-8 font-medium"
    >
      <h3>More about me</h3>
      <p className="mt-4">
        I’m a super curious guy who enjoys the process of learning new things.
        Currently working as a software engineer. I like writing code especially
        in Javascript and React. Fast learner and obsessed with details and
        quality, I am mostly self-taught, and always keeping up with new
        technologies.
      </p>
      <p className="mt-4">
        I primarily use the following frameworks, tools, and libraries :
      </p>
      <div className="mt-4 pl-10">
        <ul className="flex flex-row flex-wrap pt-[15px]">
          {technologies?.map(({ id, name }) => (
            <li
              className="list-disc w-1/2 text-left pb-[15px] pl-[10px] text-md sm:w-full text-[17px]"
              key={id}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-4">
        So I'm looking for an opportunity to develop my skills, be
        team-oriented, and have a happy workplace, If you are interested in
        hiring a Front-end developer (React/Next), you are in the right place.
        <Link href="/#contact" className="text-primary dark:text-primaryDark">
          {' '}
          Get in touch{' '}
        </Link>
        to discuss.
      </p>
      <p className="mt-4">
        If you have any questions or comments feel free to email me at
        <a
          className="pointer no-underline text-primary dark:text-primaryDark"
          href="mailto:ysfbenali.dev@gmail.com"
        >
          {' '}
          ysfbenali.dev@gmail.com
        </a>
        .
      </p>
    </Container>
  );
};

export default Intro;
