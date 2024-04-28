import React from "react";
import Image from "next/image";

export default function Fluency() {
    return (
        <>
            <div className="flex flex-col md:flex-row mt-10 md:mt-60 m-6 md:m-24">
                <Image
                    src="/data.svg"
                    alt="data"
                    width={600}
                    height={500}
                    className="mt-6 md:mr-6"
                />
                <div className="flex flex-col justify-center">
                    <p className="text-2xl md:text-4xl text-[#190041] font-bold mb-4">Empowering Fluency</p>
                    <p className="text-lg md:text-xl text-[#12141D] font-medium max-w-[60%] mb-4">Empower you to achieve fluency in English through an immersive and dynamic learning experience</p>
                    <p className="text-base md:text-lg text-[#12141D] opacity-70 max-w-[60%]">Our platform goes beyond traditional methods, offering engaging content and interactive activities that captivate your interest and drive progress. With Slang, you&apos;l unleash your full potential and confidently navigate the global landscape with language mastery at your fingertips.</p>
                </div>
            </div>

        </>
    )
}