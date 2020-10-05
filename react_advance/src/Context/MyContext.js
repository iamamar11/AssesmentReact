import React, { createContext } from 'react';

const ThemeContext = createContext({
    Title  : 'Context Tutorial',
    Type : "cosumer and provider"
})

const MyConsumer = ThemeContext.Consumer;
const MyProvider = ThemeContext.Provider;

export { MyConsumer, MyProvider }
export default ThemeContext
