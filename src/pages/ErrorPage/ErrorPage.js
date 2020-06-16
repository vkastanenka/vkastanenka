// React
import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="main">
      <section className="error fc-grey-light-1 ta-center">
        <div className="error__content">
          <h1 className="heading-primary">404 Not Found</h1>
          <h3 className="heading-tertiary ma-bt--3">
            Sorry friend, looks like you're a little lost!
          </h3>
          <Link to="/">
            <button className="btn btn--icon btn--large btn--ghost btn--hover-primary-dark">
              Click here to get back
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
