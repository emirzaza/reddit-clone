import iconMapper from '../../../utils/iconMapper';

function Single({ title, iconName }) {
  return (
    <div className="flex gap-3 bg-none  rounded-2xl w-50 px-3 py-2  hover:bg-[var(--mantine-color-default-hover)]">
      <h1>{iconMapper[iconName]}</h1>
      <h1>{title}</h1>
    </div>
  );
}

export default Single;
