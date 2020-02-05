import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AddSkill from './components/AddSkill';
import AddSession from './components/AddSession';

const Home = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isVerifying ? (
        <div />
      ) : isAuthenticated ? (
        <Component {...props}>
          <AddSkill />
          <AddSession />
        </Component>
      ) : (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
