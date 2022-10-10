import { useState } from 'react'

export default function useAppHook() {

    const [isNavBarOpen, setIsNavBarOpen] = useState(false);

    const state = {
        isNavBarOpen
    };

    const openNavBar = () => {
        setIsNavBarOpen(true);
    }

    const closeNavBar = () => {
        setIsNavBarOpen(false);
    }

    const stateMutators = {
        openNavBar, closeNavBar
    }

    return {
        state, stateMutators
    }
}
