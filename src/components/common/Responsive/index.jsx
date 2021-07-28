import { Wrapper } from './styles';

const Responsive = ({ children, desktopOnly, mobileOnly, breakpointOnly }) => {
  return (
    <Wrapper desktopOnly={desktopOnly} mobileOnly={mobileOnly} breakpointOnly={breakpointOnly}>
      {children}
    </Wrapper>
  );
};

export default Responsive;
