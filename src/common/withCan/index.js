import React from 'react';
import Script from 'react-load-script';

const withCan = (Component) => {
  return class extends React.Component {
    render() {
      return(
        <React.Fragment>
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