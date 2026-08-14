import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import AuthLayout from "../components/AuthLayout";
import Input from "../components/Input";
import Button from "../components/Button";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            await login(formData);
            navigate("/dashboard");
        } catch (error) {
            setError(
                error.response?.data?.message ||
                "Something went wrong. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout>
            <div>
                <div className="mb-10">
                    <p className="text-sm font-medium text-[#737373] mb-3">
                        WELCOME BACK
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight text-[#171717]">
                        Ready for another challenge?
                    </h1>

                    <p className="mt-3 text-[#737373] leading-relaxed">
                        Sign in and get back to learning,
                        thinking and speaking.
                    </p>
                </div>

                {error && (
                    <div className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >
                    <Input
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                    />

                    <Input
                        label="Password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                    />

                    <div className="pt-2">
                        <Button
                            type="submit"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign in"}
                        </Button>
                    </div>
                </form>

                <div className="mt-8 text-center text-sm text-[#737373]">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="font-medium text-[#171717] underline underline-offset-4 hover:text-[#F4C430] transition-colors"
                    >
                        Create one
                    </Link>
                </div>
            </div>
        </AuthLayout>
    );
};

export default Login;