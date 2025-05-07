import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const { isCheking, loginWithEmailPassword } = useAuthContext();
  return (
    <>
      {isCheking ? (
        <>
          <h3>Verificando Usuario</h3>
        </>
      ) : (
        <>
          <h3 className="text-blue-500 font-bold text-2xl">
            Ingresar a la aplicacion
          </h3>
          <button
            className="bg-orange-400 p-2 rounded-2xl mt-1 "
            onClick={() =>
              loginWithEmailPassword("cagugeia@unimayor.edu.co", "1002777958")
            }
          >
            ingresar
          </button>
          <div></div>
        </>
      )}
    </>
  );
};
