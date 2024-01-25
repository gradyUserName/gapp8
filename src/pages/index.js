import React from "react";
import '../styles/styles.scss';
import Layout from "../components/layout";
import Hero from "../components/sections/hero";
import About from "../components/sections/about";
import Experience from "../components/sections/experience";
import Projects from "../components/sections/projects";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <About />
      <Experience />
      <Projects />
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