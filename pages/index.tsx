import React, { Component } from 'react';
import { connect } from "react-redux";

class Home extends Component {

  render() {
    return (
      <React.Fragment>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Active</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
          </li>
        </ul>
      </React.Fragment>
    )
  }
}


export default connect(state => state)(Home);
