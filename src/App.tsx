import { useEffect } from "react";
import "./App.css";
import BusinessCategories from "./components/business-categories";
import Cta from "./components/cta";
import FeaturesPlanet from "./components/features-planet";
import HeroHome from "./components/hero-home";
import LargeTestimonial from "./components/large-testimonial";
import Footer from "./components/ui/footer";
import Header from "./components/ui/header";
import AOS from "aos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "aos/dist/aos.css";
import Register from "./components/ui/Register";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <main className="grow">
            <HeroHome />
            <BusinessCategories />
            <FeaturesPlanet />
            <LargeTestimonial />
            <Cta />
          </main>
          <Footer border={true} />
        </>
      ),
    },
    {
      path: "register",
      element: <Register />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
