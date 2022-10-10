import React, { useContext} from 'react';
import * as ReactDOM from 'react-dom';
import AppContext from '../AppContext/AppContext';

function Sidebar() {

    const elementToMount = document.body.querySelector('#sidebar')
    
    const { stateMutators: { closeNavBar }} = useContext(AppContext);

    return ReactDOM.createPortal(
        <section>
            <h1>
                This is the Sidebar
            </h1>
            <button onClick={ () => closeNavBar()}>Close Me</button>
        </section>,
       elementToMount
    );

}

export default Sidebar;
