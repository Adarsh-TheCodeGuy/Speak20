import logo from "../assets/Speak20_logo.svg";

const Logo = ({ light = false }) => {
    return (
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center">
                <img
                    src={logo}
                    alt="Speak20 logo"
                    className="w-8 h-8 object-contain"
                />
            </div>

            <span
                className={`text-xl font-bold tracking-tight ${
                    light ? "text-white" : "text-[#171717]"
                }`}
            >
                SPEAK20
            </span>
        </div>
    );
};

export default Logo;