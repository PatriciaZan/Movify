import { createContext, useContext, useState } from "react";

const TypeContext = createContext();

export function TypeProvider({ children }) {
  const [type, setType] = useState();

  return (
    <TypeContext.Provider value={{ type, setType }}>
      {children}
    </TypeContext.Provider>
  );
}

export function useType() {
  return useContext(TypeContext);
}
