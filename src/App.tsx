import React from 'react';
import './App.css';
import Trades from './pages/Trades';
import { 
  BrowserRouter as Router,
  Route, 
  Switch, 
  Redirect
} from 'react-router-dom';
import Header from './components/Header';
import Tabs from './components/Tabs';
import { routes, sellBitcoinsRoutes } from './routes';
import styled from 'styled-components';

function App() {
  return (
    <MainWrapper>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact />
          <Route path="/buy-bitcoins" />
          <Route path={routes.SELL_BTC}>
            <Tabs />
            <Route path={routes.SELL_BTC} exact>
              <Redirect exact to={routes.SELL_BTC + sellBitcoinsRoutes.OVERVIEW} />
            </Route>
            <Route path={routes.SELL_BTC + sellBitcoinsRoutes.OVERVIEW} />
            <Route path={routes.SELL_BTC + sellBitcoinsRoutes.TRADES} component={Trades} exact />
            <Route path={routes.SELL_BTC + sellBitcoinsRoutes.TRADES + '/:id'} component={Trades} exact />
            <Route path={routes.SELL_BTC + sellBitcoinsRoutes.DISPUTES} />
            <Route path={routes.SELL_BTC + sellBitcoinsRoutes.OFFERS} />
            <Route path="/my-team" />
            <Route path="/trade-history" />
          </Route>
          <Route path="/wallet" />
          <Route path="/support" />
          <Route path="/account" />
        </Switch>
      </Router>
    </MainWrapper>
  
  );
}

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export default App;
