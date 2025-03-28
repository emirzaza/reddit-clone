import { Route } from '../../../../routes/t.$slug';

function Header() {
  const { info } = Route.useLoaderData();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col">
        <h1 className="text-3xl font-bold"> {info.title} </h1>
        <p>{info.parent}</p>
      </div>
    </div>
  );
}

export default Header;
