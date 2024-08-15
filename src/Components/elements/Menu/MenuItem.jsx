import { Link } from "react-router-dom";

export const MenuItem = (props) => {
  const { to, children, className } = props;
  return (
    <li>
      <Link to={to} className={`block py-2 ${className}`}>
        <Text>{children}</Text>
      </Link>
    </li>
  );
};
