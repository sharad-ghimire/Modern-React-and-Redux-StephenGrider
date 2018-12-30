import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div style={{ margin: '50px' }} className="ui container comments">
      <ApprovalCard>
        <div>
          <h4 style={{ color: 'red' }}> Warning</h4>
          <p>Are you Sure?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sharad"
          timeAgo="Today at 5:34 PM"
          comment="Tero Bau!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Hari"
          timeAgo="Yesterday at 2:00 PM"
          comment="JPT xa khate!!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Ram"
          timeAgo="Today at 4:55 PM"
          comment="Thikai xa nita!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
