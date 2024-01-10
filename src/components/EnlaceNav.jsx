import { Link } from "react-router-dom";

const EnlaceNav = ({ nombre, LinkTo,target }) => {
  return (
    <Link to={LinkTo} target={target}>
      <p className="mx-4 md:my-0 sm:my-4 hover:text-sky-500 cursor-pointer">{nombre}</p>
    </Link>
  );
};

export default EnlaceNav;
