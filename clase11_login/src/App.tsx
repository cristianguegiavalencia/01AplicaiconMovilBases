import "./App.css";
import { AuthProvider } from "./context/AuthContext"; // ✅ Ajusta ruta si es necesario
import { LoginPage } from "./component/LoginPage";

function App() {
  return (

    <AuthProvider>
      <>
        <LoginPage />
      </>
    </AuthProvider>
  );
}

export default App;
