import React, { Component } from 'react';
import { Route } from 'react-router-dom';


class Layout extends Component {
  render() {
    const { component: Component, ...rest } = this.props;
    return (
      <Route {...rest} render={(props) => {
        return (
          <div>
            {/* <link rel="stylesheet" type="text/css" id='index' href="/index.css" /> */}
            <div className="main-content-container">
              <Component {...rest} {...props}/>
            </div>
          </div>
        )
      }}/>
    );
  }
}

export default Layout;