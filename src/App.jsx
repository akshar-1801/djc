import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./layouts/Navbar/NavBar";
import Footer from "./layouts/Footer/Footer";
import Preloader from "./layouts/Preloader/Preloader";
import Home_Page from "./pages/Home/home_page";
import Products_Page from "./pages/Products/Products_Page";
import SingleProduct_Page from "./pages/SingleProduct/SingleProduct_Page";
import Personalize_Page from "./pages/Customization/Customization_Page";

function App() {
  return (
    <>
      <Preloader />
      <BrowserRouter>
        {/* <NavBar /> */}
        <Routes>
          <Route path="/" element={<Home_Page />} />
          <Route path="/home" element={<Home_Page />} />
          <Route path="/products" element={<Products_Page />} />
          <Route path="/products/:prodId" element={<SingleProduct_Page />} />
          <Route path="/personalize" element={<Personalize_Page checkPageOne={true}/>} />
          <Route path="/uploadIdea" element={<Personalize_Page checkPageOne={false}/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
