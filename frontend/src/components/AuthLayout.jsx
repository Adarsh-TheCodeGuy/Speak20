import Logo from "./Logo";

const AuthLayout = ({ children }) => {
    return (
        <div className="min-h-screen grid lg:grid-cols-2 bg-[#F7F7F3]">

            {/* Brand Section */}
            <div className="hidden lg:flex flex-col justify-between p-10 xl:p-14 bg-[#171717] text-white">

                <Logo light />

                <div className="max-w-lg">
                    <p className="text-sm uppercase tracking-[0.25em] text-[#A3A3A3] mb-6">
                        Your communication gym
                    </p>

                    <h2 className="text-5xl xl:text-6xl font-semibold tracking-tight leading-[1.05]">
                        Research.
                        <br />
                        Think.
                        <br />
                        <span className="text-[#F4C430]">
                            Speak.
                        </span>
                    </h2>

                    <p className="mt-8 text-[#A3A3A3] text-lg leading-relaxed max-w-md">
                        Spend 20 minutes learning something new.
                        Then explain what you learned in just one minute.
                    </p>
                </div>

                <div className="flex items-center gap-8 text-sm text-[#737373]">
                    <div>
                        <span className="text-white font-medium">
                            20
                        </span>{" "}
                        min research
                    </div>

                    <div className="w-1 h-1 rounded-full bg-[#737373]" />

                    <div>
                        <span className="text-white font-medium">
                            01
                        </span>{" "}
                        min speaking
                    </div>
                </div>
            </div>

            {/* Form Section */}
            <div className="flex flex-col min-h-screen">

                <div className="p-6 lg:hidden">
                    <Logo />
                </div>

                <div className="flex-1 flex items-center justify-center px-6 py-10">
                    <div className="w-full max-w-md">
                        {children}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AuthLayout;