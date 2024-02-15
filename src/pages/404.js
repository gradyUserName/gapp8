import * as React from "react";
import { Link } from "gatsby";
import '../styles/404.scss';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h1>Page not found</h1>
      <p>
        Sorry, we couldn't find the page you were looking for.
      </p>
      <Link to="/" className="home">Go home</Link>
    </div>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
