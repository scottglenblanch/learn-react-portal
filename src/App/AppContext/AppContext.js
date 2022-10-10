import { createContext } from 'react';

const AppContext = createContext({
    state: {
        isNavBarOpen: false
    },
    stateMutators: {
        openNavBar: () => {},
        closeNavBar: () => {}
    }
})

export default AppContext;
