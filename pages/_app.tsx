import React from "react";

import "../public/css/main.css";

const AppComponent = ({ Component, pageProps }: { Component: any, pageProps: any }) => {
  return <>
  <Component {...pageProps} /></>
};

AppComponent.getInitialProps = async (appContext: any) => {
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  return { pageProps };
};
export default AppComponent;
