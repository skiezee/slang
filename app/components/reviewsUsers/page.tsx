import React from "react";
import Image from "next/image";

export default function Review(){
    return(
        <>
            <div className="bg-[#3A3C40] mt-[175px] mb-12">
                <div className="mx-auto ">
                    <div className="flex flex-col ">
                        <p className="font-bold text-[42px] text-[#FFFFFF] m-24 mt-12">Honest reviews from our users  </p>
                        <div className="flex flex-wrap justify-between mb-12 mx-24">
                            <div className="bg-[#FFFFFF] w-[409px] rounded-[10px]">
                                <div className="flex flex-col m-12">
                                    <div className="flex flex-row">
                                        <Image
                                            src="/pp.svg"
                                            alt="profile"
                                            width={68.82}
                                            height={70}
                                        />
                                        <div className="my-auto ml-4">
                                            <p className="text-[20px] font-bold text-[#12141D]">Udin Alexander</p>
                                            <p className="text-[14px] font-regular text-[#12141D] opacity-[70%]">Freelance Designer</p>
                                        </div>
                                    </div>
                                    <p className="max-w-[100%] mt-4 text-[16px] font-regular text-[#12141D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in augue at nulla mattis sagittis a eu eros. </p>
                                </div>
                            </div>
                            <div className="bg-[#FFFFFF] w-[409px] rounded-[10px]">
                                <div className="flex flex-col m-12">
                                    <div className="flex flex-row">
                                        <Image
                                            src="/pp.svg"
                                            alt="profile"
                                            width={68.82}
                                            height={70}
                                        />
                                        <div className="my-auto ml-4">
                                            <p className="text-[20px] font-bold text-[#12141D]">Udin Alexander</p>
                                            <p className="text-[14px] font-regular text-[#12141D] opacity-[70%]">Freelance Designer</p>
                                        </div>
                                    </div>
                                    <p className="max-w-[100%] mt-4 text-[16px] font-regular text-[#12141D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in augue at nulla mattis sagittis a eu eros. </p>
                                </div>
                            </div>
                            <div className="bg-[#FFFFFF] w-[409px] rounded-[10px]">
                                <div className="flex flex-col m-12">
                                    <div className="flex flex-row">
                                        <Image
                                            src="/pp.svg"
                                            alt="profile"
                                            width={68.82}
                                            height={70}
                                        />
                                        <div className="my-auto ml-4">
                                            <p className="text-[20px] font-bold text-[#12141D]">Udin Alexander</p>
                                            <p className="text-[14px] font-regular text-[#12141D] opacity-[70%]">Freelance Designer</p>
                                        </div>
                                    </div>
                                    <p className="max-w-[100%] mt-4 text-[16px] font-regular text-[#12141D]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in augue at nulla mattis sagittis a eu eros. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}