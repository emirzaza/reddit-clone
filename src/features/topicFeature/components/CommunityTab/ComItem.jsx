function ComItem({ img, name, num, p }) {
  return (
    <div className="flex  p-2 items-center text-xs my-2 hover:bg-[var(--mantine-color-default-hover)] rounded-2xl">
      <div className="flex gap-2 ">
        <div>
          <img className="rounded-full w-20 " src={img} />
        </div>
        <div>
          <p className="font-bold">{name}</p>
          <p>{p}</p>
          <p>{num}</p>
        </div>
      </div>
    </div>
  );
}

export default ComItem;
