import React, { createElement } from 'react';

class Home extends React.Component {

  render () {
    return (
      <div className="dddd">
        home
        <span className="qqq">1</span>
      </div>
    )
  }

  componentWillMount(){
    var canScript = document.createElement('script')
    canScript.className='can'
    canScript.setAttribute('src','//cdn.bootcss.com/canvas-nest.js/1.0.1/canvas-nest.min.js')
    document.body.append(canScript)
  }
  
  componentWillUnmount(){
    document.querySelector('.can').remove()
    document.querySelector('#c_n5').remove()
  }

}
export default Home