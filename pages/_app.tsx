import React from 'react'
import App from 'next/app'
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import store from '../store';

interface myAppProps {
  store: any;
}

class MyApp extends App<myAppProps, any> {
  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    );
  }
}

export default withRedux(store)(MyApp);