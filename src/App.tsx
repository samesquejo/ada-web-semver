// LIBRARIES
import useApp from "./hooks/useAppHook";

// ROUTES
import AppRouter from "./router";

const App = () => {
  useApp();
  // 0.1.0
  return <AppRouter />;
};

export default App;
