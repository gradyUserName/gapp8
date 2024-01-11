import React from "react";
import '../styles/styles.scss';
import Layout from "../components/layout";

const IndexPage = ({ location }) => {
  return (
    <Layout location={location}>
      <p>He's the boogie woogie bugle boy of Company B.</p>
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