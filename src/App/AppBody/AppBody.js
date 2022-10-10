import { useContext } from "react";
import AppContext from "../AppContext/AppContext";

const AppBody = () => {

    const { stateMutators: { openNavBar } } = useContext(AppContext);

    return (
        <button onClick={() => openNavBar()}>Click to open up side nav bar</button>
    )
}

export default AppBody;
