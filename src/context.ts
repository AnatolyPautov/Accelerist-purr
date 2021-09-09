import React from 'react';

interface AppContextInterface {
  filterActive: boolean;
  setFilterActive(filterActive: boolean): void;
}

const contextDefaultValues: AppContextInterface = {
  filterActive: false,
  setFilterActive: () => {},
};
const Context = React.createContext<AppContextInterface>(contextDefaultValues);

export default Context;
