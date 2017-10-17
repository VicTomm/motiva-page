import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section className="error">
    <h1 className="error-number">404<i className="fa fa-exclamation-triangle fa-fw"></i></h1>
    <p className="error-text">Not Found</p>
    <Link to="/">Go home</Link>
  </section>
);

export default NotFoundPage;
