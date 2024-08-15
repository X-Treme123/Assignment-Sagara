export const Button = (props) => {
  const { children, onClick, classname } = props;
  return (
    <button
      className={`px-6 py-2 text-white rounded-md ${classname}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
