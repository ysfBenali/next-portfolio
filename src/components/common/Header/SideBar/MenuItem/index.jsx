import { Wrapper } from './styles';

const MenuItem = ({ text, target, open, setOpen }) => {
  return (
    <Wrapper>
      <a
        href={target}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {text}
      </a>
    </Wrapper>
  );
};

export default MenuItem;
