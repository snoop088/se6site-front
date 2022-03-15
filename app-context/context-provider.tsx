import React, { ReactNode, useState } from "react";
import { AppContext, StreameyeContext } from "./app-context";

interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [appState, setAppState] = useState<{ data: Record<string, any> }>({
    data: {},
  });
  return (
    <AppContext.Provider
      value={{
        data: appState.data,
        setProp: (prop?) => {
          if (prop) {
            setAppState((current) => ({ ...current.data, data: { ...prop } }));
          }
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
