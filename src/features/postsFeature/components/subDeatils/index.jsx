import React, { useState } from 'react';
import SubHover from './subHover';
import UserHover from './userHover';

function SubDetails() {
  const [subOpen, setSubOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  return (
    <div className="flex gap-2 items-center relative">
      <div>
        <img className="rounded-full size-10" src="/image0.jpg" />
      </div>
      <div>
        <p
          className="hover:text-red-200"
          onMouseEnter={() => setSubOpen(true)}
          onMouseLeave={() => setSubOpen(false)}
        >
          r/webdev
          {subOpen && <SubHover />}
        </p>

        <p
          className="hover:text-red-200"
          onMouseEnter={() => setUserOpen(true)}
          onMouseLeave={() => setUserOpen(false)}
        >
          PatternFar2989
          {userOpen && <UserHover />}
        </p>
      </div>
    </div>
  );
}

export default SubDetails;
