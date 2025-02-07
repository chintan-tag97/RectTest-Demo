import { useState } from "react";
import "./App.css";
import { FaHome, FaBook, FaCouch, FaTv, FaCar, FaEllipsisH, FaHeart } from "react-icons/fa";


const categories = [
  { name: "Real Estate", count: 3921, icon: FaHome },
  { name: "Books & Magazines", count: 398, icon: FaBook },
  { name: "Furniture", count: 1229, icon: FaCouch },
  { name: "Electronics", count: 32891, icon: FaTv },
  { name: "Cars & Vehicles", count: 29221, icon: FaCar },
  { name: "Other", count: 219, icon: FaEllipsisH },
];

const ads = [
  {
    title: "iPhone X gray",
    category: "Electronics",
    location: "Don St, Brooklyn, New York",
    reviews: 3,
    image: "C:\Users\Lenovo\OneDrive\Desktop\TAG97\Git\RectTest-Demo\src\assets\img\iphone.avif",
  },
  {
    title: "Red Luxury Car",
    category: "Cars & Vehicles",
    location: "Don St, Brooklyn, New York",
    reviews: 3,
    image: "path-to-image2.jpg",
  },
  {
    title: "House with Swimming Pool",
    category: "Real Estate",
    location: "Don St, Brooklyn, New York",
    reviews: 3,
    image: "path-to-image3.jpg",
  },
  {
    title: "Wooden Chair & Table",
    category: "Furniture",
    location: "Don St, Brooklyn, New York",
    reviews: 3,
    image: "path-to-image4.jpg",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="background relative bg-cover bg-center min-h-screen flex flex-col">
        <header className="bg-white bg-opacity-75 shadow-md p-5 mt-5 mr-6 ml-6 sm:mr-18 sm:ml-18">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
              <a href="#" className="text-xl font-bold">
                <span className="text-black">TEST</span>
                <span className="text-teal-500">DEMO</span>
              </a>
            </div>

            <button
              className="md:hidden flex items-center text-dark hover:text-teal-500"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="block size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
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

                {/* <select className="bg-white flex-1 rounded px-4 py-2">
              <option>About</option>
              <option> The Company</option>
              <option>The Leadership</option>
              <option> Philosophy</option>
              <option>Careers</option>

            </select> */}

                <li className="dropdown relative group">
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

        <div className=" mt-30 ">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold mb-4">
              Largest Classifieds In The World
            </h1>
            <p className="text-lg">You can buy, sell anything you want!</p>
          </div>

          <div className="bg-stone-50/25 p-6 shadow-md rounded-lg mx-auto -mt-10 w-11/12 max-w-5xl mt-8">
            <form className="flex flex-wrap items-center gap-4">
              <input
                type="text"
                className="bg-white w-full md:w-auto flex-grow rounded px-4 py-2 focus:outline-none focus:ring focus:ring-teal-200"
                placeholder="What are you looking for?"
              />
              <input
                type="text"
                className="bg-white w-full md:w-auto flex-grow rounded px-4 py-2 focus:outline-none focus:ring focus:ring-teal-200"
                placeholder="Location"
              />
              <select className="bg-white w-full md:w-auto flex-grow rounded px-4 py-2 focus:outline-none focus:ring focus:ring-sky-200">
                <option>All Categories</option>
                <option>Categories</option>
                <option>Categories</option>
              </select>
              <button
                type="submit"
                className="bg-teal-500 w-full md:w-auto text-white px-6 py-2 rounded shadow hover:bg-teal-600"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>


    <div className="bg-gray-100">
      <div className="px-5">
        <div className="container mx-auto relative -mt-10 flex items-center justify-center ">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 text-center mb-8 rounded-3xl ">
            {categories.map((category, index) => (
              <div
                className="bg-white shadow p-4 hover:bg-teal-200 transition "
                key={index}
              >
                <div className="text-3xl text-teal-500 flex justify-center mb-2">
                  <category.icon />
                </div>
                <div className="text-lg font-light mb-2 text-gray-600">
                  {category.name}
                </div>
                <div className="text-gray-600 text-md inline-block bg-gray-200 px-2 py-1 rounded-full font-bold">
                  {category.count}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-5">
        <h3 className="container text-2xl  mb-6">Featured Ads</h3>
        <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ads.map((ad, index) => (
            <div
              className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition"
              key={index}
            >
              <img
                src={ad.image}
                alt={ad.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between">
                  <span className="inline-block bg-gray-200 text-dark text-sm px-2 py-1 rounded-full font-semibold ">
                    {ad.category}
                  </span>
                  <div className="inline-block bg-gray-100 text-cyan-300 text-sm px-2 py-1 rounded-full font-semibold p-10 pt-2 hover:bg-red-600">
                  <FaHeart /></div>
                  {/* <div className="text-cyan-500">
                    <FaHeart />
                  </div> */}
                </div>
                <h5 className="text-lg  mb-2 text-cyan-500 mt-3">
                  {ad.title}
                </h5>
                <p className="text-gray-600 text-sm mb-4">{ad.location}</p>
                <div className="flex justify-between items-center">
                  <div className="text-yellow-500">
                    {Array.from({ length: 5 }, (_, i) =>
                      i < ad.reviews ? (
                        <span key={i}>★</span>
                      ) : (
                        <span className="text-gray-400" key={i}>
                          ★
                        </span>
                      )
                    )}
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({ad.reviews} Reviews)
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  

    </>
  );
}

export default App;
