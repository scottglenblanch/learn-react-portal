import { useContext } from 'react';
import AppContext from "./AppContext";

export function useGetIsNavBarOpenHook() {
    const { state: { isNavBarOpen }} = useContext(AppContext)

    return isNavBarOpen;
}