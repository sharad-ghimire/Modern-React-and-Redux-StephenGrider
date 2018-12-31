import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {
  state = {
    term: ''
  };

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID 5839bc034e0e1c07f3ca3b81ba818ec02b5e70cceccac76c2b3c99eb1bc57336'
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}
export default App;
