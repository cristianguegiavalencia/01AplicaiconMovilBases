// LoginPage.tsx
import { useAuthContext } from "../context/AuthContext";

export const LoginPage = () => {
    const { isCheking, loginWithEmailPassword, logout, user } = useAuthContext();

    if (isCheking) {
        return (
            <h3>Verificando Usuario...</h3>
        );
    }

    return (
        <div className="flex justify-center items-center flex-col">
            {!user ? (
                <>
                    <h3 className="text-blue-500 font-bold text-2xl">
                        Ingresar a la aplicacion
                    </h3>
                    <button
                        className="bg-orange-400 p-2 rounded-2xl mt-1"
                        onClick={() =>
                            loginWithEmailPassword("cagugeia@unimayor.edu.co", "1002777958")
                        }
                    >
                        Ingresar
                    </button>
                </>
            ) : (
                <>
                    <h3 className="text-green-500 font-bold text-2xl">Bienvenido, {user.name}!</h3>
                    <p>Email: {user.email}</p>
                    <p>Rol: {user.role}</p>
                    <button
                        className="bg-red-500 p-2 rounded-2xl mt-1"
                        onClick={logout}
                    >
                        Cerrar Sesión
                    </button>
                </>
            )}
        </div>
    );
};
