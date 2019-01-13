import React from 'react';
import SongList from './SongList';

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide" style={{ marginTop: '50px' }}>
          <SongList />
        </div>
      </div>
    </div>
  );
};

export default App;
