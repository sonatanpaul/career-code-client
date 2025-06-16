import { Link, NavLink } from "react-router";
import { useAuth } from "../../contexts/AuthContext";

export default function Header() {
  const { user, logoutUser } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
    </>
  );

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end ">
          {user ? (
            <button
              onClick={handleLogout}
              className="btn btn-outline btn-accent"
            >
              Sign Out
            </button>
          ) : (
            <>
              <Link to={"/login"} className="btn btn-outline btn-success">
                Login
              </Link>
              <Link to={"/register"} className="btn btn-outline btn-info ml-2">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
}
