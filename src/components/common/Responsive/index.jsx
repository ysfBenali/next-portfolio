import { Wrapper } from './styles';

const Responsive = ({ children, desktopOnly, mobileOnly }) => {
  return (
    <Wrapper desktopOnly={desktopOnly} mobileOnly={mobileOnly}>
      {children}
    </Wrapper>
  );
};

export default Responsive;
