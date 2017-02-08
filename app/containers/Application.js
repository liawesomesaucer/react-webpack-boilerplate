import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Root from './Root';
import HomePage from './pages/main/homepage';
import CounterPage from './pages/main/counter';
import PageNotFound from './pages/notfound/PageNotFound';

export const routes = (
  <Route path="/" component={Root} >
    <IndexRoute component={HomePage} />
    <Route path="counter" component={CounterPage} />
    <Route status={404} path="*" component={PageNotFound} />
  </Route>
);

export default class Application extends React.Component {
  render() {
    return (
      <Provider store={ this.props.store }>
        <Router history={ this.props.history } onUpdate={()=>{}}>
          {routes}
        </Router>
      </Provider>
    )
  }
}
