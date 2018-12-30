import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  state = {
    lattitue: null,
    error: ''
  };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lattitue: position.coords.latitude }),
      (err) => this.setState({ error: err.message })
    );
  }

  renderContent() {
    if (this.state.error && !this.state.lattitue) {
      return <div>Error: {this.state.error}</div>;
    }

    if (!this.state.error && this.state.lattitue) {
      return (
        <div>
          <SeasonDisplay lattitue={this.state.lattitue} />
        </div>
      );
    }

    return <Spinner message="Please accept location request!" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
