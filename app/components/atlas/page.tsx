import React from "react";
import Image from "next/image";

export default function Atlas() {
    return (
        <>
            <div className="m-24">
                <div className="flex flex-col items-center">
                    <div className="flex flex-row flex-wrap mx-auto">
                        <p className="text-[48px] text-[#190041] font-extrabold">Learn English easily with </p>
                        <Image
                            src="/slang..svg"
                            alt="slang"
                            width={168}
                            height={40}
                            className="mt-2 lg:ml-4"
                        />
                    </div>
                    <p className="text-[18px] text-[#12141D] font-medium">English learners who use Slang to empower their English journey</p>
                    <Image
                        src="/atlas.svg"
                        alt="atlas"
                        width={1272}
                        height={658}
                        className="mt-16"
                    />
                </div>
                <div className="flex flex-wrap justify-between justify-center mt-24 ">
                    <div className="text-center mx-12   md:mx-8 lg:mx-4">
                        <h1 className="font-bold text-[72px] text-[#000000]">0.3k+</h1>
                        <h1 className="font-regular text-[20px] text-[#12141D]">Daily register from new users</h1>
                    </div>
                    <div className="text-center mx-12   md:mx-8 lg:mx-4">
                        <h1 className="font-bold text-[72px] text-[#000000]">8.9k+</h1>
                        <h1 className="font-regular text-[20px] text-[#12141D]">Total users over the world</h1>
                    </div>
                    <div className="text-center mx-12 sm:mx-4 md:mx-8 lg:mx-4">
                        <h1 className="font-bold text-[72px] text-[#000000]">122+</h1>
                        <h1 className="font-regular text-[20px] text-[#12141D]">User&apos;s locations</h1>
                    </div>
                </div>
            </div>

        </>
    )
}