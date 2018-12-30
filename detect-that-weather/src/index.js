import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lattitue: null
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lattitue: position.coords.latitude
        });
        // DONT
        // this.state.lattitue = position.coords.latitude
      },
      (err) => console.log(err)
    );
  }
  render() {
    return <div>Lattitue: {this.state.lattitue}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
