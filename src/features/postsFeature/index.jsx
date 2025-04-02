import React from 'react';
import SubDetails from './components/subDeatils';
import PostDetails from './components/postDetails';
import Comments from './components/comments';

function Index() {
  return (
    <div className="w-1/2">
      <SubDetails></SubDetails>
      <PostDetails></PostDetails>
      <Comments></Comments>
    </div>
  );
}

export default Index;
