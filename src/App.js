import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const componentList = {
  'Destination': import('./components/Destination'),
  'Home': import('./components/Home'),
  'Detail': import('./components/Detail'),
  'Voucher': import('./components/Voucher')
};

const Destination = setUpLoadable('Destination');
const Home = setUpLoadable('Home');
const Detail = setUpLoadable('Detail');
const Voucher = setUpLoadable('Voucher');

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop timeout={200}>
      <RouteWrapper timeout={400}>
        <Layout navbar exact path="/" component={Home} />
        <Layout navbar exact path="/destination" component={Destination} />
        <Layout navbar exact path="/voucher" component={Voucher} />
        <Layout navbar exact path="/detail" component={Detail} />
        {/* <Layout navbar exact path="/404" component={NoMatch} />
        <Layout navbar exact component={NoMatch} /> */}
      </RouteWrapper>
    </ScrollToTop>
  </BrowserRouter>
  );
}

export default App;
