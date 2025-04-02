import { Button } from '@mantine/core';
import React from 'react';
import CommentItem from './commentItem';

function Comments() {
  return (
    <div className="mt-5 flex flex-col gap-3">
      <div>
        <Button color="gray" radius="xl" variant="outline">
          Add Comment +
        </Button>
      </div>
      <div>
        <CommentItem></CommentItem>
        <CommentItem></CommentItem>
        <CommentItem></CommentItem>
      </div>
    </div>
  );
}

export default Comments;
