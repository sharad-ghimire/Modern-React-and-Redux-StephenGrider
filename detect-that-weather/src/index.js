import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lattitue: null,
      error: ''
    };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          lattitue: position.coords.latitude
        });
      },
      (err) => {
        this.setState({ error: err.message });
      }
    );
  }
  render() {
    return (
      <div>
        Lattitue: {this.state.lattitue} <br />
        Error: {this.state.error}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
