import Container from '@/components/common/Container';
import { Wrapper, Tech } from './styles';

const Intro = () => {
  return (
    <Wrapper as={Container} id="about">
      <h3>More about me</h3>
      <p>
        I’m just a super curious guy who spends a lot of time building software.
        Currently working as a software engineer. I am mostly self-taught, and I
        am very passionate about new technologies. My strongest skills lie
        within React/JavaScript.
      </p>
      <p>I primarily use the following technologies, tools and libraries:</p>
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
        So I'm locking for opportunity to develop my skills , team oriented and
        a happy workplace, If you are interested in hiring a Front-end developer
        (Next/React), you are in the right place.
        <a href="#contact"> Get in touch </a>
        to discuss, or you can call me at this number
        <span> +212606618093 </span>.
      </p>
      <p>
        Feel free to reach out to me for speaking inquiries, or if you have
        questions or comments just email me at
        <a href="mailto:hello@ysfbenali.com"> hello@ysfbenali.com </a> .
      </p>
    </Wrapper>
  );
};

export default Intro;
