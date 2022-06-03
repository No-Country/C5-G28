
import { useMemo,useState } from "react";
import "./App.css";
import { UserContext } from "./hooks/UserContext";
import { AppRouter } from "./routes/AppRouter";



function App() {

  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <UserContext.Provider value={value}>
        <AppRouter/>
      </UserContext.Provider>
    </div>
  );
}

export default App;
