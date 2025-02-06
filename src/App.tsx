import { useState } from "react";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="background relative bg-cover bg-center min-h-screen flex flex-col">
        <header className="bg-white bg-opacity-75 shadow-md p-4 mt-5 mr-30 ml-30">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
              <a href="#" className="text-xl font-bold">
                <span className="text-black">TEST</span>
                <span className="text-teal-500">DEMO</span>
              </a>
            </div>

            <button
              className="md:hidden flex items-center text-white hover:text-teal-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={menuOpen ? "M4 6h16M4 12h16M4 18h16" : "M4 6h16M4 12h16M4 18h16"}
                ></path>
              </svg>
            </button>

           
            <nav
              className={`${
                menuOpen ? "block" : "hidden"
              } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8`}
            >
              <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <li>
                  <a href="#" className="text-gray-700 hover:text-teal-500">
                    Home
                  </a>
                </li>
                <li className="relative group">
                  <a href="#" className="text-gray-700 hover:text-teal-500">
                    About
                  </a>
                  <ul className="absolute left-0 top-full hidden group-hover:block bg-white shadow-lg mt-2 rounded-lg">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        The Company
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        The Leadership
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Philosophy
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-teal-500">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-teal-500">
                    Contact
                  </a>
                </li>
              </ul>
              <div className="text-gray-300 hidden md:block">|</div>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <a href="#" className="text-gray-700 hover:text-teal-500">
                  Log In
                </a>
                <a href="#" className="text-gray-700 hover:text-teal-500">
                  Register
                </a>
                <a
                  href="#"
                  className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                >
                  + Test
                </a>
              </div>
            </nav>
          </div>
        </header>

        <div className="flex-1 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              Largest Classifieds In The World
            </h1>
            <p className="text-lg">You can buy, sell anything you want!</p>
          </div>
        </div>

        <div className="bg-stone-50/25 p-6 shadow-md rounded-lg mx-auto -mt-10 w-11/12 max-w-5xl inline-block">
          <form className="flex flex-wrap items-center justify-between space-y-4 md:space-y-0 gap-x-5">
            <input
              type="text"
              className="bg-white flex-1 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-teal-200"
              placeholder="What are you looking for?"
            />
            <input
              type="text"
              className="bg-white flex-1 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-teal-200"
              placeholder="Location"
            />
            <select className="bg-white flex-1 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-teal-200">
              <option>All Categories</option>
            </select>
            <button
              type="submit"
              className="bg-teal-500 text-white px-6 py-2 rounded shadow hover:bg-teal-600"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
