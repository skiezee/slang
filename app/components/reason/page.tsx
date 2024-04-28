import React from "react";
import Image from "next/image";

export default function Reason() {
    return (
        <div className="flex flex-col m-6 md:m-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
                <div className="flex flex-col mb-6 md:mb-0">
                    <p className="font-extrabold text-3xl md:text-4xl text-[#190041]">Why you&apos;ll choose</p>
                    <Image
                        src="/slang..svg"
                        alt="slang"
                        width={168}
                        height={40}
                        className="mt-6"
                    />
                </div>
                <p className="max-w-xs md:max-w-[22%] text-sm md:text-base text-[#12141D] opacity-70 font-regular">So why choose Slang? Because we believe that learning English should be more than just a task on your to-do list—it should be a transformative journey that enriches your life.</p>
            </div>

            <div className="mt-12 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg">
                    <a href="#">
                        <Image
                            src="/angaging.svg"
                            alt="engaging"
                            width={352}
                            height={352}
                            className="mt-6"
                        />
                    </a>
                    <div className="mt-8">
                        <h5 className="font-extrabold text-xl text-[#190041] mb-2">Engaging Learning Experience</h5>
                        <p className="text-sm md:text-base text-[#12141D] opacity-70 font-regular">At Slang, we believe that learning should be anything but dull. Say goodbye to traditional textbooks and mundane exercises with an immersive and interactive learning experience</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                    <a href="#">
                        <Image
                            src="/tailored.svg"
                            alt="tailored"
                            width={352}
                            height={352}
                            className="mt-6"
                        />
                    </a>
                    <div className="mt-8">
                        <h5 className="font-extrabold text-xl text-[#190041] mb-2">Tailored to Your Needs</h5>
                        <p className="text-sm md:text-base text-[#12141D] opacity-70 font-regular">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg">
                    <a href="#">
                        <Image
                            src="/angaging.svg"
                            alt="engaging"
                            width={352}
                            height={352}
                            className="mt-6"
                        />
                    </a>
                    <div className="mt-8">
                        <h5 className="font-extrabold text-xl text-[#190041] mb-2">Stay Relevant in Today&apos;s World</h5>
                        <p className="text-sm md:text-base text-[#12141D] opacity-70 font-regular">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
