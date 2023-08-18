import { Link } from "react-router-dom";
import logo from "../../assets/whoops.png";

const navigations = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <img src={logo} alt="whoops commerce logo" className="w-10 h-10 rounded-full object-cover object-center border" />
          <span className="ml-3 text-xl">Whoops</span>
        </Link>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {navigations.map((navigation) => {
            return (
              <Link to={navigation.path} className="mr-5 hover:text-gray-900">
                {navigation.name}
              </Link>
            );
          })}
        </nav>
        <button className="inline-flex items-center bg-indigo-700 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-500 rounded text-base mt-4 md:mt-0">
          Buy now
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
