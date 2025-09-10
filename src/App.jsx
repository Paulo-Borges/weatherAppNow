import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar className="text-o" />
      <h1 class="text-3xl font-bold text-Orange-500">Weather App</h1>
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
