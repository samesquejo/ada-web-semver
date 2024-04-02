// LIBRARIES
import useApp from "./hooks/useAppHook";

// ROUTES
import AppRouter from "./router";

const App = () => {
  useApp();

  return <AppRouter />;
};

export default App;
