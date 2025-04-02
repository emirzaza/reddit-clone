import { Button } from '@mantine/core';
import React from 'react';
import CommentsList from './commentItem';

function Comments() {
  return (
    <div className="mt-5 flex flex-col gap-3 ">
      <div>
        <Button color="gray" radius="xl" variant="outline">
          Add Comment +
        </Button>
      </div>
      <div>
        <CommentsList></CommentsList>
      </div>
    </div>
  );
}

export default Comments;
