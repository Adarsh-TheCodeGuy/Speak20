import { createContext, useEffect, useState } from "react";
import authService from "../services/authService";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(
        localStorage.getItem("speak20_token")
    );
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const restoreUser = async () => {
            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const response = await authService.getProfile(token);

                setUser(response.user);
            } catch (error) {
                localStorage.removeItem("speak20_token");
                setToken(null);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        restoreUser();
    }, [token]);

    const register = async (userData) => {
        const response = await authService.register(userData);

        localStorage.setItem("speak20_token", response.token);

        setToken(response.token);
        setUser(response.user);

        return response;
    };

    const login = async (credentials) => {
        const response = await authService.login(credentials);

        localStorage.setItem("speak20_token", response.token);

        setToken(response.token);
        setUser(response.user);

        return response;
    };

    const logout = () => {
        localStorage.removeItem("speak20_token");

        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                register,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;