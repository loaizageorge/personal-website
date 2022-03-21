import * as React from "react"
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Portfolio from "../components/Portfolio";
import "../styles/styles.css";

// markup
const IndexPage = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default IndexPage
