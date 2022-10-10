import { useContext } from "react";
import AppContext from "../AppContext/AppContext";

const OpenButton = () => {
    const { stateMutators: { openNavBar } } = useContext(AppContext);
    return (
        <button onClick={() => openNavBar()}>Click to open up side nav bar</button>
    )
}

const CloseButton = () => {
    const { stateMutators: { closeNavBar } } = useContext(AppContext);
    return (
        <button onClick={() => closeNavBar()}>Click to close the nav bar</button>
    )
}

const AppBody = () => {

    const { state: { isNavBarOpen }} = useContext(AppContext);

    return isNavBarOpen ? (<CloseButton />): (<OpenButton />)
}

export default AppBody;
