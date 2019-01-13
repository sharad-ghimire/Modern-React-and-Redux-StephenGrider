import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div>Select a Song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>Title: {mySelectedSong.title}</p>
      <p>Duration: {mySelectedSong.duration}</p>
    </div>
  );
};

const mapStateToPops = (state) => {
  return {
    mySelectedSong: state.selectedSong
  };
};

export default connect(mapStateToPops)(SongDetail);
