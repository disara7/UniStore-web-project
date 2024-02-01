import React, { createContext } from 'react';
import all_items from '../Components/Assets/all_items';

export const unistorecontext = createContext();

const unistorecontextProvider = (props) => {
    const contextValue = {all_items: all_items};

    return (
        <unistorecontext.Provider value={contextValue}>
            {props.children}
        </unistorecontext.Provider>
    )
}

export default unistorecontextProvider;