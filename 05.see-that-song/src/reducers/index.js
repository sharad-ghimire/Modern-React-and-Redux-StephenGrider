import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'Yo Baby', duration: '4:05' },
    { title: 'Tero Baby', duration: '2:03' },
    { title: 'Mero Baby', duration: '3:52' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  song: songsReducer,
  selectedSong: selectedSongReducer
});
