import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sharad"
        timeAgo="Today at 5:34 PM"
        comment="Tero Bau!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Hari"
        timeAgo="Yesterday at 2:00 PM"
        comment="JPT xa khate!!"
        avatar={faker.image.avatar()}
      />
      <CommentDetail
        author="Ram"
        timeAgo="Today at 4:55 PM"
        comment="Thikai xa nita!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
