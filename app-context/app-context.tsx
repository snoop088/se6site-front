import React from "react";

export type StreameyeContext = {
  data: Record<string, any>;
  setProp: (prop?: any) => void;
};

export const AppContext = React.createContext<StreameyeContext>({
  data: {},
  setProp: () => {},
});
