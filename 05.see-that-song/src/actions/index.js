// Action Creators with named export , import using --> import { selectSong } from '../actions';
export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};
