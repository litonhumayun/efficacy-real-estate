import { useLocation, useNavigate } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const navigator = useNavigate();
  function pathMatchRoute(route) {
    if (route === location.pathname) {
      return true;
    }
  }

  return (
    <header className="navbar bg-white-100 border-b shadow-sm sticky top-0 z-50">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${
                pathMatchRoute("/") && "text-black border-b-green-500"
              }`}
              onClick={() => {
                navigator("/");
              }}
            >
              <a>Home</a>
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${
                pathMatchRoute("/offers") && "text-black border-b-green-500"
              }`}
              onClick={() => {
                navigator("/offers");
              }}
            >
              <a>Offers</a>
            </li>
            <li
              className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent${
                pathMatchRoute("/sign-in") && "text-black border-b-green-500"
              }`}
              onClick={() => {
                navigator("/sign-in");
              }}
            >
              <a>Sign In</a>
            </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost text-xl"
          onClick={() => {
            navigator("/");
          }}
        >
          daisyUI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li
            className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
              pathMatchRoute("/") && "text-black border-b-green-500"
            }`}
            onClick={() => {
              navigator("/");
            }}
          >
            <a>Home</a>
          </li>
          <li
            className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
              pathMatchRoute("/offers") && "text-black border-b-green-500"
            }`}
            onClick={() => {
              navigator("/offers");
            }}
          >
            <a>Offers</a>
          </li>
          <li
            className={`py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent cursor-pointer ${
              pathMatchRoute("/sign-in") && "text-black border-b-green-500"
            }`}
            onClick={() => {
              navigator("/sign-in");
            }}
          >
            <a>Sign In</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </header>
  );
};

export default Header;
