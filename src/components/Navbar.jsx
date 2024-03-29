import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-light">
          <FaUser /> Feedback App
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
