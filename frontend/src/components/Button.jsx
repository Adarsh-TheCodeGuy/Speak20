const Button = ({
    children,
    type = "button",
    onClick,
    disabled = false,
    className = "",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`
                w-full
                py-3
                px-5
                rounded-xl
                bg-[#171717]
                text-white
                font-medium
                transition-all
                duration-200
                hover:bg-[#2a2a2a]
                active:scale-[0.98]
                disabled:opacity-50
                disabled:cursor-not-allowed
                ${className}
            `}
        >
            {children}
        </button>
    );
};

export default Button;