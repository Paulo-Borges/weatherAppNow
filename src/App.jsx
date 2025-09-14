import { Outlet } from "react-router-dom";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

function App() {
  return (
    <div className="max-w-[1440px] bg-Blue-700">
      <Navbar className="" />
      <h1 class="text-3xl font-bold text-Orange-500">Weather App</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
