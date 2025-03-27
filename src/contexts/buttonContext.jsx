import { createContext, useContext, useState } from 'react';
import { Route } from '../routes/t.$slug';

const ButtonContext = createContext();

export const useButton = () => useContext(ButtonContext);

const ButtonProvider = ({ children }) => {
  const [on, setOn] = useState('post');
  const { data: data } = Route.useLoaderData();

  return (
    <ButtonContext.Provider value={{ on, setOn, data }}>
      {children}
    </ButtonContext.Provider>
  );
};

export default ButtonProvider;
