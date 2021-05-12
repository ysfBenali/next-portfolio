import { Wrapper} from './styles';

const MenuItem = ({text}) => {
  return (
    <Wrapper>
      <a href="/">{text}</a>
    </Wrapper>
  );
};

export default MenuItem;
