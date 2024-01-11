import React from "react";
import '../styles/styles.scss';

const IndexPage = ({ location }) => {
  return (
    <body>
      <p>He's the boogie woogie bugle boy of Company B.</p>
    </body>
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