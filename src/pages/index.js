import React from "react";
import '../styles/styles.scss';
import Layout from "../components/layout";
import Hero from "../components/sections/hero";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <Hero />
      <Hero />
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