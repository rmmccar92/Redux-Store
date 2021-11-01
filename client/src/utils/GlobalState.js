// import React from "react";
// import { useProductReducer } from "./reducers";
import { Provider } from "react-redux";
import store from "./store";

// const StoreContext = createContext();
// const { Provider } = StoreContext;

export const StoreProvider = ({ ...props }) => {
  return <Provider store={store} {...props} />;
};

// const useStoreContext = () => {
//   return useContext(StoreContext);
// };

// export { StoreProvider, useStoreContext };
