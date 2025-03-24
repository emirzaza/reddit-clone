import { Button, ActionIcon, Popover, Input } from '@mantine/core';
import { IconAlignLeft2, IconDots } from '@tabler/icons-react';
import { useState } from 'react';
import { useNavbar } from '../contexts/NavbarContext';

function Navbar() {
  const [opened, setOpened] = useState(false);
  const { toggle } = useNavbar();

  return (
    <>
      <div className="flex justify-between h-full">
        <div className="h-full flex items-center">
          <IconAlignLeft2 className=" ml-5" onClick={toggle}></IconAlignLeft2>
          <img className="h-full p-1 ml-5" src="/logo.png" />
          <h1 className="text-Black ml-3 font-bold text-2xl text-white">
            Reddit
          </h1>
        </div>

        <div className="flex items-center">
          <Input variant="filled" placeholder="Search On Reddit" />
        </div>

        <div className="hidden md:flex items-center justify-between">
          <Button
            style={{
              backgroundColor: 'red',
              padding: '3px',
              borderRadius: '4rem',
              marginRight: '1rem',
            }}
          >
            Log in
          </Button>
          <Button
            style={{
              backgroundColor: 'gray',
              padding: '3px',
              borderRadius: '4rem',
              marginRight: '1rem',
            }}
          >
            Get App
          </Button>
          <Popover
            opened={opened}
            onChange={setOpened}
            width={200}
            position="bottom"
            withArrow
            shadow="md"
          >
            <Popover.Target>
              <ActionIcon
                onClick={() => setOpened(o => !o)}
                style={{
                  backgroundColor: 'red',
                  padding: '3px',
                  borderRadius: '4rem',
                  marginRight: '1rem',
                }}
              >
                <IconDots />
              </ActionIcon>
            </Popover.Target>

            <Popover.Dropdown>
              <ul>
                <li className="hover:bg-[var(--mantine-color-default-hover)] rounded-2xl px-3 py-1">
                  Settings
                </li>
                <li className="hover:bg-[var(--mantine-color-default-hover)]  rounded-2xl px-3 py-1">
                  User
                </li>
                <li className="hover:bg-[var(--mantine-color-default-hover)]  rounded-2xl px-3 py-1">
                  Try Reddit Pro
                </li>
              </ul>
            </Popover.Dropdown>
          </Popover>
        </div>
      </div>
    </>
  );
}

export default Navbar;
