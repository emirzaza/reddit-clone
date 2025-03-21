import { Button } from '@mantine/core';

function Post() {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-between">
        <div className="flex flex-row">
          <img></img>
          <p>username</p>
          <p>3 hours ago</p>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col">
        <p></p>
        <img src="./image0.jpg"></img>
      </div>

      <div className="flex gap-3 mt-1">
        <Button color="gray" radius={20}>
          3.46
        </Button>
        <Button color="gray" radius={20}>
          46
        </Button>
        <Button color="gray" radius={20}>
          *
        </Button>
        <Button color="gray" radius={20}>
          Share
        </Button>
      </div>
    </div>
  );
}

export default Post;
