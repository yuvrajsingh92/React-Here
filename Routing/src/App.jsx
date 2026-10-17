import { Routes, Route } from "react-router-dom";
import Navbar from "./Componets/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Product from "./Pages/Product";
import PageNotFound from "./Pages/PageNotFound";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Women";
import Kids from "./Pages/Kids";
import Footer from "./Componets/Footer";
import Courses from "./Pages/Courses";
import CourseDetails from "./Pages/CourseDetails";
import Navigation from "./Componets/Navigation";

const App = () => {
  return (
    <div>
      <Navbar />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/product" element={<Product />}>
          <Route path="mens" element={<Mens />} />
          <Route path="womens" element={<Womens />} />
          <Route path="kids" element={<Kids />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
