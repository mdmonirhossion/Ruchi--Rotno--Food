import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const linkClass = ({ isActive }) =>
    isActive
      ? "font-semibold text-blue-700 underline underline-offset-4"
      : "hover:text-blue-600 transition-colors";

  const handleLogOut = () => {
    logOut()
      .then(() => toast.success("You have successfully logged out!!"))
      .catch(() => toast.error("Log out failed. Try again"));
  };

  const navLinks = (
    <>
      <li>
        <NavLink className={linkClass} to="/topproducts">
          Top Products
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClass} to="/allproducts">
          All Products
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClass} to="/myprofile">
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink className={linkClass} to="/authentication">
          Authentication
        </NavLink>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-base-100/90 backdrop-blur border-b border-base-200">
      <div className="navbar max-w-7xl mx-auto px-4 md:px-6">
        
        {/* Navbar Start */}
        <div className="navbar-start gap-2">
          {/* Mobile Menu */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm md:btn-md lg:hidden"
            >
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
              tabIndex={-1}
              className="menu menu-sm dropdown-content mt-3 w-56 rounded-lg bg-base-100 shadow-lg p-3"
            >
              {navLinks}
            </ul>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-lg sm:text-xl font-semibold"
          >
            <img
              src="https://i.ibb.co.com/XZyXhHR2/Ruchi-rotno-logo.jpg"
              alt="Ruchi Rotno Logo"
              className="h-8 w-8 sm:h-9 sm:w-9 rounded-full object-contain"
            />
            <span className="tracking-wide">Ruchi Rotno</span>
          </Link>
        </div>

        {/* Navbar Center (Desktop) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-sm font-medium">
            {navLinks}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end gap-2 sm:gap-3">
          {user ? (
            <>
              <div
                className="avatar tooltip tooltip-bottom"
                data-tip={user.displayName}
              >
                <div className="w-9 sm:w-10 rounded-full border border-base-300">
                  <img
                    src={
                      user.photoURL ||
                      "https://i.ibb.co/5GzXkwq/user.png"
                    }
                    alt="User"
                  />
                </div>
              </div>

              <button
                onClick={handleLogOut}
                className="btn btn-primary btn-sm sm:btn-md"
              >
                Log Out
              </button>
            </>
          ) : (
            <Link
              to="/authentication/login"
              className="btn btn-primary btn-sm sm:btn-md"
            >
              Log In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
