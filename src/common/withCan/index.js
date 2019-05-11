import React from 'react';
import Script from 'react-load-script';

const withCan = (Component) => {
  return class extends React.Component {
    render() {
      return(
        <React.Fragment>
        <script url="//cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js"/>
        <Component></Component>
      </React.Fragment>
      )
    }
    componentWillUnmount() {
      console.log(this)
    }
  }
}

export default withCan