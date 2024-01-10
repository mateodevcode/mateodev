import { Link } from "react-router-dom";

const EnlaceMenuNav = ({ nombre, LinkTo, target }) => {
  return (
    <Link to={LinkTo} target={target} className="my-2 w-full">
      <p className="py-1 px-2 hover:bg-red-700 hover:text-white cursor-pointer">{nombre}</p>
    </Link>
  );
};

export default EnlaceMenuNav;
