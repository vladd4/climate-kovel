import { useEffect } from "react";
import "../styles/App.scss";
import Benefits from "./Benefits/Benefits";
import Form from "./ContactForm/Form";
import Faq from "./FAQ/Faq";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Loader from "./Loader";
import Location from "./Location/Location";
import ServiceSlider from "./ServiceSlider/ServiceSlider";
import Services from "./Services/Services";
import Welcome from "./Welcome/Welcome";
import { handlePageLoading } from "../utils/handleLoading";
import AlertForm from "./AlertForm/AlertForm";
import { useSelector } from "react-redux";
import Work from "./Work/Work";

function App() {
  const formSlice = useSelector((state) => state.form);

  useEffect(() => {
    handlePageLoading();
  }, []);
  return (
    <div className="App">
      <Loader />
      <AlertForm />
      <div className={`${formSlice.isClickedAlert ? "static" : ""}`}>
        <Header />
        <Welcome />
        <Services />
        <ServiceSlider />
        <Benefits />
        <Work />
        <Location />
        <Faq />
        <Form />

        <Footer />
      </div>
    </div>
  );
}

export default App;
