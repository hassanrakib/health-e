import React, { createContext } from 'react';
import useServices from '../hooks/useServices';

export const servicesContext = createContext();

const ServicesProvider = ({children}) => {
    const {services} = useServices();
    return (
        <servicesContext.Provider value={services}>
            {children}
        </servicesContext.Provider>
    );
};

export default ServicesProvider;