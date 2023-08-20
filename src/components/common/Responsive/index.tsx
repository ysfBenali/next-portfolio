import { ResponsiveWrapperProps, Wrapper } from './styles';

interface ResponsiveProps extends ResponsiveWrapperProps {
  children: React.ReactNode;
}

const Responsive = ({
  children,
  desktopOnly,
  mobileOnly,
  breakpointOnly,
}: ResponsiveProps) => {
  return (
    <Wrapper
      desktopOnly={desktopOnly}
      mobileOnly={mobileOnly}
      breakpointOnly={breakpointOnly}
    >
      {children}
    </Wrapper>
  );
};

export default Responsive;
