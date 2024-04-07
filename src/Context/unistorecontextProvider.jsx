import React, { createContext } from 'react';
import all_items from '../Components/Assets/all_items';

export const unistorecontext = createContext();

const UnistorecontextProvider = (props) => {
    const contextValue = { all_items };

    return (
        <unistorecontext.Provider value={contextValue}>
            {props.children}
        </unistorecontext.Provider>
    );
};

export default UnistorecontextProvider;
