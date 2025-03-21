import { useState } from 'react';
import iconMapper from '../../../utils/iconMapper';

function Category({ title, aytım, iconName }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col bg-none text-white rounded-2xl w-50 px-3 py-2 hover:bg-gray-50/5 "
    >
      <div className="flex gap-3">
        <h1>{iconMapper[iconName]}</h1>
        <h1>{title}</h1>
      </div>

      <div>
        <ul className={isOpen ? 'block' : 'hidden'}>
          {aytım.map((it, index) => (
            <li
              className="hover:bg-gray-50/10 px-3 py-2 pl-9 rounded-2xl"
              key={index}
            >
              {it}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Category;
