import iconMapper from '../../../utils/iconMapper';

function Single({ title, iconName }) {
  return (
    <div className="flex gap-3 bg-none text-white rounded-2xl w-50 px-3 py-2  hover:bg-gray-50/5">
      <h1>{iconMapper[iconName]}</h1>
      <h1>{title}</h1>
    </div>
  );
}

export default Single;
