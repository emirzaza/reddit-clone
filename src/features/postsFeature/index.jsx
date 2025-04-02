import React from 'react';
import SubDetails from './components/subDeatils';
import PostDetails from './components/postDetails';
import Comments from './components/comments';

function Index() {
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <SubDetails></SubDetails>
        <PostDetails></PostDetails>
        <Comments></Comments>
      </div>
    </div>
  );
}

export default Index;
