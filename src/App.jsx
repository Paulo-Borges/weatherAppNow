import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import Search from "../public/icon-search.svg";

function App() {
  return (
    <div className="max-w-[1440px] bg-Blue-900 h-screen">
      <Navbar className="" />
      <div className="flex flex-col justify-center items-center">
        <h1 class="text-4xl font-semibold text-white mb-8">
          How´s the sky looking today?
        </h1>
        <div className="flex justify-center items-center gap-3 mb-8">
          <div className="flex justify-start items-center pl-3 bg-Neutral-300 w-[350px] p-1 rounded">
            <div>
              <img
                src={Search}
                alt="search"
                className="w-3 h-3 cursor-pointer"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Search for a place..."
                className=" outline-0"
              />
            </div>
          </div>
          <div>
            <button className="flex font-light text-xs items-center gap-2 bg-Blue-500 px-2 py-1 rounded cursor-pointer">
              <span className="text-sm">Search</span>
            </button>
          </div>
        </div>
        <p className="mb-8">No search result found</p>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
