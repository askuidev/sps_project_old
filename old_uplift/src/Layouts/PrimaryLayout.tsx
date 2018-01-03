import * as React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Header, Home } from '../components';
import { SPSContainer } from '../containers';


const PrimaryLayout = (props: object) => {
  return (
    <div className="container">
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/SPS" component={SPSContainer} />
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
};

export default PrimaryLayout;
