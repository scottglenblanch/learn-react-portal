import AppContext from './AppContext/AppContext';
import AppBody from './AppBody';
import Sidebar from './Sidebar';
import useAppHook from './useAppHook';

const App = () => {

  const { state, stateMutators } = useAppHook();

  return (
    <AppContext.Provider value={{ state, stateMutators }}>
      <AppBody />
      <Sidebar />
    </AppContext.Provider>

  );
}

export default App;
