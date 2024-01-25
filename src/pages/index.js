import React from "react";
import '../styles/styles.scss';
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <About />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => {
  return (
    <>
      <title>Grady Holder</title>
      <html lang="en" />
    </>
  );
};