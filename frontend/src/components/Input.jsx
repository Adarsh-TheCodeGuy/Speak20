import { useState } from "react";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Input = ({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
}) => {
    const [showPassword, setShowPassword] = useState(false);

    const isPassword = type === "password";

    const inputType = isPassword && showPassword
        ? "text"
        : type;

    return (
        <div className="space-y-2">
            <label
                htmlFor={name}
                className="block text-sm font-medium text-[#171717]"
            >
                {label}
            </label>

            <div className="relative">
                <input
                    id={name}
                    name={name}
                    type={inputType}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="
                        w-full
                        px-4
                        py-3
                        pr-12
                        rounded-xl
                        border
                        border-[#E5E5E0]
                        bg-white
                        text-[#171717]
                        placeholder:text-[#A3A3A3]
                        outline-none
                        transition
                        focus:border-[#171717]
                        focus:ring-2
                        focus:ring-[#171717]/5
                    "
                />

                {isPassword && (
                    <button
                        type="button"
                        onClick={() =>
                            setShowPassword((prev) => !prev)
                        }
                        className="
                            absolute
                            right-3
                            top-1/2
                            -translate-y-1/2
                            p-1
                            text-[#737373]
                            hover:text-[#171717]
                            transition-colors
                        "
                        aria-label={
                            showPassword
                                ? "Hide password"
                                : "Show password"
                        }
                    >
                        {showPassword ? (
                            <LuEyeOff size={19} />
                        ) : (
                            <LuEye size={19} />
                        )}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Input;