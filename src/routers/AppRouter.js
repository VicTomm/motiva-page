import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomePage from '../components/HomePage';
import NosotrosPage from '../components/NosotrosPage';
import SecretariaPage from '../components/SecretariaPage'
import ContactPage from '../components/ContactPage';
import ItemList from '../components/ItemList';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={HomePage} exact={true} />
          <Route path="/items" component={ItemList} />
          <Route path="/secretarias" component={NosotrosPage} />
          <Route path="/secretaria/:id" component={SecretariaPage} />
          <Route path="/contacto" component={ContactPage} />
          <Route component={NotFoundPage} />
        </Switch>
        <Footer />
      </div>
  </Router>
);

export default AppRouter;
