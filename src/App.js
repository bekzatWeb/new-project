import './App.css';
import {Routes, Route} from "react-router-dom"

import Layout from "./layout/Layout";
import Contact from "./pages/contact/Contact";
import Process from "./pages/process/Process";
import Projects from "./pages/projects/Projects";
import Services from "./pages/about/Services";
import Help from "./components/help/Help";
import React from "react";
import Rent from "./components/rent/Rent";
import Data from "./components/dataCompany/Data";
import Hotel from "./components/hotel/Hotel";
import Apartment from "./components/apartment/Apartment";
import Questions from "./components/questions/Questions";
import Contacts from "./components/contacs/Contacts";

function App() {
  return (
    <div>
      <Layout>
          <Routes>
              <Route path="/" element={<><Rent/><Help/><Data/><Hotel/><Apartment/><Questions/><Contacts/></>} />
              <Route path="/services" element={<Services/>} />
              <Route path="/projects" element={<Projects/>} />
              <Route path="/process" element={<Process/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
      </Layout>
    </div>
  );
}

export default App;
