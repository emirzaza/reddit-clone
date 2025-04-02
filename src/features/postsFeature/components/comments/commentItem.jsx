import { Button } from '@mantine/core';
import React from 'react';
import { IconArrowBigUp, IconArrowBigDown } from '@tabler/icons-react';
import { Route } from '../../../../routes/r.$slug';

function CommentItem({ img, user, date, message, upvote }) {
  return (
    <div className="flex flex-col gap-1 p-3 rounded-2xl ">
      <div className="flex items-center gap-1">
        <img className="rounded-full size-10" src={img} />
        <p className="font-bold">{user} -</p>
        <p className="text-xs">{date}</p>
      </div>
      <div>
        <p className="text-s">{message}</p>
      </div>
      <div className="flex items-center gap-1">
        <Button variant="subtle" color="gray" size="xs" radius="xl">
          <IconArrowBigUp />
        </Button>
        <p className="text-xs">{upvote}</p>
        <Button variant="subtle" color="gray" size="xs" radius="xl">
          <IconArrowBigDown />
        </Button>
        <Button variant="subtle" color="gray" size="xs" radius="xl">
          reply
        </Button>
        <Button variant="subtle" color="gray" size="xs" radius="xl">
          share
        </Button>
      </div>
    </div>
  );
}

function CommentsList() {
  const ara = Route.useSearch();
  const navigate = Route.useNavigate();
  const {
    commentsData: { comments },
  } = Route.useLoaderData();

  const loadMore = () => {
    const newLimit = ara?.limit ? parseInt(ara.limit, 10) + 5 : 10; // Eğer limit varsa artır, yoksa 10 ata

    navigate({
      search: { limit: newLimit },
    });
  };
  console.log('saaaa', comments.list);
  return (
    <div className="flex flex-col gap-3">
      {comments.list.map(item => (
        <CommentItem
          key={item.id}
          user={item.user}
          img={item.imgUrl}
          message={item.message}
          date={item.date}
          upvote={item.upvoteCount}
        />
      ))}

      {comments?.nextCursor && (
        <Button
          variant="transparent"
          color="gray"
          size="xs"
          radius="xl"
          onClick={loadMore}
        >
          Load More
        </Button>
      )}
    </div>
  );
}

export default CommentsList;
