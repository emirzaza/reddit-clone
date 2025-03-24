import { useState } from 'react';
import iconMapper from '../../../utils/iconMapper';
import { Link } from '@tanstack/react-router';

function Category({ title, aytım, iconName }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className="flex flex-col bg-none  rounded-2xl w-50 px-3 py-2 hover:bg-[var(--mantine-color-default-hover)] ">
      <div onClick={handleClick} className="flex gap-3">
        <h1>{iconMapper[iconName]}</h1>
        <h1>{title}</h1>
      </div>

      <div>
        <ul className={isOpen ? 'block' : 'hidden'}>
          {aytım.map((it, index) => (
            <li
              className=" px-3 py-2 pl-9 rounded-2xl hover:bg-gray-500/20"
              key={index}
            >
              <Link to={`/t/${it.slug}`}>{it.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
