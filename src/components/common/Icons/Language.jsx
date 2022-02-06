<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle cx="50" cy="50" r="50" />
</svg>;

const Language = ({
  width = 16,
  height = 16,
  color = 'var(--color-gray-500)',
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={width}
    height={height}
  >
    <circle fill={color} cx="50" cy="50" r="45" />
  </svg>
);

export default Language;
