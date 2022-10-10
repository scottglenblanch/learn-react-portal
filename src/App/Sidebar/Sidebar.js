import React, { useContext} from 'react';
import * as ReactDOM from 'react-dom';
import AppContext from '../AppContext/AppContext';

function Sidebar() {

    const elementToMount = document.body.querySelector('#sidebar')
    const { state: { isNavBarOpen }} = useContext(AppContext)
    const { stateMutators: { closeNavBar }} = useContext(AppContext);

    const styleObject = {
        display: isNavBarOpen ? 'block': 'none'
    }

    return ReactDOM.createPortal(
        <section style={styleObject}>
            <h1>
                This is the Sidebar
            </h1>
            <button onClick={ () => closeNavBar()}>Close Me</button>
        </section>,
       elementToMount
    );

}

export default Sidebar;
