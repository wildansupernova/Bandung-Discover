import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import { Layout } from './commons/Layout';
import { ScrollToTop, RouteWrapper } from './helpers/router';
import Loadable from 'react-loadable';
import LoadingCSS from './commons/LoadingCSS';
import 'bootstrap/dist/css/bootstrap.min.css';

const componentList = {
  'Destination': import('./components/Destination'),
  'Home': import('./components/Home'),
  'Detail': import('./components/Detail'),
  'Voucher': import('./components/Voucher'),
  'DestinationFavoritPage': import('./pages/DestinationFavoritPage'),
  'DetailDestinationPage': import('./pages/DetailDestinationPage'),
  'ListVoucherPage': import('./pages/ListVoucherPage'),
  'QRCodeScanner': import('./components/QRCodeScanner')
};

const setUpLoadable = (component) => Loadable({
  loader: () => componentList[component],
  loading: LoadingCSS
});

const Destination = setUpLoadable('Destination');
const Home = setUpLoadable('Home');
const Detail = setUpLoadable('Detail');
const Voucher = setUpLoadable('Voucher');
const DestinationFavoritPage = setUpLoadable('DestinationFavoritPage');
const DetailDestinationPage = setUpLoadable('DetailDestinationPage');
const ListVoucherPage = setUpLoadable('ListVoucherPage');
const QRCodeScanner = setUpLoadable('QRCodeScanner');

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop timeout={200}>
      <RouteWrapper timeout={400}>
        <Layout navbar exact path="/" component={Home} />
        <Layout navbar exact path="/admin" component={Home} />
        <Layout navbar exact path="/destination" component={Destination} />
        <Layout navbar exact path="/voucher" component={Voucher} />
        <Layout navbar exact path="/detail" component={Detail} />
        <Layout navbar exact path="/favoritdestinasi" component={DestinationFavoritPage} />
        <Layout navbar exact path="/detaildestinasi" component={DetailDestinationPage} />
        <Layout navbar exact path="/myvoucher" component={ListVoucherPage} />
        <Layout navbar exact path="/qrscanner" component={QRCodeScanner} />
        {/* <Layout navbar exact path="/404" component={NoMatch} />
        <Layout navbar exact component={NoMatch} /> */}
      </RouteWrapper>
    </ScrollToTop>
  </BrowserRouter>
  );
}

export default App;
