import { useAuthContext } from "../contex/AuthContext";
export const LoginPage = () => {
    const {isActive} = useAuthContext();
  return (
    <div>
        <h3>Login Page</h3>
        <span>{isActive}</span>
    </div>
  )
}
