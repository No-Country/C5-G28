

import "./App.css";
import StoreProvider from "./store/storeProvider";
import { AppRouter } from "./routes/AppRouter";



function App() {

  return (
    <div className="App">
      <StoreProvider>
        <AppRouter/>
      </StoreProvider>
    </div>
  );
}

export default App;
