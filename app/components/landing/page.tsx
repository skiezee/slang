import React from "react";

export default function Landing() {
    return (
        <div className="flex flex-col items-center mt-16 md:mt-40">
            <div className="flex flex-wrap mx-auto">
                <p className="font-[#190041] text-4xl md:text-6xl font-extrabold mx-4">Learn</p>
                <p className="bg-[#7FE6FF] font-[#190041] text-4xl md:text-6xl font-extrabold">English</p>
            </div>
            <div className="flex flex-wrap mt-4 md:mt-8 mx-auto">
                <p className="bg-[#23DF83] font-[#190041] text-4xl md:text-6xl font-extrabold">Empower </p>
                <p className="font-[#190041] text-4xl md:text-6xl font-extrabold mx-2">Your</p>
                <p className="font-[#190041] text-4xl md:text-6xl font-extrabold"> World</p>
            </div>
            <div className="text-center mx-auto font-medium text-[#12141D] opacity-70 text-base md:text-lg mt-6 md:mt-12 max-w-[50%]">
                Discover innovative and enjoyable English learning methods on our platform. Start your journey to mastering this global language and unlock endless opportunities!
            </div>

            <div className="relative mt-8 md:mt-12 flex justify-center">
                <form className="relative">
                    <input
                        type="search"
                        id="search"
                        className="block w-full md:w-[600px] p-4 pr-12 text-sm md:text-base text-gray-900 border border-gray-300 rounded-lg"
                        placeholder="Enter your email address"
                        required
                    />
                    <button
                        type="submit"
                        className="absolute inset-y-0 right-0 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-lg text-sm md:text-base px-4 py-2"
                    >
                        Start Learning
                    </button>
                </form>
            </div>

            <p className="text-center text-sm md:text-base text-[#3F3F46] opacity-60 mt-4">1 min signup. Start exploring new things</p>
        </div>
    );
}
