import { Button } from '@mantine/core';
import { useState } from 'react';
function Header({ title, parent }) {
  const [on, setOn] = useState(true);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold"> {title} </h1>
        <p>{parent}</p>
      </div>
      <div className="mt-2 flex gap-3">
        <Button
          style={{
            backgroundColor: on
              ? 'var(--mantine-color-placeholder)'
              : 'transparent',
            padding: '5px 10px',
            borderRadius: '4rem',
            border: '1px solid gray',
            color: 'var(--mantine-color-text)',
          }}
          onClick={() => setOn(true)}
        >
          Posts
        </Button>

        <Button
          style={{
            backgroundColor: !on
              ? 'var(--mantine-color-placeholder)'
              : 'transparent',
            color: 'var(--mantine-color-text)',
            padding: '5px 5px',
            borderRadius: '4rem',
            border: '1px solid gray',
          }}
          onClick={() => setOn(false)}
        >
          Communities
        </Button>
      </div>
    </div>
  );
}

export default Header;
