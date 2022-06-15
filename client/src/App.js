import "./App.css";
import StoreProvider from "./store/storeProvider";
import { AppRouter } from "./routes/AppRouter";
import { PreferencesContextProvider } from "./store/PreferencesContext.js";

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <PreferencesContextProvider>
          <AppRouter />
        </PreferencesContextProvider>
      </StoreProvider>
    </div>
  );
}

export default App;
