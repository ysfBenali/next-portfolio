import Container from '@/components/common/Container';
import { Wrapper, Tech } from './styles';

const Intro = () => {
  return (
    <Wrapper as={Container} id="about">
      <h3>More about me</h3>
      <p>
        I’m a super curious guy who enjoys the process of learning new things.
        Currently working as a software engineer. I like writing code especially
        in Javascript and React. Fast learner and obsessed with details and
        quality, I am mostly self-taught, and always keeping up with new
        technologies.
      </p>
      <p>I primarily use the following frameworks, tools, and libraries :</p>
      <Tech>
        <ul>
          <li>JavaScript</li>
          <li>Nodejs</li>
          <li>{'HTML & CSS'}</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>Nextjs</li>
          <li>{'SQL & NoSQL'}</li>
          <li>GraphQL</li>
        </ul>
      </Tech>
      <p>
        So I'm looking for an opportunity to develop my skills, be
        team-oriented, and have a happy workplace, If you are interested in
        hiring a Front-end developer (React/Next), you are in the right place .
        <a href="#contact"> Get in touch </a>
        to discuss, or you can call me at this number
        <span> +212606618093</span>.
      </p>
      <p>
        If you have any questions or comments feel free to email me at
        <a href="mailto:ysfbenali.dev@gmail.com"> ysfbenali.dev@gmail.com</a>.
      </p>
    </Wrapper>
  );
};

export default Intro;