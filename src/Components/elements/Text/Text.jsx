export const Text = (props) => {
  const { children, className } = props;
  return <span className={`text-gray-700 ${className}`}>{children}</span>;
};
