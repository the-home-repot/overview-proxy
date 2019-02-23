import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    } 
  }
  render() {
    return (
    <div>
      <div className="container">
        <div className="sarah">
          <div id="photos" />
        </div>
        <div className="remy">
          <div id="product-overview"></div>
        </div>
      </div>
      <div className="tony">
        <div id="similar-options" />
      </div>
      <div className="trevor">
        <div id="reviews" />
      </div>
    </div>
        
        
        
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('app'));