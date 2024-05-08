import React from "react";

const DataContext = React.createContext(); // Create a context object

const DataProvider = DataContext.Provider; // Provider component
const DataConsumer = DataContext.Consumer; // Consumer component

export { DataProvider, DataConsumer, DataContext }; // Export Provider and Consumer
export default DataContext; // Export the context object
