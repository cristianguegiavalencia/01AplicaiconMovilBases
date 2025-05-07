import "./App.css";

import { AuthProvider } from "./contex/AuthContext";
import { LoginPage } from "./component/LoginPage";

function App() {
  return (
    <AuthProvider>
      <>
        <div className="flex flex-col justify-center items-center h-svh w-svw">
          <h1 className="text-4xl mb-5 ">Use States</h1>
          <LoginPage/>
        </div>
      </>
      
    </AuthProvider>

  );
}

export default App;
