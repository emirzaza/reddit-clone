import { Button } from '@mantine/core';

function Post({img, prg}) {
  return (
    <div className="flex flex-col mt-5 ">
      <div className="flex justify-between items-center ">
        <div className="flex flex-row h-10 gap-2">
          <img src='./sct.jpg' className='rounded-full  size-9'></img>
          <p>username</p>
          <p>3 hours ago</p>
        </div>
        <div></div>
      </div>

      <div className="flex flex-col">
        <p>selamlar</p>
        <img src={img}/>
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
