import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary">Select</button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

// Its saying that we are going to take our state object from store and give that state as props to this component
const mapStateToProps = (state) => {
  return {
    songs: state.song
  };
};

export default connect(mapStateToProps)(SongList);

// function connect() {
//   return function() {
//     return 'Hi There';
//   };
// }

// connect()();
