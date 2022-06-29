import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context";



export const LoginPage = () => {

    const { onLogin } = useContext(AuthContext)
    const navigate = useNavigate();

    const handleClick = () => {

        const lastPath = localStorage.getItem('lastPath') || '/';
        onLogin('Nolisimo')
        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="container mt-5">
            <h1>LoginPage</h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={handleClick}
            >
                Login
            </button>
        </div>
    )
}
